import { Link } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";

export default function MobileMenu() {
  return (
    <nav className="md:hidden fixed bottom-[60px] left-0 bg-slate-900 w-full">
      <ul className="flex justify-center items-center gap-10 p-3">
        <li>
          <Link to="/" className="" aria-label="Home button">
            <FaHome className="text-2xl" />
          </Link>
        </li>

        <li>
          <Link to="/tasks/add" className="" aria-label="Add task button">
            <MdAddTask className="text-2xl" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
