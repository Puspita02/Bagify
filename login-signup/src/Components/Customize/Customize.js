import React, { useState } from 'react';
import './Customize.css';
import { Link } from 'react-router-dom';

import cottonCanvasTote from '../Assets/Cotton_Canvas_Tote_Bag.png'; // Updated image
import capacityTote from '../Assets/Capacity_Casual_Shoulder_Tote_Bag.png';
import denimTote from '../Assets/Heavy_Cotton_Denim_Tote_Bag.png';
import kadiTote from '../Assets/KADI_Women_Corduroy_Tote_Bag.png'; // Unused now, but kept for related items

const Customize = () => {
  // States for color and text input
  const [selectedColor, setSelectedColor] = useState('');
  const [textInput, setTextInput] = useState('');

  // Handle color change
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  // Handle text input change
  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <div className='container customize-page'>
      <div className='customize-header'>
        <h4>Customize Your Thought</h4>
        <div className="underline-c"></div>
      </div>

      <div className="customize-body row gx-5">
        {/* Left Side: Customization Panel */}
        <div className="col-md-6 mb-4">
          <div className="custom-options d-flex flex-wrap gap-3 mb-4">
            <button className="btn btn-outline-secondary">Color</button>
            <button className="btn btn-outline-secondary">Text</button>
            <button className="btn btn-outline-secondary">Icon</button>
            <button className="btn btn-outline-secondary">Sticker</button>
          </div>

          <div className="custom-preview text-center">
            <img 
              src={cottonCanvasTote}  
              alt="Custom Bag Preview" 
              className="img-fluid bag-img" 
              style={{ borderColor: selectedColor }}
            />
            <div className="color-options d-flex justify-content-center gap-2 mt-3">
              <div 
                className="color-swatch bg-primary" 
                onClick={() => handleColorChange('blue')} 
                title="Blue"
              ></div>
              <div 
                className="color-swatch bg-danger" 
                onClick={() => handleColorChange('red')} 
                title="Red"
              ></div>
              <div 
                className="color-swatch bg-dark" 
                onClick={() => handleColorChange('dark')} 
                title="Dark"
              ></div>
            </div>
            {/* Text overlay */}
            {textInput && (
              <div className="text-overlay">
                <p>{textInput}</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Info and CTA */}
        <div className="col-md-6">
          <div className="custom-detail shadow-sm p-4 rounded bg-light h-100 d-flex flex-column justify-content-between">
            <div>
              <h5>Product Details</h5>
              <p className="mb-2">Eco Cotton Tote Bag</p>
              <p className="text-muted mb-3">Customize your design with stickers, colors, and icons!</p>
              <p className="fw-bold">$5 - $55</p>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-danger">Add to Cart</button>
              <button className="btn btn-outline-dark">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Text Input for the bag */}
      <div className="text-input-section mt-4 text-center">
        <input
          type="text"
          placeholder="Enter text for your bag"
          className="form-control text-center"
          value={textInput}
          onChange={handleTextChange}
        />
      </div>

      {/* Related Bags Section */}
      <div className="related-bags mt-5">
        <h5>Products related to this item</h5>
        <div className="row">
          {[{
            name: 'KADI Corduroy Tote',
            image: kadiTote,
            price: '$25'
          }, {
            name: 'Capacity Shoulder Tote',
            image: capacityTote,
            price: '$30'
          }, {
            name: '100% Cotton Canvas Tote',
            image: cottonCanvasTote,
            price: '$22'
          }, {
            name: 'Heavy Cotton Denim Tote',
            image: denimTote,
            price: '$28'
          }].map((item, idx) => (
            <div key={idx} className="col-6 col-md-3 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <img src={item.image} className="card-img-top p-3" alt={item.name} />
                <div className="card-body">
                  <p className="card-title small">{item.name}</p>
                  <p className="card-text">{item.price}</p>
                  <div className="d-grid gap-2 mt-3">
                    <button className="btn btn-danger">Add to Cart</button>
                    <button className="btn btn-outline-dark">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light py-4 border-top mt-5">
        <div className="container-footer-c">
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
              <p>Email: hello@bagify.com<br />Contact: +91 XXX-XXX-XXXX</p>
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

export default Customize;
