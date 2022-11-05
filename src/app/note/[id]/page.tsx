import { format } from "date-fns";
import { Note } from "models/note";
import NotePreview from "components/NotePreview";

const fetchSingleNote = async (id: string) => {
  const res = await fetch(`https://next13-notes-app-api-production.up.railway.app/notes/${id}`, {
    cache: "no-cache",
  });

  const note = (await res.json()) as Note;

  return note;
};

const NotePage = async ({ params: { id } }: any) => {
  const { id: noteId, title, body, updatedAt } = await fetchSingleNote(id);

  const updatedAtDate = new Date(updatedAt);

  return (
    <div className="note-viewer">
      <div className="note">
        <div className="note-header">
          <h1 className="note-title">{title}</h1>
          <div className="note-menu" role="menubar">
            <small className="note-updated-at" role="status">
              Last updated on {format(updatedAtDate, "M/d/yy 'at' h:mm bb")}
            </small>
            {/* <EditButton noteId={id}>Edit</EditButton> */}
          </div>
        </div>
        <NotePreview body={body} id={noteId} />
      </div>
    </div>
  );
};

export default NotePage;
