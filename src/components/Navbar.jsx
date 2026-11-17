import React,{useEffect,useState} from "react";
import {Moon,Sun} from "lucide-react";
const NAV_ITEMS=[{href:"#Home",label:"Home"},{href:"#About",label:"About"},{href:"#Portofolio",label:"Works"},{href:"#Contact",label:"Contact"}];
const Navbar=()=>{
 const [activeSection,setActiveSection]=useState("Home");
 const [theme,setTheme]=useState(()=>localStorage.getItem("portfolio-theme")||"dark");
 useEffect(()=>{
  document.documentElement.dataset.theme=theme;
  document.body.dataset.theme=theme;
  document.documentElement.style.colorScheme=theme;
  localStorage.setItem("portfolio-theme",theme);
  window.dispatchEvent(new CustomEvent("portfolioThemeChange",{detail:theme}));
 },[theme]);
 useEffect(()=>{
  const updateActive=()=>{
   const marker=window.innerHeight*.38;
   let active="Home";
   NAV_ITEMS.forEach(item=>{
    const section=document.querySelector(item.href);
    if(section&&section.getBoundingClientRect().top<=marker)active=item.href.slice(1);
   });
   setActiveSection(active);
  };
  updateActive();
  window.addEventListener("scroll",updateActive,{passive:true});
  window.addEventListener("resize",updateActive);
  return()=>{window.removeEventListener("scroll",updateActive);window.removeEventListener("resize",updateActive)};
 },[]);
 const scrollTo=(event,href)=>{
  event.preventDefault();
  const sectionId=href.slice(1);
  setActiveSection(sectionId);
  window.history.replaceState(null,"",href);

  // Works and Contact are lazy-loaded; wait briefly for their section to mount.
  const revealSection=(attempt=0)=>{
   const target=document.getElementById(sectionId);
   if(!target){
    if(attempt<40)window.setTimeout(()=>revealSection(attempt+1),100);
    return;
   }
   target.scrollIntoView({behavior:"smooth",block:"start"});
   // Re-align once layout/async content has settled, without jumping to the heading only.
   window.setTimeout(()=>{
    const current=document.getElementById(sectionId);
    if(current)current.scrollIntoView({behavior:"smooth",block:"start"});
   },450);
  };
  revealSection();
 };
 return <nav className="identity-nav" aria-label="Main navigation">
  <div className="nav-links">
   {NAV_ITEMS.map(item=><a key={item.href} href={item.href} onClick={e=>scrollTo(e,item.href)} className={activeSection===item.href.slice(1)?"active":""}>{item.label}</a>)}
   <button className="theme-toggle" type="button" onClick={()=>setTheme(current=>current==="dark"?"light":"dark")} aria-label={theme==="dark"?"Switch to light mode":"Switch to dark mode"} title={theme==="dark"?"Light mode":"Dark mode"}>{theme==="dark"?<Sun size={15}/>:<Moon size={15}/>}</button>
  </div>
 </nav>;
};
export default Navbar;
