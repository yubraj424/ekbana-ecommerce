import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Aboutus from "../Aboutus";
import Home from "../Home";
import Products from "../Products"
import Contact from "../Contact";
import SingleProduct from "../SingleProduct";
import Cart from "../Cart";
import Header from "../components/header/Header"
import Subheader from "../components/Subheader/Subheader";
import Banner from "../components/Banner/Banner";

import Footer from "../components/footer/Footer";
import Newsletter from "../components/newsletter/Newsletter";
import Hotoffers from "../components/Hotoffers/Hotoffers";


const Routers = () => {
  return (
  <Router>
    <Header />
    <Subheader />
    <Banner />
    <Hotoffers/>
    
    <Routes>
      <Route path="/" element={<Home />} />
      < Route path="/about" element={<Aboutus />}  />
      < Route path="/products" element={<Products />}  />
      < Route path="/contact" element={<Contact />}  />
      < Route path="/singleproduct/:id" element={<SingleProduct />}  />
      < Route path="/cart.js" element={<Cart />}  />
    </Routes>
    <Newsletter/>
     <Footer/>
     
   
  </Router>
  );
};

export default Routers;
