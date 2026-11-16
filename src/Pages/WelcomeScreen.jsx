import React,{useEffect} from "react";
import {motion} from "framer-motion";
import {Code2,Github,Globe,ArrowUpRight} from "lucide-react";

const WelcomeScreen=({onLoadingComplete})=>{
 useEffect(()=>{
  const theme=localStorage.getItem("portfolio-theme")||"dark";
  document.documentElement.dataset.theme=theme;
  document.body.dataset.theme=theme;
  const timer=setTimeout(()=>onLoadingComplete?.(),1800);
  return()=>clearTimeout(timer);
 },[onLoadingComplete]);
 return <motion.div className="welcome-screen fixed inset-0 z-[200] flex items-center justify-center p-4" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0,scale:1.03,filter:"blur(8px)"}} transition={{duration:.65}}>
  <div className="welcome-card relative w-full max-w-3xl overflow-hidden rounded-[28px] border px-7 py-16 text-center sm:px-12">
   <div className="welcome-glow absolute -right-16 -top-20 h-64 w-64 rounded-full blur-3xl"/>
   <div className="relative">
    <div className="mb-8 flex justify-center gap-5 text-blue-500"><Code2/><Github/><Globe/></div>
    <p className="mb-3 text-xs font-semibold uppercase tracking-[.35em] text-blue-500">HIKAM SIRRUL</p>
    <h1 className="font-['Space_Grotesk'] text-4xl font-bold tracking-tight sm:text-6xl">WELCOME TO MY<br/><span className="text-[#176bff]">DIGITAL SPACE.</span></h1>
    <p className="mt-5 text-sm welcome-muted">Full-Stack Web Developer · Informatics Engineering</p>
    <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#176bff] px-5 py-3 text-sm font-semibold text-white">Explore Portfolio <ArrowUpRight size={16}/></div>
   </div>
  </div>
 </motion.div>
};
export default WelcomeScreen;
