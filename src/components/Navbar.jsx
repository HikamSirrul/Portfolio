import React,{useEffect,useState} from "react";
import {NavLink} from "react-router-dom";
import {Moon,Sun} from "lucide-react";

const NAV_ITEMS=[
 {to:"/",label:"Home",end:true},
 {to:"/about",label:"About"},
 {to:"/works",label:"Works"},
 {to:"/contact",label:"Contact"}
];

const Navbar=()=>{
 const [theme,setTheme]=useState(()=>localStorage.getItem("portfolio-theme")||"dark");
 useEffect(()=>{
  document.documentElement.dataset.theme=theme;
  document.body.dataset.theme=theme;
  document.documentElement.style.colorScheme=theme;
  localStorage.setItem("portfolio-theme",theme);
  window.dispatchEvent(new CustomEvent("portfolioThemeChange",{detail:theme}));
 },[theme]);

 return <nav className="identity-nav" aria-label="Main navigation">
  <div className="nav-links">
   {NAV_ITEMS.map(item=><NavLink
    key={item.to}
    to={item.to}
    end={item.end}
    className={({isActive})=>isActive?"active":""}
   >{item.label}</NavLink>)}
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
