import React from 'react';
import {Link,useLocation} from "react-router-dom";
import {useState,useEffect} from "react";


function Navbar() {
    const [expandNavbar,setExpandNavbar] = useState(false);
    const location = useLocation();
    useEffect(()=>{
        setExpandNavbar(false)
    },[location]);
      return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButon'>
            {/* <button onClick={()=>{setExpandNavbar((prev)=> !prev)}}></button> */}
        </div>
        <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        </div>
    </div>
  )
}

export default Navbar