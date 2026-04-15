let consultationRequests = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, phone, email, eventType, eventDate, notes } = req.body;

    if (!fullName || !phone || !email || !eventType || !eventDate) {
      return res.status(400).json({
        error: "Missing required consultation details",
      });
    }

    const roomId = `room-${Date.now()}`;

    const newRequest = {
      id: Date.now().toString(),
      fullName,
      phone,
      email,
      eventType,
      eventDate,
      notes: notes || "",
      status: "waiting",
      roomId,
      roomUrl: `/call-room?roomId=${roomId}`,
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

  if (req.method === "PATCH") {
    const { id, status } = req.body;

    if (!id || !status) {
      return res.status(400).json({
        error: "Missing request id or status",
      });
    }

    consultationRequests = consultationRequests.map((request) =>
      request.id === id ? { ...request, status } : request
    );

    const updated = consultationRequests.find((request) => request.id === id);

    return res.status(200).json({
      success: true,
      request: updated,
    });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
