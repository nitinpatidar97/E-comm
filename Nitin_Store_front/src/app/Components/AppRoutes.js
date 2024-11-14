import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from '../About';
import Cart from '../Cart';
import Contact from '../Contact';
import ErrorPage from '../ErrorPage';
import Home from '../Home';
import Products from '../Products';
import Profile from '../Profile';
import SingleProduct from '../SingleProduct';
import Footer from './Footer';
import Navbar from './Navbar'

const AppRoutes = () => {
    return (
        <>
            <Navbar />
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="products" element={<Products />} />
                <Route path="contact" element={<Contact />} />
                <Route path="Cart" element={<Cart />} />
                <Route path="singleProduct/:id" element={<SingleProduct />} />
                <Route path="profile" element={<Profile />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
            <Footer />
        </>
    )
}

export default AppRoutes