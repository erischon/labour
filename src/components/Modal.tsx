import { AiOutlineClose } from "react-icons/ai";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

/**
 * @description Modal component
 * @version 1.0.0
 */
export default function Modal({ open, onClose, children }: ModalProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 flex justify-center items-center transition-colors ${
          open ? "visible bg-slate-800/90" : "invisible"
        }`}
      >
        {/* Modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-slate-200 rounded-md p-10 transition-all ${
            open ? "scale-100 opacity-100" : "scale-125 opacity-0"
          }`}
        >
          <div className="flex flex-col p-5">
            <h2 className="text-2xl text-slate-900 font-bold mb-3">Add Task</h2>

            <div>{children}</div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1 rounded-full text-slate-900 hover:bg-slate-300 text-xl"
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </>
  );
}
