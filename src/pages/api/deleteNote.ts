import type { NextApiRequest, NextApiResponse } from "next";
import notes from "../../data/notes";

type Data = {
  success: boolean;
  data: boolean | string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const id = req.query["id"];

  if (!id) {
    return res.status(400).json({ success: false, data: "id is missing" });
  }

  const foundNoteIndex = notes.findIndex((note) => note.id === id);

  if (foundNoteIndex === -1) {
    return res.status(404).json({ success: false, data: "no note with this id found" });
  }

  notes.splice(foundNoteIndex, 1);

  return res.status(200).json({ success: true, data: true });
}
