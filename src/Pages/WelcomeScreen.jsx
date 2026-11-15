import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2, Github, Linkedin, Sparkles } from "lucide-react";

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 2600);
    return () => window.clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (!visible) {
      const timer = window.setTimeout(() => onLoadingComplete?.(), 650);
      return () => window.clearTimeout(timer);
    }
  }, [visible, onLoadingComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.main className="welcome-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.025, filter: "blur(12px)" }} transition={{ duration: .55 }}>
          <div className="welcome-grid" />
          <div className="welcome-glow welcome-glow-a" />
          <div className="welcome-glow welcome-glow-b" />
          <div className="welcome-frame">
            <div className="welcome-meta"><span><i /> DIGITAL CREATIVE PORTFOLIO</span><span>EST. 2026 <span className="welcome-meta-slash">/</span> INDONESIA</span></div>
            <div className="welcome-main">
              <motion.div className="welcome-symbol" initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .15, duration: .7 }}>
                <Code2 size={21}/><span>Hikamsrl</span><Sparkles size={15}/>
              </motion.div>
              <motion.p className="welcome-kicker" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }}>HELLO, I'M HIKAM SIRRUL ARIFIN</motion.p>
              <div className="welcome-title">
                <motion.h1 initial={{ x: -35, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: .45, duration: .8 }}>WELCOME<span className="welcome-dot">.</span></motion.h1>
                <motion.div className="welcome-title-bottom" initial={{ x: 35, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: .65, duration: .8 }}>
                  <span>TO MY</span><strong>PORTFOLIO<span>_</span></strong>
                </motion.div>
              </div>
              <motion.p className="welcome-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .95 }}>Building thoughtful digital experiences through code, creativity, and continuous learning.</motion.p>
              <motion.div className="welcome-progress" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
                <div className="welcome-progress-track"><motion.span initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.25, delay: 1.15, ease: "easeInOut" }}/></div>
                <span>PREPARING YOUR EXPERIENCE</span><ArrowUpRight size={15}/>
              </motion.div>
            </div>
            <div className="welcome-footer"><span>FULL-STACK WEB DEVELOPER <b>·</b> IT ENTHUSIAST</span><span className="welcome-social"><Github size={15}/><Linkedin size={15}/></span><span>01 <b>/</b> 04</span></div>
          </div>
          <motion.div className="welcome-side-label" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}>DESIGN · DEVELOP · DEPLOY</motion.div>
        </motion.main>
      )}
    </AnimatePresence>
  );
};
export default WelcomeScreen;
