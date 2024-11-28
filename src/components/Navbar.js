import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './Navbar.css';

function Navbar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setSearchQuery('');
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Z-kart</Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li onClick={toggleMenu}><Link to="/">Home</Link></li>
          <li onClick={toggleMenu}><Link to="/products">Products</Link></li>
          <li onClick={toggleMenu}><Link to="/cart">Cart</Link></li>
          <li onClick={toggleMenu}><Link to="/login">Login</Link></li>
        </ul>
      </div>
      <form className="search-container" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </nav>
  );
}

export default Navbar;
