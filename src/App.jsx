import React, { useState} from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Book from './Pages/Book/Book'

const App = () => {
  
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <NavBar setSidebar={setSidebar} />
      <Routes>
        <Route  path="/" element={<Home sidebar={sidebar} />} />
        <Route  path="/book/:categoryId/:bookId" element={<Book />} />
      </Routes>
    </div>
  )
}

export default App
