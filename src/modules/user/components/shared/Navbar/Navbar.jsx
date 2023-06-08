import React from 'react'
import "../Navbar/Nav.css"
import { NavLink } from 'react-router-dom'
const Navbar = () => {

    /* Set the width of the sidebar to 250px (show it) */
    const openNav = ()=> {
    document.getElementById("mySidepanel").style.width = "250px";
    }
  
    /* Set the width of the sidebar to 0 (hide it) */
    const closeNav = ()=> {
    document.getElementById("mySidepanel").style.width = "0";
    }
  return (
    <>
    <div className="navbar navbar-expand-md navbar-dark bg-dark">
        <button className="openbtn bg-dark" onClick={openNav}>&#9776; </button>
        <NavLink className="navbar-brand" to="/"> <h3 style={{float : 'left'}}>42</h3></NavLink>
        <NavLink className="navbar-brand" to="/"><span>Berlin</span></NavLink>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#NavId" >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="NavId">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">Curriculum</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">Events</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">About</NavLink>
                </li>
            </ul>
        </div>
    </div>

    {/* sidebar */}
    
    <div id="mySidepanel" className="sidepanel">
        <NavLink className="closebtn" onClick={closeNav}>&times;</NavLink>
        <NavLink to="applicants">Applicants</NavLink>
        <NavLink to="student">Student</NavLink>
        <NavLink to="settings">Settings</NavLink>
    </div>
    </>
  )
}




export default Navbar