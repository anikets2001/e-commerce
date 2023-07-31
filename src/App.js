import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Product from './Products';
import SingleProduct from './SingleProduct';
import ErrorPage from './ErrorPage';
import Cart from './Cart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/singleProduct/:id' element={<SingleProduct />} />
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
