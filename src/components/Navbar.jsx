import { useState } from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/#hero", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#product", label: "products" },
    { href: "/#applications", label: "Application" },
    { href: "/#contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3" onClick={closeMenu}>
          <img src={logo} alt="Bisbee Technology Logo" className="h-9 w-auto" />
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-slate-800">
              Bisbee Technology India Pvt Ltd
            </p>
            <p className="text-[10px] text-slate-500">
              Innovating insulation with precision panels
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-5 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-sky-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 px-2 py-1 text-slate-700 bg-white"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            // Close icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100 hover:text-sky-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
