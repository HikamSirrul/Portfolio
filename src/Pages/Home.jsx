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
   <div className="hero-giant-name" aria-label="Hikam Sirrul">
    <span className="hero-word-line hero-word-one">HIKAM SIRRUL</span>
   </div>
   <div className="hero-portrait">
    <div className="hero-portrait-hover">
     <span className="hero-portrait-overlay hero-portrait-overlay-base"/>
     <span className="hero-portrait-overlay hero-portrait-overlay-blue"/>
     <img src="/Foto_Nobg.png" alt="Hikam Sirrul Arifin" fetchPriority="high"/>
     <span className="hero-portrait-shine" aria-hidden="true"/>
    </div>
   </div>
   <div className="hero-copy">
    <p>Full-Stack Web Developer<br/>&amp; IT Enthusiast</p>
    <div className="hero-social" aria-label="Social links">
     <a href="https://github.com/HikamSirrul" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16}/></a>
     <a href="https://www.linkedin.com/in/hikamsrl/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16}/></a>
     <a href="https://www.instagram.com/hikamsrl/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16}/></a>
    </div>
   </div>
   <div className="hero-side-note">
    <span>Web Development · Software Engineering</span>
    <a className="hero-cta" href="#Portofolio">Explore My Works <ArrowUpRight size={15}/></a>
   </div>
  </section>
 </>
);
export default memo(Home);
