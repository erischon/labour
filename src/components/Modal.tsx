"use client";

import { useRef, useEffect } from "react";

import { AiOutlineClose } from "react-icons/ai";

import FormAddTodo from "@/components/FormAddTodo";
import FormEditTodo from "@/components/FormEditTodo";

type Props = {
  title: string;
  onClose: () => void;
  modalContent: JSX.Element;
};

/**
 * @description Modal component
 * @version 1.0.0
 * @param title  The title of the modal
 * @param onClose  The function to close the modal
 * @param onSubmit  The function to submit the modal
 * @param children  The children of the modal
 */
export default function Modal({ title, onClose, modalContent }: Props) {
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);

  const showModal = searchParams.get("showModal");

  useEffect(() => {
    if (showModal === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showModal]);

  const closeDialog = () => {
    dialogRef.current?.close();
    onClose();
  };

  const dialog: JSX.Element | null =
    showModal === "y" ? (
      <dialog
        ref={dialogRef}
        className="fixed rounded-xl backdrop:bg-slate-800/90"
      >
        <div className="w-full max-w-full bg-slate-300 flex flex-col">
          <div className="flex flex-row justify-between py-5 px-10 bg-slate-400">
            <h1 className="text-2xl font-semibold">{title}</h1>

            <button
              onClick={closeDialog}
              className="py-1 px-2 cursor-pointer rounded-full border-none w-8 h-8 font-bold bg-slate-600 hover:bg-slate-600/70 text-white"
            >
              <AiOutlineClose />
            </button>
          </div>

          <div className="px-10 py-10">{modalContent}</div>
        </div>
      </dialog>
    ) : null;

  return dialog;
}
