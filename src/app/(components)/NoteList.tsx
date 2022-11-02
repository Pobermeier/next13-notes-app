import { Suspense } from "react";
import { GetAllNotesResponse } from "pages/api/getAllNotes";
import NoteListSkeleton from "app/(components)/NoteListSkeleton";
import SidebarNote from "./SidebarNote";

type NoteListProps = {
  searchText?: string;
};

const fetchAllNotes = async () => {
  const res = await fetch("http://localhost:3000/api/getAllNotes");

  const data = res.json() as Promise<GetAllNotesResponse>;

  return data;
};

const NoteList = async ({ searchText }: NoteListProps) => {
  const { data: notes } = await fetchAllNotes();

  return (
    <Suspense fallback={<NoteListSkeleton />}>
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
    </Suspense>
  );
};

export default NoteList;
