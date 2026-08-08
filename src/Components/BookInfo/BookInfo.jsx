import React from "react";
import "./BookInfo.css";
import book2 from "../../assets/book-2.jpeg"

const BookInfo = () => {
  return (
<div className='book-info'> 
  <img src={book2} />
  <h3>Book Title</h3>
<div className="book-info-info">
  <p>Number of Reviews &bull; Average Rating</p>
</div>
<hr />
<div className="author">
  <img src={book2} alt="" />
</div>
<div>
<p> Author Name </p>
<button> Add to Cart </button>
</div>
<div className="book-description">
  <p>Book Description</p>
  <hr />
  <h4> Number of Reviews</h4>
  <div className="comment">
    <img src={book2} alt="" />
  </div>
  <h3>Reviewer Name <span>Time Ago</span></h3>
  <p>Review comment</p>
  
</div>
</div>

)
}

export default BookInfo;
