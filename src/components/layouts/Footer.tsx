/**
 * Renders the footer component.
 * @returns JSX element containing the footer.
 */
export default function Footer() {
  return (
    <footer className="px-10 py-5 w-full max-w-5xl mx-auto text-xs">
      <p>© 2023-{new Date().getFullYear()} Eri Schön All rights reserved</p>
    </footer>
  );
}
