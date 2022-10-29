import React from "react";
import './routers.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "../Aboutus";
import Home from "../Home";
import Product from "../components/Product/Product";
import Contact from "../Contact";
import SingleProduct from "../SingleProduct";

import Header from "../components/header/Header";
import Subheader from "../components/Subheader/Subheader";

import Footer from "../components/footer/Footer";

import Event from "../Event";
import Login from "../components/loginpageandsignup/Login";
import Service from "../Service";
import Privacy from "../components/privacy/Privacy";
import ShortCode from "../components/shortCode/ShortCode";
import Faq from "../components/faq/Faq";
import Frozen from "../components/Product/frozen/Frozen";
import Household from "../components/Product/household/Household";

import Kitchen from "../components/Product/kitchen/Kitchen";
import Vegetables from "../components/Product/vegetableandfruits/Vegetables";
import Pet from "../components/Product/petfood/Pet";
import Bread from "../components/Product/breadandbakery/Bread";
import Drinks from "../components/Product/drinks/Drinks";
import StickyNavbar from "../components/stickyNavbar/StickyNavbar";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Test from "../components/test/Test";
import Categories from "../components/category/Category";

const Routers = () => {
  return (
    <Router>
      <Header />
      <Subheader />
      <Breadcrumb />
      <div style={{backgroundColor:'red',width:'80%'}}>
        <StickyNavbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/events" element={<Event />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shortcode" element={<ShortCode />} />

        <Route path="/bread" element={<Bread />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/frozen" element={<Frozen />} />
        <Route path="/household" element={<Household />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/test" element={<Test />} />
        <Route path="/category" element={<Categories />} />
      </Routes>
<div className="footer-container">
<Footer />
</div>
     
    </Router>
  );
};

export default Routers;
