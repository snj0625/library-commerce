import React from "react";
import "./Feed.css";
import book1 from "../../assets/book-1.jpeg";
import { Link } from "react-router-dom";


const Feed = () => {
  return (
    <div className="feed">
      <Link to={`book/20/6473`}className="card">
        <img src={book1} alt="" />
        <h2>Book Title</h2>
        <h3>Book Author</h3>
        <p>Number of Reviews</p>
      </Link>

      <div className="card">
        <img src={book1} alt="" />
        <h2>Book Title</h2>
        <h3>Book Author</h3>
        <p>Number of Reviews</p>
      </div>

      <div className="card">
        <img src={book1} alt="" />
        <h2>Book Title</h2>
        <h3>Book Author</h3>
        <p>Number of Reviews</p>
      </div>
    </div>
  );
};

export default Feed;
