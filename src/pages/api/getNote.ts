import type { NextApiRequest, NextApiResponse } from "next";
import notes, { Note } from "data/notes";

export type GetNoteResponse = {
  success: boolean;
  data: Note | string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<GetNoteResponse>) {
  const id = req.query["id"];

  if (!id) {
    return res.status(400).json({ success: false, data: "id is missing" });
  }

  const foundNote = notes.find((note) => note.id === id);

  if (!foundNote) {
    return res.status(404).json({ success: false, data: "no note with this id found" });
  }

  return res.status(200).json({ success: true, data: foundNote });
}
