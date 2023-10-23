/**
 * Renders the footer component.
 * @returns JSX element containing the footer.
 */
export default function Footer() {
  return (
    <footer className="px-10 py-5 w-full max-w-5xl mx-auto text-xs text-center">
      <p>
        © 2023-{new Date().getFullYear()}{" "}
        <a
          href="https://www.erischon.dev"
          target="_blank"
          className="text-bold text-slate-300 hover:text-slate-50"
        >
          {" "}
          Eri Schön
        </a>{" "}
        All rights reserved
      </p>
    </footer>
  );
}
