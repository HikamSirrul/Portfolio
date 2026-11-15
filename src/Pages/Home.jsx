import React, { memo } from "react";
import { Helmet } from "react-helmet-async";
import { Github, Linkedin, Instagram, ArrowUpRight, Sparkles } from "lucide-react";

const Home = () => (
  <>
    <Helmet>
      <title>Hikam Sirrul Arifin — Full-Stack Web Developer</title>
      <meta name="description" content="Portfolio Hikam Sirrul Arifin, Informatics Engineering graduate and Full-Stack Web Developer." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://hikamsrl.web.id" />
      <meta property="og:title" content="Hikam Sirrul Arifin — Full-Stack Web Developer" />
      <meta property="og:description" content="Building digital experiences through software engineering." />
      <meta property="og:url" content="https://hikamsrl.web.id" />
      <meta property="og:type" content="website" />
    </Helmet>
    <section id="Home" aria-label="Introduction">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker flex items-center gap-2"><Sparkles size={14} className="text-blue-400"/> HI, I'M HIKAM SIRRUL</div>
          <div className="hero-name" aria-hidden="true">
            <span>HIKAM</span><span className="name-second">SIRRUL<span className="blue-word">.</span></span>
          </div>
          <div className="hero-intro">
            <div className="text-[11px] uppercase tracking-[.18em] text-blue-300 font-semibold">Informatics Engineering Graduate</div>
            <h1>Hikam <span>Sirrul</span></h1>
            <p>Full-Stack Web Developer &amp; IT Enthusiast. I build functional, thoughtful, and user-focused digital experiences.</p>
            <a className="hero-cta" href="#Portofolio">Explore My Works <ArrowUpRight size={15}/></a>
            <div className="hero-social" aria-label="Social links">
              <a href="https://github.com/HikamSirrul" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a>
              <a href="https://www.linkedin.com/in/hikamsrl/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a>
              <a href="https://www.instagram.com/hikamsrl/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17}/></a>
            </div>
          </div>
        </div>
        <div className="hero-portrait" aria-label="Hikam Sirrul portrait">
          <span className="hero-orbit one">✦</span><span className="hero-orbit two">✧</span>
          <img src="/Foto.png" alt="Hikam Sirrul" fetchPriority="high"/>
        </div>
      </div>
    </section>
  </>
);

export default memo(Home);
