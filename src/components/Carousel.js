import React from 'react';
import './Carousel.css';
import banner1 from '../assets/images/banner1.png'; 
import banner2 from '../assets/images/banner2.png'; 
import product1 from '../assets/images/product1.png'; 
import Categories from './Categories';

function Carousel() {
  return (
    <div>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <ul className="carousel-indicators">
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
      </ul>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100" alt="Exclusive deals on electronics" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Exclusive Deals</h5>
            <p>Get up to 50% off on all electronics!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="Latest fashion trends" />
          <div className="carousel-caption d-none d-md-block">
            <h5>New Arrivals</h5>
            <p>Check out the latest fashion trends.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={product1} className="d-block w-100" alt="Featured product" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Featured Product</h5>
            <p>Discover our top-rated items!</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
    <Categories/>
    </div>
  );
}

export default Carousel;
