import { AiOutlineClose } from "react-icons/ai";

/**
 * @description Modal component
 * @version 1.0.0
 */
export default function Modal() {
  return (
    <dialog open className="fixed rounded-xl backdrop:bg-slate-800/90">
      <div className="w-full max-w-full bg-slate-300 flex flex-col">
        <div className="flex flex-row justify-between py-5 px-10 bg-slate-400">
          <h1 className="text-2xl font-semibold">title</h1>

          <button className="py-1 px-2 cursor-pointer rounded-full border-none w-8 h-8 font-bold bg-slate-600 hover:bg-slate-600/70 text-white">
            <AiOutlineClose />
          </button>
        </div>

        <div className="px-10 py-10">modalContent</div>
      </div>
    </dialog>
  );
}
