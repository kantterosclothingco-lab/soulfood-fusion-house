import { supabase } from "../../lib/supabase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const payload = {
      request_id: req.body.requestId || "",
      room_id: req.body.roomId || "",
      role: req.body.role || "",
      event: req.body.event || "started",
      time: req.body.time || new Date().toISOString(),
      full_name: req.body.fullName || "",
      phone: req.body.phone || "",
      email: req.body.email || "",
      event_type: req.body.eventType || "",
      event_date: req.body.eventDate || "",
      notes: req.body.notes || "",
    };

    const { data, error } = await supabase
      .from("call_records")
      .insert([payload])
      .select();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, record: data[0] });
  }

  if (req.method === "PATCH") {
    const payload = {
      request_id: req.body.requestId || "",
      room_id: req.body.roomId || "",
      role: req.body.role || "",
      event: req.body.event || "ended",
      time: req.body.time || new Date().toISOString(),
      full_name: req.body.fullName || "",
      phone: req.body.phone || "",
      email: req.body.email || "",
      event_type: req.body.eventType || "",
      event_date: req.body.eventDate || "",
      notes: req.body.notes || "",
    };

    const { data, error } = await supabase
      .from("call_records")
      .insert([payload])
      .select();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, record: data[0] });
  }

  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("call_records")
      .select("*")
      .order("time", { ascending: false });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ records: data || [] });
  }

  return res.status(405).json({ error: "Method not allowed" });
}