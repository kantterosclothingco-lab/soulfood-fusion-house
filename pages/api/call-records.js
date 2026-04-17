let callRecords = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const record = {
      id: Date.now().toString(),
      requestId: req.body.requestId || "",
      roomId: req.body.roomId || "",
      role: req.body.role || "",
      event: req.body.event || "started",
      time: req.body.time || new Date().toISOString(),
    };

    callRecords.unshift(record);

    return res.status(200).json({ success: true, record });
  }

  if (req.method === "PATCH") {
    const record = {
      id: Date.now().toString(),
      requestId: req.body.requestId || "",
      roomId: req.body.roomId || "",
      role: req.body.role || "",
      event: req.body.event || "ended",
      time: req.body.time || new Date().toISOString(),
    };

    callRecords.unshift(record);

    return res.status(200).json({ success: true, record });
  }

  if (req.method === "GET") {
    return res.status(200).json({ records: callRecords });
  }

  return res.status(405).json({ error: "Method not allowed" });
}