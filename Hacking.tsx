import { useLocation } from "wouter";
import { Link } from "wouter";

/**
 * Navigation Component
 * Design: Modern Minimalist with Warm Accents
 * - Fixed top navigation bar with portfolio name/logo on left
 * - Tab links on right with active state highlighting
 * - Smooth transitions on hover with Tangerine Dream accent color
 */

export default function Navigation() {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Research", path: "/research" },
    { label: "Hacking", path: "/hacking" },
    { label: "Press", path: "/press" },
    { label: "Side-Quests", path: "/side-quests" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-soft z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Portfolio Name/Logo */}
        <Link href="/">
          <a className="font-display text-2xl font-bold text-blue-state smooth-transition hover:text-accent-warm">
            Portfolio
          </a>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <a
                className={`font-nav text-sm font-semibold smooth-transition ${
                  isActive(link.path)
                    ? "text-accent-warm border-b-2 border-accent-warm pb-1"
                    : "text-blue-state hover:text-accent-warm"
                }`}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
