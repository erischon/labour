import { HiPencilSquare } from "react-icons/hi2";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-5">
      <div className="flex items-center gap-1">
        <span className="text-2xl">
          <HiPencilSquare />
        </span>

        <h2 className="text-2xl font-bold font-heading">Labour</h2>
      </div>

      <nav>
        <ul>
          <li>Home</li>
        </ul>
      </nav>

      <button className="py-2 px-9 bg-slate-500">bouton</button>
    </header>
  );
}
