"use client";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import TextWithMarkdown from "./TextWithMarkdown";

type NotePreviewProps = {
  body: string;
  id: string;
};

const deleteNote = async (id: string, router: AppRouterInstance) => {
  const res = await fetch(`https://next13-notes-app-api-production.up.railway.app/notes/${id}`, {
    method: "delete",
  });

  if (res.ok) {
    router.push("/");
    router.refresh();
  }
};

const NotePreview = ({ body, id }: NotePreviewProps) => {
  const router = useRouter();

  return (
    <div className="note-preview">
      <TextWithMarkdown text={body} />
      <br />
      <button onClick={() => deleteNote(id, router)}>Delete Note</button>
    </div>
  );
};

export default NotePreview;
