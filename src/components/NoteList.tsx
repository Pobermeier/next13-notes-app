import { GetAllNotesResponse } from "pages/api/getAllNotes";
import SidebarNote from "./SidebarNote";

type NoteListProps = {
  searchText?: string;
};

const fetchAllNotes = async () => {
  const res = await fetch("http://localhost:3000/api/getAllNotes");

  const data = (await res.json()) as GetAllNotesResponse;

  return data;
};

const NoteList = async ({ searchText }: NoteListProps) => {
  const { data: notes } = await fetchAllNotes();

  return (
    <>
      {notes.length > 0 ? (
        <ul className="notes-list">
          {notes.map((note) => (
            <li key={note.id}>
              <SidebarNote note={note} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="notes-empty">
          {searchText ? `Couldn't find any notes titled "${searchText}".` : "No notes created yet!"}{" "}
        </div>
      )}
    </>
  );
};

export default NoteList;
