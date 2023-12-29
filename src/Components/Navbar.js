import React from "react";
import './Navbar.css'
const Navbar = () => {
    return (
<>
  <nav className="sticky navbar">
    <div className="brand  display__logo">
      <a href="#top" className="nav__link">
        
        <span className="logo"><img src="logo.png" height={58} width={58}/> &nbsp;ELECTRONICS CLUB</span>
      </a>
    </div>
    <input type="checkbox" id="nav" className="hidden" />
    <label htmlFor="nav" className="nav__open">
      <i />
      <i />
      <i />
    </label>
    <div className="nav">
      <ul className="nav__items">
        <li className="nav__item">
          <a href="/" className="nav__link" id="active">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/Projects" className="nav__link" >
            Projects
          </a>
        </li>
        <li className="nav__item">
          <a href="/Database" className="nav__link">
            Database
          </a>
        </li>
        <li className="nav__item">
          <a href="/Team" className="nav__link">
            Team
          </a>
        </li>
        <li className="nav__item">
          <a href="/Comp" className="nav__link">
            Get Components
          </a>
        </li>
      </ul>
    </div>
    
  </nav>
 
</>


        );
    };
    
    export default Navbar;
    