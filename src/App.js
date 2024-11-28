import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";  
import SearchResults from "./components/SearchResults";    
import Login from "./components/Login";  
import Payment from "./components/Payment";
import "./App.css";

import product1 from '../src/assets/images/product1.png';
import product2 from '../src/assets/images/product2.png';
import banner1 from '../src/assets/images/banner1.png';

function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) =>{
    setCart(cart.filter((item) => item.id !== id));
  }
  const calculateTotal = ()=>{
    return cart.reduce((total,item) => total + item.price,0);
  }
  const products = [
    { id: 1, name: 'Smartphone', price: 499, image: product1 },
    { id: 2, name: 'Laptop', price: 999, image: product2 },
    { id: 3, name: 'Headphones', price: 199, image: banner1 },
    { id: 4, name: 'Gadgets', price: 199, image: banner1 },
    { id: 5, name: 'Air buds', price: 199, image: product1 },
    { id: 6, name: 'Digital watch', price: 199, image: banner1 },
    { id: 7, name: 'Tab', price: 199, image: product2 },
    { id: 8, name: 'Iphone', price: 199, image: banner1 },
    { id: 9, name: 'Smart Watch', price: 199, image: product2 },
  ];
  const App = () => {
    return (
      <FeaturedProducts
        products={products}
        addToCart={(product) => console.log('Added to cart:', product)}
      />
    );
  };
  const handleSearch = (query) => {
    console.log('Search query:', query);
    setSearchQuery(query);
  };

  return (
    <Router>
      <div>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/" 
            element={
              <>
                <Carousel />
                <FeaturedProducts products={products} addToCart={addToCart} />
              </>
            } 
          />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<FeaturedProducts addToCart={addToCart} />} />
          <Route 
            path="/cart" 
            element={<Cart cart={cart} removeFromCart={removeFromCart} />} 
          />
          <Route path="/product/:id" element={<ProductDetails products={products} addToCart={addToCart} />} /> 
          <Route
            path="/search"
            element={<SearchResults query={searchQuery} products={products} />}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={<Payment cart={cart} totalAmount={calculateTotal()} />}
          />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
