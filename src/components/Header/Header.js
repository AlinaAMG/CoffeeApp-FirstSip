import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
 import DropboxUser from '../DropboxUser/DropboxUser';
import './Header.css';
import ThemeToggle from '../ToggleButtton/ToggleButton';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasFavorites, setHasFavorites] = useState(false);
  const [username, setUsername] = useState(
    localStorage.getItem('username') || null
  );
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [cartCount, setCartCount] = useState(
    parseInt(localStorage.getItem('cartCount')) || 0
  );

  useEffect(() => {
    const updateCartCount = () => {
      const count = parseInt(localStorage.getItem('cartCount')) || 0;
      setCartCount(count);
    };

    const handleFavoritesChange = () => {
      const storedFavorites =
        JSON.parse(localStorage.getItem('favorites')) || [];
      setHasFavorites(storedFavorites.length > 0);
    };

    const handleUserDataChange = () => {
      const storedName = localStorage.getItem('username');
      const storedToken = localStorage.getItem('token');
      setUsername(storedName);
      setToken(storedToken);
    };

    // Initial setup
    handleFavoritesChange();
    handleUserDataChange();
    updateCartCount();

    // Listen for updates
    window.addEventListener('storage', handleFavoritesChange);
    window.addEventListener('storage', handleUserDataChange);
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);
    window.addEventListener('favoritesUpdated', handleFavoritesChange);
  })

  
  const handleDropdownToggle = (menu) => {
    setIsDropdownOpen((prev) => (prev === menu ? null : menu));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  
  return (
    <nav>
      <div className="promo-bar">
        <p>
          Free shipping for orders over &#x20AC;39.99{' '}
          <i className="bi bi-truck"></i>
        </p>
      </div>
      <div className="logo">
        <Link to="/">
          First Sip <i className="bi bi-cup-hot-fill"></i>
        </Link>
      </div>
  
      {/* Hamburger Icon */}
      <button className="hamburger-icon" onClick={toggleMenu}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>
  
      {/* Menu */}
      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        {username?.trim() && token && (
          <span className="welcome-msg">Welcome, {username.trim()[0]}!</span>
        )}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
  
          <li>
            <button
              className="drop-down"
              onClick={() => handleDropdownToggle('shop')}
            >
              Shop
            </button>
            {isDropdownOpen === 'shop' && (
              <ul>
                <li>
                  <Link to="/shop/all-coffees">All Coffees</Link>
                </li>
  
                <li>
                  <Link to="/coffee-box">Coffee Box</Link>
                </li>
              </ul>
            )}
          </li>
  
          <li>
            <Link to="/our-origins">Our Origins</Link>
          </li>
          <li>
            <Link to="/quiz">Coffee Quiz</Link>
          </li>
          <li>
            <Link to="/reviews">Customer Stories</Link>
          </li>
          <li>
            <Link to="/blog">Coffee Blog</Link>
          </li>
          <li>
            <Link to="/about">Our Story</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
  
          <li>
            <Link to="/favorites">
              <span className="favorites-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={hasFavorites ? 'rgb(230, 207, 53)' : 'currentColor'}
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                {hasFavorites && (
                  <span className="favorites-count">★</span>
                )}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <span className="cart-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.16 14h9.19c.72 0 1.36-.38 1.72-.97l3.58-6.49a.996.996 0 00-.86-1.49H5.21L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 14.37 5.48 16 7.16 16z" />
                </svg>
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </span>
            </Link>
          </li>
  
         
          {/* User Dropdown */}
          <li className="menu-user-dropdown mobile-only">
            <button
              className="drop-down"
              onClick={() => handleDropdownToggle("user")}
            >
              <span className="login-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V22h19.2v-2.8c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </span>
            </button>
            {isDropdownOpen === "user" && (
              <div className="dropdown-wrapper">
                {/* If user is not logged in, show login/register options */}
                {!username && !token ? (
                  <div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                  </div>
                ) : (
                  // Display user profile or other logged-in content
                  <div>
                    <Link to="/profile">Profile</Link>
                    <Link to="/logout">Logout</Link>
                  </div>
                )}
              </div>
            )}
          </li>
        </ul>

        {/* Dropbox Container for Desktop */}
        <div className="dropbox-container desktop-only">
          <DropboxUser />
        </div>
      </div>
      
      <ThemeToggle />
    </nav>
  );
}

export default Header;
