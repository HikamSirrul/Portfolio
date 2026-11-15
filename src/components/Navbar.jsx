import React,{useEffect,useState} from "react";
import {Moon,Sun} from "lucide-react";

const Navbar=()=>{
 const [activeSection,setActiveSection]=useState("Home");
 const [theme,setTheme]=useState(()=>localStorage.getItem("portfolio-theme")||"dark");
 const navItems=[{href:"#Home",label:"Home"},{href:"#About",label:"About"},{href:"#Portofolio",label:"Works"},{href:"#Contact",label:"Contact"}];
 useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem("portfolio-theme",theme)},[theme]);
 useEffect(()=>{
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)setActiveSection(entry.target.id)})},{rootMargin:"-35% 0px -55% 0px"});
  navItems.forEach(item=>{const el=document.querySelector(item.href);if(el)observer.observe(el)});
  return()=>observer.disconnect();
 },[]);
 const scrollTo=(event,href)=>{event.preventDefault();document.querySelector(href)?.scrollIntoView({behavior:"smooth",block:"start"})};
 return <nav className="identity-nav" aria-label="Main navigation">
  <div className="nav-links">
   <a href="#Home" className="nav-brand" onClick={e=>scrollTo(e,"#Home")}>✦ Hikam Sirrul</a>
   {navItems.map(item=><a key={item.href} href={item.href} onClick={e=>scrollTo(e,item.href)} className={activeSection===item.href.slice(1)?"active":""}>{item.label}</a>)}
   <button className="theme-toggle" type="button" onClick={()=>setTheme(current=>current==="dark"?"light":"dark")} aria-label={theme==="dark"?"Switch to light mode":"Switch to dark mode"} title={theme==="dark"?"Light mode":"Dark mode"}>{theme==="dark"?<Sun size={15}/>:<Moon size={15}/>}</button>
  </div>
 </nav>
};
export default Navbar;
