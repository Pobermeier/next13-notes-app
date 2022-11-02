import type { NextApiRequest, NextApiResponse } from "next";
import notes, { Note } from "../../data/notes";

type Data = {
  success: boolean;
  data: Note | string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const id = req.body["id"];
  const updatedTitle = req.body["title"] ?? "";
  const updatedBody = req.body["body"] ?? "";

  if (!id) {
    return res.status(400).json({ success: false, data: "id is missing" });
  }

  const foundNote = notes.find((note) => note.id === id);

  if (!foundNote) {
    return res
      .status(404)
      .json({ success: false, data: "no note with this id found" });
  }

  foundNote.title = updatedTitle ?? foundNote.title;
  foundNote.body = updatedBody ?? foundNote.body;
  foundNote.updatedAt = new Date().getTime();

  return res.status(200).json({ success: true, data: foundNote });
}
