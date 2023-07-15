import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom';


export default function Navbar(props) {  
  return (
<nav className ={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>      
  <div className ="container-fluid">
    {/* <Link className ="navbar-brand" to="/">{props.title}</Link> */}
    <a className ="navbar-brand" href="#">{props.title}</a> 
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
        <li className ="nav-item">
          {/* <Link className ="nav-link active" aria-current="page" to="/">Home</Link> */}
          <a className ="nav-link active" aria-current="page" href="#">Home</a> 
        </li> 
        {/* <li className ="nav-item">
          <Link className ="nav-link active" aria-current="page" to="/about">{props.aboutText}</Link> 
        </li>                                                           */}
      </ul>
      {/* Switch for mode change */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    {/* This is JavaScript written in html which will take The Reverse value of mode in App.js */}
                          {/* For taking direct value -->   text-${props.mode}*/}
                         {/* For taking Conditional value  -->   text-${props.mode ==='light'?'dark':'light'}*/}
                    {/* Use of condition expression  -->   IF props.mode === light THEN THIS VALUE WILL BE EQUAL TO dark ELSE light*/}
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeBtntext}</label>
      </div>

      <form className ="d-flex mx-2" role="search">
        <input className ="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className ="btn btn-outline-info" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

// Shortcut  -->  pts  -->  PropTypes.string
//     V Small p in Navbar.propTypes
Navbar.propTypes = {title : PropTypes.string.isRequired,   // .isRequired make prop compulsory 
                    aboutText : PropTypes.string} 
// Select propTypes for your props i.e string, obj, interger

Navbar.defaultProps = {
    aboutText : "default-About"
};




