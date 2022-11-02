import type { NextApiRequest, NextApiResponse } from "next";
import notes, { Note } from "data/notes";

export type GetAllNotesResponse = {
  success: boolean;
  data: Note[];
};

export default function handler(_: NextApiRequest, res: NextApiResponse<GetAllNotesResponse>) {
  return res.status(200).json({ success: true, data: notes });
}
