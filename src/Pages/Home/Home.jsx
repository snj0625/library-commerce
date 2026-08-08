import React from "react";
import "./Home.css";
import SideBar from "../../Components/SideBar/SideBar";
import Feed from "../../Components/Feed/Feed"
const Home = ({sidebar}) => {
  return (
    < >
    <SideBar sidebar={sidebar} />
    <div className ={`container ${sidebar?"":'large-container'}`}>
    <Feed />
    </div>
    </>
  
  
)
}

export default Home;
