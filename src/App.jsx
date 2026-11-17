import {BrowserRouter,Routes,Route} from "react-router-dom";
import React,{useState,lazy,Suspense} from "react";
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

const LandingPage=({showWelcome,setShowWelcome})=><>
 {showWelcome&&<Suspense fallback={null}><WelcomeScreen onLoadingComplete={()=>setShowWelcome(false)}/></Suspense>}
 {!showWelcome&&<>
  <Navbar/>
  <main>
   <Home/>
   <About/>
   <Portofolio/>
   <ContactPage/>
  </main>
  <Footer/>
 </>}
</>;
const ProjectPageLayout=()=> <><Suspense fallback={<div className="min-h-screen"/>}><ProjectDetails/></Suspense><Footer/></>;
function App(){
 const [showWelcome,setShowWelcome]=useState(true);
 return <HelmetProvider><BrowserRouter><Routes>
  <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome}/>}/>
  <Route path="/project/:slug" element={<ProjectPageLayout/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/dashboard/*" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
  <Route path="*" element={<Suspense fallback={null}><NotFoundPage/></Suspense>}/>
 </Routes></BrowserRouter></HelmetProvider>
}
export default App;
