import { format } from "date-fns";
import { Note } from "data/notes";
import { GetNoteResponse } from "pages/api/getNote";
import NotePreview from "app/(components)/NotePreview";

type NotePageProps = {
  params: { id: string };
};

const fetchSingleNote = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/getNote?id=${id}`);

  const data = (await res.json()) as GetNoteResponse;

  if (!data.success) {
    throw new Error(data.data as string);
  }

  return data;
};

const NotePage = async ({ params: { id } }: NotePageProps) => {
  const { data: note } = await fetchSingleNote(id);

  const { id: noteId, title, body, updatedAt } = note as Note;
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
