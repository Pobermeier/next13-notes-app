import { Note } from "models/note";
import SidebarNote from "./SidebarNote";

type NoteListProps = {
  searchText?: string;
};

const fetchAllNotes = async () => {
  const res = await fetch(
    "https://next13-notes-app-api-production.up.railway.app/notes?_sort=updatedAt&_order=desc",
    {
      cache: "no-store",
    },
  );

  const notes = (await res.json()) as Note[];

  return notes;
};

const NoteList = async ({ searchText }: NoteListProps) => {
  const notes = await fetchAllNotes();

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
