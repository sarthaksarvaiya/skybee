import { useState } from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#problems", label: "Problems & Solutions" },
    { href: "#offerings", label: "Offerings" },
    { href: "#market", label: "Market" },
    { href: "#impact", label: "Social Impact" },
    { href: "#revenue", label: "Revenue Model" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3" onClick={closeMenu}>
          {/* SVG Logo */}
          <img src={logo} alt="Bisbee Technology Logo" className="h-8 w-auto" />

          {/* Company Name */}
          <div className="flex flex-col">
            <p className="text-sm font-semibold leading-tight">
              Bisbee Technology India Pvt Ltd
            </p>
            <p className="text-[10px] text-slate-400 leading-tight">
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
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-700 px-2 py-1 text-slate-200"
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
        <div className="md:hidden bg-slate-950/95 border-t border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block rounded-md px-2 py-2 text-slate-200 hover:bg-slate-900 hover:text-emerald-300 transition-colors"
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
