"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home",     href: "#home"     },
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Journey",  href: "#journey"  },
  { label: "Contact",  href: "/contact"  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]    = useState(false);
  const [scrolled, setScrolled]    = useState(false);
  const [activeSection, setActive] = useState("home");
  const pathname = usePathname();
  const isHome   = pathname === "/";

  /* scroll listener — only meaningful on home page */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", "about", "skills", "projects", "journey"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (e, href) => {
    if (!href.startsWith("#")) { setMenuOpen(false); return; }
    e.preventDefault();
    setMenuOpen(false);
    if (isHome) {
      // Already on home — smooth scroll to section
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    } else {
      // On another page (e.g. /contact) — navigate to home + hash
      window.location.href = "/" + href;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "nav-blur shadow-lg shadow-black/30 border-b border-white/5" : ""
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-blue-400 font-mono text-xl font-bold group-hover:text-blue-300 transition-colors">
              &lt;PDS/&gt;
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.startsWith("#") ? href.slice(1) : null;
              // Active dot only on home page for anchor links; on /contact highlight "Contact"
              const isActive = href.startsWith("/")
                ? pathname === href
                : isHome && id === activeSection;

              return (
                <li key={label}>
                  {href.startsWith("/") ? (
                    <Link
                      href={href}
                      className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all ${
                        isActive
                          ? "text-blue-400 bg-blue-500/10"
                          : "text-slate-400 hover:text-blue-400 hover:bg-blue-500/10"
                      }`}
                    >
                      {label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full" />
                      )}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      onClick={e => handleAnchor(e, href)}
                      className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all ${
                        isActive
                          ? "text-blue-400 bg-blue-500/10"
                          : "text-slate-400 hover:text-blue-400 hover:bg-blue-500/10"
                      }`}
                    >
                      {label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full" />
                      )}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Mobile Hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-white/5 transition-colors"
          >
            <span className={`block h-0.5 w-6 bg-slate-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-slate-300 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-slate-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 nav-blur border-l border-white/8 p-8 pt-24
            transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                {href.startsWith("/") ? (
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all"
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    href={href}
                    onClick={e => handleAnchor(e, href)}
                    className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all"
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
