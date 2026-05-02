import 'dotenv/config';
import express from 'express';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT || 3000);

const CONFIG = {
  publicBaseUrl: stripTrailingSlash(process.env.PUBLIC_BASE_URL || `http://localhost:${PORT}`),
  adminExportKey: process.env.ADMIN_EXPORT_KEY || '',
  squareEnvironment: (process.env.SQUARE_ENVIRONMENT || 'sandbox').toLowerCase(),
  squareAccessToken: process.env.SQUARE_ACCESS_TOKEN || '',
  squareLocationId: process.env.SQUARE_LOCATION_ID || '',
  squareCurrency: process.env.SQUARE_CURRENCY || 'AUD',
  squareVersion: process.env.SQUARE_VERSION || '2026-01-22',
  squareWebhookNotificationUrl: process.env.SQUARE_WEBHOOK_NOTIFICATION_URL || '',
  squareWebhookSignatureKey: process.env.SQUARE_WEBHOOK_SIGNATURE_KEY || '',
  supportEmail: process.env.SUPPORT_EMAIL || '',
  dinnerHoldMinutes: Number(process.env.DINNER_HOLD_MINUTES || 15),
  maxTicketsPerOrder: Number(process.env.MAX_TICKETS_PER_ORDER || 10)
};

const EVENT_CONFIG = {
  lunch: {
    title: "Mother's Day Lunch Buffet",
    date: 'May 10, 2026',
    time: '12:00 PM - 4:00 PM',
    guests11PlusPriceCents: 4500,
    children5To10PriceCents: 2250,
    children4BelowPriceCents: 0
  },
  dinner: {
    title: 'Dinner Show with Maestro Rey Valera',
    date: 'May 10, 2026',
    time: '5:00 PM Doors | 7:00 PM Show',
    ticketPriceCents: 6500,
    maxTickets: 110
  }
};

const DATA_DIR = path.join(__dirname, 'data');
const LUNCH_FILE = path.join(DATA_DIR, 'lunchBookings.json');
const DINNER_FILE = path.join(DATA_DIR, 'dinnerBookings.json');
const WEBHOOK_FILE = path.join(DATA_DIR, 'squareWebhookEvents.json');

ensureDataFiles();

let dataLock = Promise.resolve();
const releaseInProgress = new Set();

function stripTrailingSlash(value) {
  return String(value).replace(/\/$/, '');
}

function ensureDataFiles() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  for (const file of [LUNCH_FILE, DINNER_FILE, WEBHOOK_FILE]) {
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, '[]\n', 'utf8');
    }
  }
}

async function withDataLock(task) {
  const previous = dataLock;
  let release;
  dataLock = new Promise((resolve) => {
    release = resolve;
  });

  await previous.catch(() => undefined);

  try {
    return await task();
  } finally {
    release();
  }
}

function readJson(file, fallback = []) {
  try {
    const raw = fs.readFileSync(file, 'utf8');
    return raw.trim() ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.error(`Failed to read ${file}:`, error);
    return fallback;
  }
}

function writeJson(file, data) {
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

function nowIso() {
  return new Date().toISOString();
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60 * 1000);
}

function makeBookingId(prefix) {
  const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randomPart = crypto.randomBytes(3).toString('hex').toUpperCase();
  return `${prefix}-${datePart}-${randomPart}`;
}

function money(cents) {
  return `$${(Number(cents || 0) / 100).toFixed(2)}`;
}

function parseInteger(value, fieldName, min, max) {
  const number = Number(value);
  if (!Number.isInteger(number) || number < min || number > max) {
    throw new UserError(`${fieldName} must be a whole number from ${min} to ${max}.`);
  }
  return number;
}

function cleanText(value, maxLength = 200) {
  return String(value || '').trim().replace(/\s+/g, ' ').slice(0, maxLength);
}

function cleanLongText(value, maxLength = 1000) {
  return String(value || '').trim().slice(0, maxLength);
}

function validateEmail(value) {
  const email = cleanText(value, 254).toLowerCase();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValid) {
    throw new UserError('Please enter a valid email address.');
  }
  return email;
}

function validateRequiredText(value, fieldName, maxLength = 200) {
  const text = cleanText(value, maxLength);
  if (!text) {
    throw new UserError(`${fieldName} is required.`);
  }
  return text;
}

class UserError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.status = status;
  }
}

function squareBaseUrl() {
  return CONFIG.squareEnvironment === 'production'
    ? 'https://connect.squareup.com'
    : 'https://connect.squareupsandbox.com';
}

function squareConfigured() {
  return (
    CONFIG.squareAccessToken &&
    !CONFIG.squareAccessToken.startsWith('replace') &&
    CONFIG.squareLocationId &&
    !CONFIG.squareLocationId.startsWith('replace')
  );
}

function requireSquareConfigured() {
  if (!squareConfigured()) {
    throw new UserError('Square is not configured yet. Add SQUARE_ACCESS_TOKEN and SQUARE_LOCATION_ID to your .env file.', 500);
  }
}

async function squareRequest(pathname, options = {}) {
  requireSquareConfigured();

  const response = await fetch(`${squareBaseUrl()}${pathname}`, {
    ...options,
    headers: {
      'Square-Version': CONFIG.squareVersion,
      Authorization: `Bearer ${CONFIG.squareAccessToken}`,
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  });

  const text = await response.text();
  let json = {};
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    json = { raw: text };
  }

  if (!response.ok) {
    const detail = json.errors ? JSON.stringify(json.errors) : JSON.stringify(json);
    throw new Error(`Square API error ${response.status}: ${detail}`);
  }

  return json;
}

async function createSquarePaymentLink(booking) {
  const redirectUrl = `${CONFIG.publicBaseUrl}/payment-success.html?booking=${encodeURIComponent(booking.id)}`;

  const checkoutOptions = {
    redirect_url: redirectUrl,
    ask_for_shipping_address: false,
    allow_tipping: false
  };

  if (CONFIG.supportEmail) {
    checkoutOptions.merchant_support_email = CONFIG.supportEmail;
  }

  const payload = {
    idempotency_key: booking.squareIdempotencyKey,
    description: `SoulFood Rey Valera Dinner Show - ${booking.id}`,
    payment_note: `SoulFood Dinner Show booking ${booking.id}`,
    order: {
      location_id: CONFIG.squareLocationId,
      reference_id: booking.id,
      line_items: [
        {
          name: 'Rey Valera Dinner Show Ticket',
          quantity: String(booking.ticketQuantity),
          base_price_money: {
            amount: EVENT_CONFIG.dinner.ticketPriceCents,
            currency: CONFIG.squareCurrency
          }
        }
      ],
      metadata: {
        booking_id: booking.id,
        event: 'rey_valera_mothers_day_dinner_show'
      }
    },
    checkout_options: checkoutOptions,
    pre_populated_data: {
      buyer_email: booking.email,
      buyer_phone_number: booking.phone
    }
  };

  const result = await squareRequest('/v2/online-checkout/payment-links', {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  if (!result.payment_link?.url || !result.payment_link?.order_id) {
    throw new Error('Square did not return a payment link URL and order ID.');
  }

  return result.payment_link;
}

async function deleteSquarePaymentLink(paymentLinkId) {
  if (!paymentLinkId) return;
  await squareRequest(`/v2/online-checkout/payment-links/${encodeURIComponent(paymentLinkId)}`, {
    method: 'DELETE'
  });
}

function activeOrPaidDinnerTickets(bookings) {
  return bookings.reduce((sum, booking) => {
    if (booking.status === 'paid' || booking.status === 'checked_in' || booking.status === 'pending_payment') {
      return sum + Number(booking.ticketQuantity || 0);
    }
    return sum;
  }, 0);
}

function paidDinnerTickets(bookings) {
  return bookings.reduce((sum, booking) => {
    if (booking.status === 'paid' || booking.status === 'checked_in') {
      return sum + Number(booking.ticketQuantity || 0);
    }
    return sum;
  }, 0);
}

function remainingDinnerTickets(bookings) {
  return Math.max(0, EVENT_CONFIG.dinner.maxTickets - activeOrPaidDinnerTickets(bookings));
}

function assignTicketNumbers(bookings, ticketQuantity) {
  const used = new Set();

  for (const booking of bookings) {
    if (!Array.isArray(booking.ticketNumbers)) continue;
    for (const ticket of booking.ticketNumbers) {
      used.add(ticket);
    }
  }

  const assigned = [];
  for (let number = 1; number <= EVENT_CONFIG.dinner.maxTickets; number += 1) {
    const ticketNumber = `RV-${String(number).padStart(3, '0')}`;
    if (!used.has(ticketNumber)) {
      assigned.push(ticketNumber);
    }
    if (assigned.length === ticketQuantity) break;
  }

  if (assigned.length !== ticketQuantity) {
    throw new Error('Not enough ticket numbers are available.');
  }

  return assigned;
}

async function releaseExpiredPendingBookings() {
  const expiredCandidates = await withDataLock(() => {
    const bookings = readJson(DINNER_FILE, []);
    const now = Date.now();

    return bookings
      .filter((booking) => {
        return (
          booking.status === 'pending_payment' &&
          booking.expiresAt &&
          new Date(booking.expiresAt).getTime() <= now &&
          !releaseInProgress.has(booking.id)
        );
      })
      .map((booking) => ({
        id: booking.id,
        squarePaymentLinkId: booking.squarePaymentLinkId
      }));
  });

  for (const candidate of expiredCandidates) {
    releaseInProgress.add(candidate.id);

    try {
      if (candidate.squarePaymentLinkId && squareConfigured()) {
        await deleteSquarePaymentLink(candidate.squarePaymentLinkId);
      }

      await withDataLock(() => {
        const bookings = readJson(DINNER_FILE, []);
        const index = bookings.findIndex((booking) => booking.id === candidate.id);

        if (index >= 0 && bookings[index].status === 'pending_payment') {
          bookings[index].status = 'expired';
          bookings[index].paymentStatus = 'Expired / Not Paid';
          bookings[index].expiredAt = nowIso();
          bookings[index].updatedAt = nowIso();
          writeJson(DINNER_FILE, bookings);
        }
      });
    } catch (error) {
      console.error(`Failed to release expired booking ${candidate.id}:`, error);
    } finally {
      releaseInProgress.delete(candidate.id);
    }
  }
}

function verifySquareWebhookSignature(rawBody, signatureHeader) {
  const signatureKey = CONFIG.squareWebhookSignatureKey;
  const notificationUrl = CONFIG.squareWebhookNotificationUrl || `${CONFIG.publicBaseUrl}/api/square/webhook`;

  if (!signatureKey || signatureKey.startsWith('replace')) {
    if (process.env.NODE_ENV === 'production') return false;
    console.warn('Square webhook signature key is not configured. Signature check skipped in development only.');
    return true;
  }

  if (!signatureHeader) return false;

  const expectedSignature = crypto
    .createHmac('sha256', signatureKey)
    .update(notificationUrl + rawBody)
    .digest('base64');

  const expectedBuffer = Buffer.from(expectedSignature, 'base64');
  const receivedBuffer = Buffer.from(signatureHeader, 'base64');

  if (expectedBuffer.length !== receivedBuffer.length) return false;
  return crypto.timingSafeEqual(expectedBuffer, receivedBuffer);
}

async function markDinnerBookingPaidByOrder(orderId, payment = {}) {
  if (!orderId) return;

  await withDataLock(() => {
    const bookings = readJson(DINNER_FILE, []);
    const index = bookings.findIndex((booking) => booking.squareOrderId === orderId);

    if (index < 0) {
      console.warn(`No local dinner booking found for Square order ${orderId}.`);
      return;
    }

    const booking = bookings[index];

    if (booking.status === 'paid' || booking.status === 'checked_in') {
      return;
    }

    const otherBookings = bookings.filter((item) => item.id !== booking.id);
    const confirmedCount = paidDinnerTickets(otherBookings);

    if (confirmedCount + Number(booking.ticketQuantity || 0) > EVENT_CONFIG.dinner.maxTickets) {
      booking.status = 'needs_manual_review';
      booking.paymentStatus = 'Paid - Review Ticket Limit';
      booking.squarePaymentId = payment.id || booking.squarePaymentId || '';
      booking.squarePaymentStatus = payment.status || booking.squarePaymentStatus || '';
      booking.updatedAt = nowIso();
      writeJson(DINNER_FILE, bookings);
      console.error(`Payment completed but ticket limit needs review for booking ${booking.id}.`);
      return;
    }

    const ticketNumbers = assignTicketNumbers(otherBookings, Number(booking.ticketQuantity || 0));

    booking.status = 'paid';
    booking.paymentStatus = 'Paid';
    booking.paidAt = nowIso();
    booking.updatedAt = nowIso();
    booking.squarePaymentId = payment.id || booking.squarePaymentId || '';
    booking.squarePaymentStatus = payment.status || booking.squarePaymentStatus || 'COMPLETED';
    booking.ticketNumbers = ticketNumbers;
    booking.checkInStatus = booking.checkInStatus || 'Not Checked In';

    writeJson(DINNER_FILE, bookings);
  });
}

async function handleSquareWebhookEvent(event) {
  const events = readJson(WEBHOOK_FILE, []);
  events.push({
    receivedAt: nowIso(),
    eventId: event.event_id || '',
    type: event.type || '',
    merchantId: event.merchant_id || '',
    dataId: event.data?.id || ''
  });
  writeJson(WEBHOOK_FILE, events.slice(-500));

  if (event.type === 'payment.created' || event.type === 'payment.updated') {
    const payment = event.data?.object?.payment;

    if (payment?.status === 'COMPLETED') {
      await markDinnerBookingPaidByOrder(payment.order_id, payment);
    }
  }

  if (event.type === 'order.updated') {
    const order = event.data?.object?.order;

    if (order?.state === 'COMPLETED') {
      await markDinnerBookingPaidByOrder(order.id, { status: 'COMPLETED' });
    }
  }
}

function requireAdmin(req) {
  const providedKey = req.query.key || req.headers['x-admin-key'];
  if (!CONFIG.adminExportKey || CONFIG.adminExportKey === 'change-this-to-a-long-private-key') {
    throw new UserError('ADMIN_EXPORT_KEY is not configured on the server.', 500);
  }
  if (providedKey !== CONFIG.adminExportKey) {
    throw new UserError('Unauthorized.', 401);
  }
}

function csvEscape(value) {
  const text = value === undefined || value === null ? '' : String(value);
  if (/[",\n\r]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function makeCsv(rows, columns) {
  const header = columns.map((column) => csvEscape(column.header)).join(',');
  const body = rows.map((row) => columns.map((column) => csvEscape(column.value(row))).join(',')).join('\n');
  return `${header}\n${body}\n`;
}

function errorResponse(res, error) {
  if (error instanceof UserError) {
    return res.status(error.status).json({ ok: false, message: error.message });
  }

  console.error(error);
  return res.status(500).json({ ok: false, message: 'Something went wrong. Please try again.' });
}

app.post('/api/square/webhook', express.raw({ type: '*/*' }), async (req, res) => {
  try {
    const rawBody = req.body.toString('utf8');
    const signature = req.header('x-square-hmacsha256-signature');

    if (!verifySquareWebhookSignature(rawBody, signature)) {
      return res.status(403).send('Invalid Square signature');
    }

    const event = JSON.parse(rawBody);
    await handleSquareWebhookEvent(event);

    return res.status(200).send('OK');
  } catch (error) {
    console.error('Square webhook error:', error);
    return res.status(500).send('Webhook error');
  }
});

app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (_req, res) => {
  res.json({ ok: true, time: nowIso() });
});

app.post('/api/lunch-reservation', async (req, res) => {
  try {
    const fullName = validateRequiredText(req.body.fullName, 'Full name');
    const email = validateEmail(req.body.email);
    const phone = validateRequiredText(req.body.phone, 'Phone number', 80);
    const guests11Plus = parseInteger(req.body.guests11Plus, 'Guests 11 years old and above', 0, 200);
    const children5To10 = parseInteger(req.body.children5To10, 'Children 5 to 10 years old', 0, 200);
    const children4Below = parseInteger(req.body.children4Below, 'Children 4 years old and below', 0, 200);
    const specialRequests = cleanLongText(req.body.specialRequests, 1000);

    const totalGuests = guests11Plus + children5To10 + children4Below;
    if (totalGuests < 1) {
      throw new UserError('Please enter at least one guest.');
    }

    const estimatedTotalCents =
      guests11Plus * EVENT_CONFIG.lunch.guests11PlusPriceCents +
      children5To10 * EVENT_CONFIG.lunch.children5To10PriceCents;

    const booking = {
      id: makeBookingId('LUNCH'),
      event: EVENT_CONFIG.lunch.title,
      eventDate: EVENT_CONFIG.lunch.date,
      eventTime: EVENT_CONFIG.lunch.time,
      createdAt: nowIso(),
      updatedAt: nowIso(),
      fullName,
      email,
      phone,
      guests11Plus,
      children5To10,
      children4Below,
      totalGuests,
      estimatedTotalCents,
      estimatedTotalDisplay: money(estimatedTotalCents),
      paymentStatus: 'Pay at Restaurant',
      bookingStatus: 'New',
      specialRequests
    };

    await withDataLock(() => {
      const bookings = readJson(LUNCH_FILE, []);
      bookings.push(booking);
      writeJson(LUNCH_FILE, bookings);
    });

    return res.json({ ok: true, booking });
  } catch (error) {
    return errorResponse(res, error);
  }
});

app.get('/api/dinner/availability', async (_req, res) => {
  try {
    await releaseExpiredPendingBookings();

    const bookings = await withDataLock(() => readJson(DINNER_FILE, []));
    const heldOrPaid = activeOrPaidDinnerTickets(bookings);
    const paid = paidDinnerTickets(bookings);

    return res.json({
      ok: true,
      maxTickets: EVENT_CONFIG.dinner.maxTickets,
      paidTickets: paid,
      heldOrPaidTickets: heldOrPaid,
      remainingTickets: remainingDinnerTickets(bookings),
      ticketPriceCents: EVENT_CONFIG.dinner.ticketPriceCents,
      ticketPriceDisplay: money(EVENT_CONFIG.dinner.ticketPriceCents),
      holdMinutes: CONFIG.dinnerHoldMinutes,
      maxTicketsPerOrder: CONFIG.maxTicketsPerOrder
    });
  } catch (error) {
    return errorResponse(res, error);
  }
});

app.post('/api/dinner/create-checkout', async (req, res) => {
  let pendingBooking;

  try {
    await releaseExpiredPendingBookings();

    const fullName = validateRequiredText(req.body.fullName, 'Full name');
    const email = validateEmail(req.body.email);
    const phone = validateRequiredText(req.body.phone, 'Phone number', 80);
    const ticketQuantity = parseInteger(req.body.ticketQuantity, 'Number of tickets', 1, CONFIG.maxTicketsPerOrder);
    const specialRequests = cleanLongText(req.body.specialRequests, 1000);

    pendingBooking = await withDataLock(() => {
      const bookings = readJson(DINNER_FILE, []);
      const remaining = remainingDinnerTickets(bookings);

      if (ticketQuantity > remaining) {
        throw new UserError(`Sorry, only ${remaining} dinner ticket${remaining === 1 ? '' : 's'} available right now.`);
      }

      const amountCents = ticketQuantity * EVENT_CONFIG.dinner.ticketPriceCents;
      const createdAt = new Date();
      const expiresAt = addMinutes(createdAt, CONFIG.dinnerHoldMinutes);

      const booking = {
        id: makeBookingId('DINNER'),
        event: EVENT_CONFIG.dinner.title,
        eventDate: EVENT_CONFIG.dinner.date,
        eventTime: EVENT_CONFIG.dinner.time,
        createdAt: createdAt.toISOString(),
        updatedAt: createdAt.toISOString(),
        expiresAt: expiresAt.toISOString(),
        fullName,
        email,
        phone,
        ticketQuantity,
        amountCents,
        amountDisplay: money(amountCents),
        paymentStatus: 'Pending Payment',
        status: 'pending_payment',
        squareIdempotencyKey: crypto.randomUUID(),
        squarePaymentLinkId: '',
        squareOrderId: '',
        squareCheckoutUrl: '',
        squarePaymentId: '',
        squarePaymentStatus: '',
        ticketNumbers: [],
        checkInStatus: 'Not Checked In',
        specialRequests
      };

      bookings.push(booking);
      writeJson(DINNER_FILE, bookings);
      return booking;
    });

    const paymentLink = await createSquarePaymentLink(pendingBooking);

    const updatedBooking = await withDataLock(() => {
      const bookings = readJson(DINNER_FILE, []);
      const index = bookings.findIndex((booking) => booking.id === pendingBooking.id);

      if (index < 0) {
        throw new Error('Pending booking was not found after Square checkout creation.');
      }

      bookings[index].squarePaymentLinkId = paymentLink.id;
      bookings[index].squareOrderId = paymentLink.order_id;
      bookings[index].squareCheckoutUrl = paymentLink.url;
      bookings[index].updatedAt = nowIso();
      writeJson(DINNER_FILE, bookings);

      return bookings[index];
    });

    return res.json({
      ok: true,
      bookingId: updatedBooking.id,
      checkoutUrl: updatedBooking.squareCheckoutUrl,
      expiresAt: updatedBooking.expiresAt,
      amountDisplay: updatedBooking.amountDisplay
    });
  } catch (error) {
    if (pendingBooking?.id) {
      await withDataLock(() => {
        const bookings = readJson(DINNER_FILE, []);
        const index = bookings.findIndex((booking) => booking.id === pendingBooking.id);
        if (index >= 0 && bookings[index].status === 'pending_payment') {
          bookings[index].status = 'payment_link_failed';
          bookings[index].paymentStatus = 'Payment Link Failed';
          bookings[index].updatedAt = nowIso();
          bookings[index].errorMessage = error.message;
          writeJson(DINNER_FILE, bookings);
        }
      });
    }

    return errorResponse(res, error);
  }
});

app.get('/api/dinner/booking/:id', async (req, res) => {
  try {
    const bookingId = cleanText(req.params.id, 80);
    const booking = await withDataLock(() => {
      const bookings = readJson(DINNER_FILE, []);
      return bookings.find((item) => item.id === bookingId);
    });

    if (!booking) {
      throw new UserError('Dinner booking was not found.', 404);
    }

    const publicBooking = {
      id: booking.id,
      event: booking.event,
      eventDate: booking.eventDate,
      eventTime: booking.eventTime,
      fullName: booking.fullName,
      email: booking.email,
      phone: booking.phone,
      ticketQuantity: booking.ticketQuantity,
      amountDisplay: booking.amountDisplay,
      paymentStatus: booking.paymentStatus,
      status: booking.status,
      ticketNumbers: booking.ticketNumbers || [],
      createdAt: booking.createdAt,
      paidAt: booking.paidAt || ''
    };

    return res.json({ ok: true, booking: publicBooking });
  } catch (error) {
    return errorResponse(res, error);
  }
});

app.get('/api/admin/summary', async (req, res) => {
  try {
    requireAdmin(req);
    await releaseExpiredPendingBookings();

    const [lunchBookings, dinnerBookings] = await withDataLock(() => [
      readJson(LUNCH_FILE, []),
      readJson(DINNER_FILE, [])
    ]);

    const lunchGuests = lunchBookings.reduce((sum, booking) => sum + Number(booking.totalGuests || 0), 0);
    const lunchEstimatedCents = lunchBookings.reduce((sum, booking) => sum + Number(booking.estimatedTotalCents || 0), 0);

    const dinnerPaidTickets = paidDinnerTickets(dinnerBookings);
    const dinnerHeldOrPaidTickets = activeOrPaidDinnerTickets(dinnerBookings);
    const dinnerPaidCents = dinnerBookings
      .filter((booking) => booking.status === 'paid' || booking.status === 'checked_in')
      .reduce((sum, booking) => sum + Number(booking.amountCents || 0), 0);

    return res.json({
      ok: true,
      lunch: {
        bookings: lunchBookings.length,
        totalGuests: lunchGuests,
        estimatedTotalDisplay: money(lunchEstimatedCents)
      },
      dinner: {
        maxTickets: EVENT_CONFIG.dinner.maxTickets,
        paidTickets: dinnerPaidTickets,
        heldOrPaidTickets: dinnerHeldOrPaidTickets,
        remainingTickets: Math.max(0, EVENT_CONFIG.dinner.maxTickets - dinnerHeldOrPaidTickets),
        paidAmountDisplay: money(dinnerPaidCents),
        bookings: dinnerBookings.length
      }
    });
  } catch (error) {
    return errorResponse(res, error);
  }
});

app.get('/api/admin/lunch.csv', async (req, res) => {
  try {
    requireAdmin(req);
    const bookings = await withDataLock(() => readJson(LUNCH_FILE, []));

    const csv = makeCsv(bookings, [
      { header: 'Booking ID', value: (row) => row.id },
      { header: 'Date Submitted', value: (row) => row.createdAt },
      { header: 'Full Name', value: (row) => row.fullName },
      { header: 'Email', value: (row) => row.email },
      { header: 'Phone', value: (row) => row.phone },
      { header: 'Guests 11+', value: (row) => row.guests11Plus },
      { header: 'Children 5-10', value: (row) => row.children5To10 },
      { header: 'Children 4 and Below', value: (row) => row.children4Below },
      { header: 'Total Guests', value: (row) => row.totalGuests },
      { header: 'Estimated Total', value: (row) => row.estimatedTotalDisplay },
      { header: 'Payment Status', value: (row) => row.paymentStatus },
      { header: 'Booking Status', value: (row) => row.bookingStatus },
      { header: 'Special Requests', value: (row) => row.specialRequests }
    ]);

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename="soulfood-lunch-bookings.csv"');
    return res.send(csv);
  } catch (error) {
    return errorResponse(res, error);
  }
});

app.get('/api/admin/dinner.csv', async (req, res) => {
  try {
    requireAdmin(req);
    const bookings = await withDataLock(() => readJson(DINNER_FILE, []));

    const csv = makeCsv(bookings, [
      { header: 'Booking ID', value: (row) => row.id },
      { header: 'Date Submitted', value: (row) => row.createdAt },
      { header: 'Full Name', value: (row) => row.fullName },
      { header: 'Email', value: (row) => row.email },
      { header: 'Phone', value: (row) => row.phone },
      { header: 'Ticket Quantity', value: (row) => row.ticketQuantity },
      { header: 'Amount', value: (row) => row.amountDisplay },
      { header: 'Status', value: (row) => row.status },
      { header: 'Payment Status', value: (row) => row.paymentStatus },
      { header: 'Square Order ID', value: (row) => row.squareOrderId },
      { header: 'Square Payment ID', value: (row) => row.squarePaymentId },
      { header: 'Ticket Numbers', value: (row) => (row.ticketNumbers || []).join(' | ') },
      { header: 'Check-In Status', value: (row) => row.checkInStatus },
      { header: 'Paid At', value: (row) => row.paidAt || '' },
      { header: 'Expires At', value: (row) => row.expiresAt || '' },
      { header: 'Special Requests', value: (row) => row.specialRequests }
    ]);

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename="soulfood-dinner-tickets.csv"');
    return res.send(csv);
  } catch (error) {
    return errorResponse(res, error);
  }
});

app.post('/api/admin/check-in', async (req, res) => {
  try {
    requireAdmin(req);
    const ticketNumber = validateRequiredText(req.body.ticketNumber, 'Ticket number', 20).toUpperCase();

    const result = await withDataLock(() => {
      const bookings = readJson(DINNER_FILE, []);
      const booking = bookings.find((item) => Array.isArray(item.ticketNumbers) && item.ticketNumbers.includes(ticketNumber));

      if (!booking) {
        throw new UserError('Ticket number was not found.', 404);
      }

      if (booking.status !== 'paid' && booking.status !== 'checked_in') {
        throw new UserError('This ticket is not marked as paid.', 400);
      }

      if (!Array.isArray(booking.checkedInTickets)) {
        booking.checkedInTickets = [];
      }

      if (!booking.checkedInTickets.includes(ticketNumber)) {
        booking.checkedInTickets.push(ticketNumber);
      }

      booking.checkInStatus = booking.checkedInTickets.length >= booking.ticketNumbers.length
        ? 'Checked In'
        : 'Partially Checked In';
      booking.status = booking.checkInStatus === 'Checked In' ? 'checked_in' : booking.status;
      booking.updatedAt = nowIso();

      writeJson(DINNER_FILE, bookings);
      return booking;
    });

    return res.json({ ok: true, booking: result });
  } catch (error) {
    return errorResponse(res, error);
  }
});

app.use((_req, res) => {
  res.status(404).json({ ok: false, message: 'Not found.' });
});

setInterval(() => {
  releaseExpiredPendingBookings().catch((error) => {
    console.error('Expired pending booking cleanup failed:', error);
  });
}, 60 * 1000);

app.listen(PORT, () => {
  console.log(`SoulFood event booking server running on ${CONFIG.publicBaseUrl}`);
  console.log(`Local pages: ${CONFIG.publicBaseUrl}/book-lunch.html and ${CONFIG.publicBaseUrl}/book-dinner.html`);
});
