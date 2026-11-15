import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Instagram, Code2, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Hikam Sirrul Arifin | Full-Stack Developer</title>
        <meta name="description" content="Portfolio Hikam Sirrul Arifin, Informatics Engineering graduate and Full-Stack Web Developer." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hikamsrl.web.id" />
      </Helmet>
      <main id="Home" className="identity-shell hero-shell">
        <section className="identity-canvas hero-canvas">
          <div className="hero-topline"><span><i className="status-dot"/> AVAILABLE FOR OPPORTUNITIES</span><span>PORTFOLIO / 2026</span></div>
          <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={14}/> SOFTWARE DEVELOPER & CREATIVE BUILDER</p>
            <h1 className="hero-name"><span>HIKAM</span><span className="name-outline">SIRRUL<span className="name-period">.</span></span></h1>
            <div className="hero-bottom-copy">
              <p className="hero-role">FULL-STACK<br/><em>DEVELOPER</em></p>
              <p className="hero-description">I build thoughtful digital products by combining clean interfaces, reliable backend systems, and practical problem solving.</p>
            </div>
            <div className="hero-links">
              <a className="blue-pill" href="#Portofolio">Explore my work <ArrowUpRight size={17}/></a>
              <a className="text-link" href="#Contact">Get in touch <ArrowDownRight size={16}/></a>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-backdrop"/><div className="portrait-ring"/>
            <img className="hero-portrait" src="/Foto.png" alt="Hikam Sirrul Arifin"/>
            <div className="portrait-caption"><span>BASED IN INDONESIA</span><span>01 / 06</span></div>
          </div>
          <div className="hero-side-note">DESIGNING · DEVELOPING · DEPLOYING</div>
          <div className="hero-socials">
            <a href="https://github.com/HikamSirrul" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
            <a href="https://www.linkedin.com/in/hikamsrl/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
            <a href="https://www.instagram.com/hikamsrl/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a>
          </div>
          <div className="hero-index"><Code2 size={14}/> PERSONAL PORTFOLIO</div>
        </section>
      </main>
    </>
  );
}
