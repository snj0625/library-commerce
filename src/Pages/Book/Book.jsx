import React from "react";
import "./Book.css";
import BookInfo from '../../Components/BookInfo/BookInfo'
import Recommended from '../../Components/Recommended/Recommended'
import book3 from '../../assets/book-3.jpeg'
const Book = () => {
  return (
  <div className='book-container'>
    <BookInfo />
    <Recommended />
  </div>

)};

export default Book;
