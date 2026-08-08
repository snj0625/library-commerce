import React from "react";
import "./Recommended.css";
import book3 from "../../assets/book-3.jpeg"
const Recommended = () => {
  return (
  <div className='recommended'>
<div className="side-book-list">
  <img src={book3} alt="" />
  <div className="book-info">
    <h4>Book Title</h4>
    <p>Auhtor</p>
    <p>Number of Reviews</p>
  </div>
</div>
  </div>

  )
}

export default Recommended;
