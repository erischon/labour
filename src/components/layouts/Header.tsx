import { Link } from "react-router-dom";

import { HiPencilSquare } from "react-icons/hi2";
import { MdAddTask } from "react-icons/md";

import MobileMenu from "../MobileMenu";

/**
 * Renders the header component with a logo, navigation links and an "Add Task" button.
 * @returns JSX.Element
 */
export default function Header(): JSX.Element {
  return (
    <>
      <header className="flex justify-between items-center w-full px-10 py-5 max-w-5xl mx-auto">
        <Link to="/" className="flex items-center gap-1 mx-auto md:mx-0">
          <span className="text-2xl">
            <HiPencilSquare />
          </span>

          <h2 className="text-2xl font-bold font-heading tracking-wider">
            Labour
          </h2>
        </Link>

        <nav className="">
          <ul className="hidden md:block">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <MobileMenu />

        <Link to="/tasks/add" className="hidden md:block">
          <button className="py-2 px-6 bg-slate-500 flex items-center gap-2">
            <div className="text-xl text-slate-100">
              <MdAddTask />
            </div>
            Add Task
          </button>
        </Link>
      </header>
    </>
  );
}
