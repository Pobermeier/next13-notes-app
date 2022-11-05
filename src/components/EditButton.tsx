import Link from "next/link";

type EditButtonProps = {
  children?: React.ReactNode;
  noteId?: string;
};

const EditButton = ({ children, noteId }: EditButtonProps) => {
  return (
    <Link
      className={["edit-button", noteId ? "edit-button--solid" : "edit-button--outline"].join(" ")}
      href={noteId ? `/note/edit/${noteId}` : "/note/create"}
    >
      {children}
    </Link>
  );
};

export default EditButton;
