import { format, isToday } from "date-fns";
import { Note } from "data/notes";

type SidebarNoteProps = {
  note: Note;
};

const SidebarNote = ({ note }: SidebarNoteProps) => {
  const updatedAt = new Date(note.updatedAt);
  const lastUpdatedAt = isToday(updatedAt)
    ? format(updatedAt, "h:mm bb")
    : format(updatedAt, "M/d/yy");

  return (
    <div className="sidebar-note-list-item">
      <header className="sidebar-note-header">
        <strong>{note.title}</strong>
        <small>{lastUpdatedAt}</small>
      </header>
    </div>
  );
};

export default SidebarNote;
