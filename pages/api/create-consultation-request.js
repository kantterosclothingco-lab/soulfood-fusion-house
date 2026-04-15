let consultationRequests = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, phone, email, eventType, eventDate, notes } = req.body;

    if (!fullName || !phone || !email || !eventType || !eventDate) {
      return res.status(400).json({
        error: "Missing required consultation details",
      });
    }

    const newRequest = {
      id: Date.now().toString(),
      fullName,
      phone,
      email,
      eventType,
      eventDate,
      notes: notes || "",
      status: "waiting",
      createdAt: new Date().toISOString(),
    };

    consultationRequests.unshift(newRequest);

    return res.status(200).json({
      success: true,
      request: newRequest,
    });
  }

  if (req.method === "GET") {
    return res.status(200).json({
      requests: consultationRequests,
    });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
