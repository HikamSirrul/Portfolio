import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { usePortfolioTheme } from "../context/ThemeContext";

const navItems = [
  { href: "#Home", label: "Home" },
  { href: "#About", label: "About" },
  { href: "#Portofolio", label: "Works" },
  { href: "#Contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const { theme, toggleTheme } = usePortfolioTheme();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    navItems.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const goTo = (event, href) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <header className="identity-header">
      <a className="identity-wordmark" href="#Home" onClick={(e) => goTo(e, "#Home")}>H<span>.</span>SA</a>
      <nav className={`identity-nav ${isOpen ? "is-open" : ""}`} aria-label="Main navigation">
        {navItems.map(({ href, label }) => (
          <a key={href} href={href} onClick={(e) => goTo(e, href)} className={activeSection === href.slice(1) ? "active" : ""}>{label}</a>
        ))}
      </nav>
      <div className="identity-actions">
        <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
          {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <a className="nav-lets-talk" href="#Contact" onClick={(e) => goTo(e, "#Contact")}>Let's talk <ArrowUpRight size={15}/></a>
        <button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">{isOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>
  );
}
