import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const NAV_ITEMS = [
  { href: "#Home", label: "Home", id: "Home" },
  { href: "#About", label: "About", id: "About" },
  { href: "#Portofolio", label: "Works", id: "Portofolio" },
  { href: "#Contact", label: "Contact", id: "Contact" },
];

const getSectionFromScroll = () => {
  const sections = NAV_ITEMS
    .map((item) => ({
      id: item.id,
      element: document.getElementById(item.id),
    }))
    .filter((item) => item.element);

  if (!sections.length) return "Home";

  // Saat mencapai bagian paling bawah halaman, Contact harus tetap aktif
  // meskipun tinggi kontennya lebih pendek dari viewport.
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll > 0 && scrollTop >= maxScroll - 4) {
    return sections[sections.length - 1].id;
  }

  // Gunakan satu garis acuan yang konsisten. Section yang paling akhir
  // melewati garis ini adalah section yang sedang dibaca pengguna.
  const activationLine = Math.max(110, Math.min(window.innerHeight * 0.32, 240));
  let current = sections[0].id;

  for (const section of sections) {
    const top = section.element.getBoundingClientRect().top;
    if (top <= activationLine) current = section.id;
    else break;
  }

  return current;
};

const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark"
  );
  const [activeSection, setActiveSection] = useState(getSectionFromScroll);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.body.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("portfolio-theme", theme);
    window.dispatchEvent(
      new CustomEvent("portfolioThemeChange", { detail: theme })
    );
  }, [theme]);

  useEffect(() => {
    let frame = null;

    const updateActiveSection = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        setActiveSection(getSectionFromScroll());
        frame = null;
      });
    };

    // Sinkronisasi awal dilakukan setelah layout dan posisi hash diterapkan.
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);
    window.addEventListener("pageshow", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
      window.removeEventListener("pageshow", updateActiveSection);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav className="identity-nav" aria-label="Main navigation">
      <div className="nav-links">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={activeSection === item.id ? "active" : ""}
            aria-current={activeSection === item.id ? "location" : undefined}
          >
            {item.label}
          </a>
        ))}
        <button
          className="theme-toggle"
          type="button"
          onClick={() =>
            setTheme((current) => (current === "dark" ? "light" : "dark"))
          }
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
          title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
