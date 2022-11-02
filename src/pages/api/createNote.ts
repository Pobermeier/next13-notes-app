import type { NextApiRequest, NextApiResponse } from "next";
import { nanoid } from "nanoid";
import notes, { Note } from "data/notes";

type Data = {
  success: boolean;
  data: Note[] | string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const id = nanoid();

  const title = req.body["title"];
  const body = req.body["body"];

  if (!title || !body) {
    return res.status(400).json({ success: false, data: "insufficient data provided" });
  }

  const timeStampNow = new Date().getTime();

  const newNote: Note = {
    id,
    title,
    body,
    createdAt: timeStampNow,
    updatedAt: timeStampNow,
  };

  notes.push(newNote);

  return res.status(200).json({ success: true, data: notes });
}
