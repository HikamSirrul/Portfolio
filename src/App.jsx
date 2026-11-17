import React,{useEffect,useState,lazy,Suspense} from "react";
import {BrowserRouter,Routes,Route,Outlet,useLocation} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const ProjectDetails=lazy(()=>import("./components/ProjectDetail"));
const WelcomeScreen=lazy(()=>import("./Pages/WelcomeScreen"));
const NotFoundPage=lazy(()=>import("./Pages/404"));

function PublicLayout({showWelcome,setShowWelcome}){
 const location=useLocation();
 useEffect(()=>{
  window.scrollTo({top:0,left:0,behavior:"instant"});
 },[location.pathname]);

 if(showWelcome&&location.pathname==="/"){
  return <Suspense fallback={null}><WelcomeScreen onLoadingComplete={()=>setShowWelcome(false)}/></Suspense>;
 }
 return <>
  <Navbar/>
  <main className="public-page-content"><Outlet/></main>
  <Footer/>
 </>;
}

const ProjectPageLayout=()=> <><Suspense fallback={<div className="min-h-screen"/>}><ProjectDetails/></Suspense><Footer/></>;

function App(){
 const [showWelcome,setShowWelcome]=useState(true);
 return <HelmetProvider><BrowserRouter><Routes>
  <Route element={<PublicLayout showWelcome={showWelcome} setShowWelcome={setShowWelcome}/>}>
   <Route index element={<Home/>}/>
   <Route path="about" element={<About/>}/>
   <Route path="works" element={<Portofolio/>}/>
   <Route path="contact" element={<ContactPage/>}/>
  </Route>
  <Route path="/project/:slug" element={<ProjectPageLayout/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/dashboard/*" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
  <Route path="*" element={<Suspense fallback={null}><NotFoundPage/></Suspense>}/>
 </Routes></BrowserRouter></HelmetProvider>
}
export default App;
