import React from "react";
// import ReactDOM from "react-dom";
import Home from "./App";
import './App.css'
import Contact from "./components/Contact.jsx";
import Dashboard from './components/Dashboard';
import Slidebar from './components/Sidebar';
import Footer from "./components/Footer";
import About from './components/About'
import './index.css'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { dividerClasses } from "@mui/material";



export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <div>
        <Home /> 
        <hr />
        <Footer/>
        </div>
     
        }>

        </Route>
        <Route path="/Contact" element={
          <div className="flex fles-col">
            <div className="flex flex-row">

              {/* i think we have to implement all these in the contact page then it will work  */}
            <Slidebar/>
            <Contact />
            </div>
             
             {/* <div>

               <Footer/>
             </div> */}
          </div>
       
        }
         />
        <Route path="/Dashboard" element={
          <div className="flex flex-col">
          <Dashboard />
          </div>
        } />
        <Route path="/About" element={
  <div className="flex flex-row">
    <div className="w-full h-auto md:w-64">
      <Slidebar />
    </div>
    <div>
    <About />
    </div>
      
  </div>
} />

      
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);






//now icon are rendering but what we have to render on that we have to work little bit 
 
















// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
