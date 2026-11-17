import React,{useEffect,useState} from "react";
import {Moon,Sun} from "lucide-react";

const NAV_ITEMS=[
 {href:"#Home",label:"Home",id:"Home"},
 {href:"#About",label:"About",id:"About"},
 {href:"#Portofolio",label:"Works",id:"Portofolio"},
 {href:"#Contact",label:"Contact",id:"Contact"}
];

const Navbar=()=>{
 const [theme,setTheme]=useState(()=>localStorage.getItem("portfolio-theme")||"dark");
 const [activeSection,setActiveSection]=useState(()=>{
  const hash=window.location.hash.replace("#","");
  return NAV_ITEMS.some(item=>item.id===hash)?hash:"Home";
 });

 useEffect(()=>{
  document.documentElement.dataset.theme=theme;
  document.body.dataset.theme=theme;
  document.documentElement.style.colorScheme=theme;
  localStorage.setItem("portfolio-theme",theme);
  window.dispatchEvent(new CustomEvent("portfolioThemeChange",{detail:theme}));
 },[theme]);

 useEffect(()=>{
  const sections=NAV_ITEMS.map(item=>document.getElementById(item.id)).filter(Boolean);
  if(!sections.length)return;
  const observer=new IntersectionObserver((entries)=>{
   const visible=entries
    .filter(entry=>entry.isIntersecting)
    .sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
   if(visible[0])setActiveSection(visible[0].target.id);
  },{
   root:null,
   rootMargin:"-24% 0px -58% 0px",
   threshold:[0,0.15,0.3,0.5,0.75]
  });
  sections.forEach(section=>observer.observe(section));
  const handleHashChange=()=>{
   const id=window.location.hash.replace("#","");
   if(NAV_ITEMS.some(item=>item.id===id))setActiveSection(id);
  };
  window.addEventListener("hashchange",handleHashChange);
  return()=>{
   observer.disconnect();
   window.removeEventListener("hashchange",handleHashChange);
  };
 },[]);

 return <nav className="identity-nav" aria-label="Main navigation">
  <div className="nav-links">
   {NAV_ITEMS.map(item=><a
    key={item.href}
    href={item.href}
    className={activeSection===item.id?"active":""}
    aria-current={activeSection===item.id?"location":undefined}
    onClick={()=>setActiveSection(item.id)}
   >{item.label}</a>)}
   <button
    className="theme-toggle"
    type="button"
    onClick={()=>setTheme(current=>current==="dark"?"light":"dark")}
    aria-label={theme==="dark"?"Switch to light mode":"Switch to dark mode"}
    title={theme==="dark"?"Light mode":"Dark mode"}
   >{theme==="dark"?<Sun size={15}/>:<Moon size={15}/>}</button>
  </div>
 </nav>;
};
export default Navbar;
