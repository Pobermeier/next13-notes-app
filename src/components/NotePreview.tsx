"use client";
import { useRouter } from "next/navigation";
import { DeleteNoteResponse } from "pages/api/deleteNote";
import TextWithMarkdown from "./TextWithMarkdown";

type NotePreviewProps = {
  body: string;
  id: string;
};

const deleteNote = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/deleteNote?id=${id}`);

  const data = (await res.json()) as DeleteNoteResponse;

  if (!data.success) {
    throw new Error(data.data as string);
  }

  return data;
};

const NotePreview = ({ body, id }: NotePreviewProps) => {
  const router = useRouter();

  return (
    <div className="note-preview">
      <TextWithMarkdown text={body} />
      <br />
      <button
        onClick={async () => {
          await deleteNote(id);
          router.push("/");
          router.refresh();
        }}
      >
        Delete Note
      </button>
    </div>
  );
};

export default NotePreview;
