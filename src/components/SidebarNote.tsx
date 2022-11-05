import { format, isToday } from "date-fns";
import { Note } from "models/note";
import Link from "next/link";

type SidebarNoteProps = {
  note: Note;
};

const SidebarNote = ({ note }: SidebarNoteProps) => {
  const updatedAt = new Date(note.updatedAt);
  const lastUpdatedAt = isToday(updatedAt)
    ? format(updatedAt, "h:mm bb")
    : format(updatedAt, "M/d/yy");

  return (
    <Link href={`/note/${note.id}`} className="sidebar-note-list-item">
      <header className="sidebar-note-header">
        <strong>{note.title}</strong>
        <small>{lastUpdatedAt}</small>
      </header>
    </Link>
  );
};

export default SidebarNote;
