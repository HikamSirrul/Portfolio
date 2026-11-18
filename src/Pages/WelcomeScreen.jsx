import React,{useEffect} from "react";
import {motion} from "framer-motion";

const WelcomeScreen=({onLoadingComplete})=>{
 useEffect(()=>{
  const theme=localStorage.getItem("portfolio-theme")||"dark";
  document.documentElement.dataset.theme=theme;
  document.body.dataset.theme=theme;
  const timer=setTimeout(()=>onLoadingComplete?.(),2200);
  return()=>clearTimeout(timer);
 },[onLoadingComplete]);

 return (
  <motion.div
   className="welcome-screen fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
   initial={{opacity:0}}
   animate={{opacity:1}}
   exit={{opacity:0,scale:1.025,filter:"blur(12px)"}}
   transition={{duration:.7,ease:"easeOut"}}
   aria-label="Welcome"
  >
   <motion.div
    className="welcome-orbit welcome-orbit-one"
    initial={{opacity:0,scale:.72,rotate:-35}}
    animate={{opacity:1,scale:1,rotate:0}}
    transition={{duration:1.4,ease:[.16,1,.3,1]}}
   />
   <motion.div
    className="welcome-orbit welcome-orbit-two"
    initial={{opacity:0,scale:.6}}
    animate={{opacity:1,scale:1}}
    transition={{duration:1.6,delay:.12,ease:[.16,1,.3,1]}}
   />
   <motion.div
    className="welcome-light-beam"
    initial={{opacity:0,scaleX:0}}
    animate={{opacity:.8,scaleX:1}}
    transition={{duration:1.1,delay:.25,ease:"easeOut"}}
   />
   <div className="welcome-content relative z-10 text-center px-6">
    <motion.p
     className="welcome-eyebrow"
     initial={{opacity:0,y:16,letterSpacing:".7em"}}
     animate={{opacity:1,y:0,letterSpacing:".38em"}}
     transition={{duration:.8,delay:.25,ease:"easeOut"}}
    >HIKAM SIRRUL ARIFIN</motion.p>
    <motion.h1
     className="welcome-title"
     initial={{opacity:0,y:28,filter:"blur(12px)"}}
     animate={{opacity:1,y:0,filter:"blur(0px)"}}
     transition={{duration:1,delay:.48,ease:[.16,1,.3,1]}}
    >
     WELCOME TO MY
     <span>DIGITAL SPACE</span>
    </motion.h1>
    <motion.p
     className="welcome-subtitle"
     initial={{opacity:0,y:14}}
     animate={{opacity:1,y:0}}
     transition={{duration:.8,delay:.95,ease:"easeOut"}}
    >FULL-STACK WEB DEVELOPER <i/> INFORMATICS ENGINEERING
    </motion.p>
    <motion.div
     className="welcome-loading-line"
     initial={{scaleX:0,opacity:0}}
     animate={{scaleX:1,opacity:1}}
     transition={{duration:1.1,delay:1.05,ease:"easeInOut"}}
    />
   </div>
   <motion.span className="welcome-corner-mark welcome-corner-left"
    initial={{opacity:0,x:-15}} animate={{opacity:.55,x:0}} transition={{delay:.5,duration:.8}}
   >H / S</motion.span>
   <motion.span className="welcome-corner-mark welcome-corner-right"
    initial={{opacity:0,x:15}} animate={{opacity:.55,x:0}} transition={{delay:.5,duration:.8}}
   >PORTFOLIO · 2026</motion.span>
  </motion.div>
 );
};
export default WelcomeScreen;
