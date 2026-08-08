import React from "react";
import "./NavBar.css";
import menu_icon from "../../assets/menu.png";
import libraryLogo from "../../assets/Library.svg";
import libraryIcon from "../../assets/library.png";
import searchIcon from "../../assets/search.png";


const NavBar = ({ setSidebar }) => {
  return (

  <nav className= 'flex-div'>

    <div className="nav-left flex-div">
      <img className = 'menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="Menu Icon" />
      
      <img className = 'library-logo' src={libraryLogo} alt="Library Logo" />
    </div>

    <div className="nav-middle flex-div">
<div className="search-box flex-div">
<input type="text" placeholder="Search for books..." />
<img src={searchIcon} alt="Search Icon" />
</div>
    </div>

    <div className="nav-right flex-div">
     <img className = 'library-icon' src={libraryIcon} alt="Library Icon" />
    </div>
  </nav>
  );
};

export default NavBar;
