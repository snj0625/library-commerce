import React from "react";
import "./SideBar.css";
import home_icon from "../../assets/home.png";
import genre from "../../assets/Undraw_Books.svg";

const SideBar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link">
          <img src={home_icon} alt="Genre" /><p>Home</p>
        </div>
        <div className="side-link">
          <img src={genre} alt="Genre" /><p>Genre</p>
        </div>
        <div className="side-link">
          <img src={genre} alt="Genre" /><p>Genre</p>
        </div>
        <div className="side-link">
          <img src={genre} alt="Genre" /><p>Genre</p>
        </div>
        <div className="side-link">
          <img src={genre} alt="Genre" /><p>Genre</p>
        </div>
        <div className="side-link">
          <img src={genre} alt="Genre" /><p>Genre</p>
        </div>

        <hr />
        </div>
        <div className="recommended-list">
          <h3>Recommended for You</h3>
          <div className="recommended-item">
            <img src={genre} alt="Genre" />
            <p>Genre</p>
          </div>
          <div className="recommended-item">
            <img src={genre} alt="Genre" />
            <p>Genre</p>
          </div>
          <div className="recommended-item">
            <img src={genre} alt="Genre" />
            <p>Genre</p>
          </div>
        </div>
      </div>
      

    
  );
};

export default SideBar;