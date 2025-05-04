// src/Components/Home/Home.js
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import bagHero from "../Assets/Bg.png";
import bag2 from "../Assets/Ecoright_Tote_Bag.png";
import bag3 from "../Assets/Daisy_Black_Tote.png";
import bag4 from "../Assets/Coquette_Bow_Tote.png";
import bag5 from "../Assets/Mushrooms_Tote.png";
import bag6 from "../Assets/Corduroy_Tote.png";
import bag7 from "../Assets/Floral_Print_Tote.png";
import bag8 from "../Assets/Sea_View_Tote.png";
import bag9 from "../Assets/Canvas_Tote_Bag.png";

export default function Home() {
  const bags = [bag2, bag3, bag4, bag5, bag6, bag7, bag8, bag9];
  const bagNames = [
    "Ecoright Tote Bag",
    "Daisy Black Tote",
    "Coquette Bow Tote",
    "Mushrooms Tote",
    "Corduroy Tote",
    "Floral Print Tote",
    "Sea View Tote",
    "Canvas Tote Bag",
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center justify-content-between px-5 py-4">
        <div className="text-box">
          <h1>Designed by You,<br />Made for You.</h1>
          <p>A tote as unique as you—crafted from your vision, made just for you.</p>
          <Link to="/customize" className="btn btn-dark">Try it now!!!</Link>
        </div>
        <div className="image-box">
          <img src={bagHero} alt="Hero Bag" className="hero-img" />
        </div>
      </section>

      {/* Product Section */}
      <section className="products text-center mt-5 px-3">
        <h2 className="mb-4">All Bags Together</h2>
        <div className="container-home">
          <div className="row">
            {bags.map((img, index) => (
              <div className="col-6 col-md-3 mb-4" key={index}>
                <img src={img} alt={`Bag ${index + 1}`} className="img-fluid product-img" />
                <p className="bag-name">{bagNames[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light py-4 border-top">
  <div className="container-footer">
    <div className="row text-center text-md-start justify-content-between align-items-start">
      <div className="col-md-3 mb-3">
        <h6>Useful Links</h6>
        <ul className="list-unstyled">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/customize">Customize</Link></li>
        </ul>
      </div>

      <div className="col-md-5 mb-3">
        <h6>About Us</h6>
        <p className="mb-0">
          We are a team of passionate people who create unique bags with purpose and style.
          Each bag is crafted with love and care using sustainable practices.
        </p>
      </div>

      <div className="col-md-3 mb-3">
        <h6>Connect with us</h6>
        <p className="mb-1">Email: hello@bagify.com</p>
        <p className="mb-2">Contact: +91 XXX-XXX-XXXX</p>
        <div className="d-flex justify-content-center justify-content-md-start gap-2">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-envelope"></i>
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}
