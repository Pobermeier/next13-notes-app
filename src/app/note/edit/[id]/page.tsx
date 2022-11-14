import { Note } from "models/note";
import NoteEditor from "components/NoteEditor";

const fetchSingleNote = async (id: string) => {
  const res = await fetch(`https://next13-notes-app-api-production.up.railway.app/notes/${id}`, {
    cache: "no-store",
  });

  const note = (await res.json()) as Note;

  return note;
};

const EditNotePage = async ({ params: { id } }: any) => {
  const { id: noteId, title, body, createdAt } = await fetchSingleNote(id);

  return (
    <NoteEditor noteId={noteId} initialBody={body} initialTitle={title} createdAt={createdAt} />
  );
};

export default EditNotePage;
