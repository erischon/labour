import { Link } from "react-router-dom";

import { HiPencilSquare } from "react-icons/hi2";
import { MdAddTask } from "react-icons/md";

/**
 * Renders the header component with a logo, navigation links and an "Add Task" button.
 * @returns JSX.Element
 */
export default function Header(): JSX.Element {
  return (
    <>
      <header className="flex justify-between items-center w-full px-10 py-5 max-w-5xl mx-auto">
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

        <Link to="/tasks/add">
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
