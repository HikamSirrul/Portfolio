import React,{memo} from "react";
import {Helmet} from "react-helmet-async";
import {Github,Linkedin,Instagram,ArrowUpRight} from "lucide-react";
const Home=()=>(
 <>
  <Helmet>
   <title>Hikam Sirrul Arifin — Full-Stack Web Developer</title>
   <meta name="description" content="Portfolio Hikam Sirrul Arifin, Informatics Engineering graduate and Full-Stack Web Developer."/>
   <meta name="robots" content="index, follow"/>
   <link rel="canonical" href="https://hikamsrl.web.id"/>
   <meta property="og:title" content="Hikam Sirrul Arifin — Full-Stack Web Developer"/>
   <meta property="og:description" content="Building digital experiences through software engineering."/>
   <meta property="og:url" content="https://hikamsrl.web.id"/>
   <meta property="og:type" content="website"/>
  </Helmet>
  <section id="Home" className="identity-hero" aria-label="Introduction">
   <div className="hero-backdrop-orbit hero-orbit-large"/>
   <div className="hero-backdrop-orbit hero-orbit-small"/>
   <div className="hero-giant-name" aria-hidden="true">
    <span className="hero-word-line hero-word-one">HIKAM</span>
    <span className="hero-word-line hero-word-two">SIRRUL</span>
    <span className="hero-word-line hero-word-three">ARIFIN</span>
   </div>
   <div className="hero-photo-glow"/>
   <div className="hero-portrait"><img src="/Foto_Nobg.png" alt="Hikam Sirrul Arifin" fetchPriority="high"/></div>
   <div className="hero-copy">
    <div className="hero-kicker">HI, I'M</div>
    <h1>Hikam <span>Sirrul Arifin</span></h1>
    <p>Full-Stack Web Developer<br/>&amp; IT Enthusiast</p>
    <a className="hero-cta" href="/works">Explore My Works <ArrowUpRight size={15}/></a>
    <div className="hero-social" aria-label="Social links">
     <a href="https://github.com/HikamSirrul" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16}/></a>
     <a href="https://www.linkedin.com/in/hikamsrl/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16}/></a>
     <a href="https://www.instagram.com/hikamsrl/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16}/></a>
    </div>
   </div>
   <div className="hero-side-note"><span className="hero-status-dot"/> Available for new opportunities<br/><small>Web Development · Software Engineering</small></div>
  </section>
 </>
);
export default memo(Home);
