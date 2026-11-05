// app/components/NavBar.tsx
// Shared nav bar. Rendered once in app/layout.tsx so it appears on every page.
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <Link href="/" className="brand">
          <span aria-hidden="true">🍽️</span> NextBites
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/">Recipes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
