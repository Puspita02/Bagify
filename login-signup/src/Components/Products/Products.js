import React from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

import corduroyTote from '../Assets/Corduroy_Tote.png';
import ecorightTote from '../Assets/Ecoright_Tote_Bag.png';
import daisyTote from '../Assets/Daisy_Black_Tote.png';
import coquetteTote from '../Assets/Coquette_Bow_Tote.png';
import mushroomsTote from '../Assets/Mushrooms_Tote.png';
import floralPrintTote from '../Assets/Floral_Print_Tote.png';
import seaViewTote from '../Assets/Sea_View_Tote.png';
import canvasTote from '../Assets/Canvas_Tote_Bag.png';

const products = [
  { id: 1, name: 'Corduroy Tote', price: '$25', image: corduroyTote },
  { id: 2, name: 'Ecoright Tote Bag', price: '$30', image: ecorightTote },
  { id: 3, name: 'Daisy Black Tote', price: '$20', image: daisyTote },
  { id: 4, name: 'Coquette Bow Tote', price: '$35', image: coquetteTote },
  { id: 5, name: 'Mushrooms Tote', price: '$22', image: mushroomsTote },
  { id: 6, name: 'Floral Print Tote', price: '$27', image: floralPrintTote },
  { id: 7, name: 'Sea View Tote', price: '$26', image: seaViewTote },
  { id: 8, name: 'Canvas Tote Bag', price: '$24', image: canvasTote },
];

const Products = () => {
  return (
    <div>
      {/* Product Grid */}
      <div className="container-products">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-3 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <img src={product.image} alt={product.name} className="card-img-top p-3 product-img" />
                <div className="card-body">
                  <h6 className="card-title">{product.name}</h6>
                  <p className="card-text">{product.price}</p>
                  <div className="d-grid gap-2">
                    <button className="btn btn-danger btn-sm">Add to Cart</button>
                    <button className="btn btn-outline-dark btn-sm">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light py-4 border-top">
        <div className="container-footer">
          <div className="row text-center text-md-start">
            <div className="col-md-3">
              <h6>Useful Links</h6>
              <ul className="list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/customize">Customize</Link></li>
              </ul>
            </div>
            <div className="col-md-5">
              <h6>About Us</h6>
              <p>We are a team of passionate people who create unique bags with purpose and style. Each bag is crafted with love and care using sustainable practices.</p>
            </div>
            <div className="col-md-4">
              <h6>Connect with us</h6>
              <p>Email: hello@bagify.com<br />Contact: +88 01XXX-XXXXXX</p>
              <div>
                <i className="bi bi-facebook me-2"></i>
                <i className="bi bi-instagram me-2"></i>
                <i className="bi bi-envelope"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;
