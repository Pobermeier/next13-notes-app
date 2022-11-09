import { Note } from "models/note";
import SidebarNote from "./SidebarNote";

export type NoteListProps = {
  searchText?: string;
};

const fetchAllNotes = async (searchQuery: string = "") => {
  const res = await fetch(
    `https://next13-notes-app-api-production.up.railway.app/notes?_sort=updatedAt&_order=desc&q=${searchQuery}`,
    {
      cache: "no-cache",
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
