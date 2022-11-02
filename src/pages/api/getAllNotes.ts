import type { NextApiRequest, NextApiResponse } from "next";
import notes, { Note } from "../../data/notes";

type Data = {
  success: boolean;
  data: Note[];
};

export default function handler(_: NextApiRequest, res: NextApiResponse<Data>) {
  return res.status(200).json({ success: true, data: notes });
}
