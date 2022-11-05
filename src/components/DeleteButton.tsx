"use client";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

type DeleteButtonProps = { id: string };

const deleteNote = async (id: string, router: AppRouterInstance) => {
  const res = await fetch(`https://next13-notes-app-api-production.up.railway.app/notes/${id}`, {
    method: "delete",
  });

  if (res.ok) {
    router.push("/");
    router.refresh();
  }
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();

  return (
    <button className="delete-button delete-button--solid" onClick={() => deleteNote(id, router)}>
      Delete Note
    </button>
  );
};

export default DeleteButton;
