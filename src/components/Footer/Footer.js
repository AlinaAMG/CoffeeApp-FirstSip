import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Links Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Subscription Section */}
        <div className="footer-subscribe">
          <h3>Subscribe for 10% Off</h3>
          <p>Get the latest news, offers, and coffee trends!</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Social Media Section (Follow Us) - Now on the right */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <Link to="https://facebook.com" >
                 <i className="bi bi-facebook"></i>
            </Link>
          
            <Link to="https://instagram.com" >
              <i className="bi bi-instagram"></i>
                      </Link>
                      
            <Link to="https://x.com" >
              <i className="bi bi-twitter-x"></i>
            </Link>
                      
            <Link to="https://youtube.com">
              <i className="bi bi-youtube"></i>
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} <Link to ="/" className="link"> FIRST SIP COFFEE.  <i className="bi bi-cup-hot-fill"></i> </Link> All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
