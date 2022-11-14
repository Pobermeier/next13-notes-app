"use client";
import { TransitionStartFunction, useTransition } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

type DeleteButtonProps = { id: string };

const deleteNote = async (
  id: string,
  router: AppRouterInstance,
  startTransition: TransitionStartFunction,
) => {
  const res = await fetch(`https://next13-notes-app-api-production.up.railway.app/notes/${id}`, {
    method: "delete",
  });

  if (res.ok) {
    startTransition(() => {
      router.replace("/");
      router.refresh();
    });
  }
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <button
      className="delete-button delete-button--solid"
      onClick={() => deleteNote(id, router, startTransition)}
      disabled={isPending}
    >
      {isPending ? "Deleting note..." : "Delete Note"}
    </button>
  );
};

export default DeleteButton;
