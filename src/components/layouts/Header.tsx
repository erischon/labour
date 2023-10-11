import { useState } from "react";
import { Link } from "react-router-dom";

import { HiPencilSquare } from "react-icons/hi2";
import Modal from "../Modal";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        Modal
      </Modal>

      <header className="flex justify-between items-center px-10 py-5">
        <Link to="/" className="flex items-center gap-1">
          <span className="text-2xl">
            <HiPencilSquare />
          </span>

          <h2 className="text-2xl font-bold font-heading tracking-wider">
            Labour
          </h2>
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <button
          className="py-2 px-9 bg-slate-500"
          onClick={() => setOpen(true)}
        >
          bouton
        </button>
      </header>
    </>
  );
}
