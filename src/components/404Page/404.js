import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-heading">404</h1>
      <p className="notfound-text">Oops! This page doesn’t exist.</p>
      <p className="notfound-subtext">Maybe you need a sip of coffee first ☕</p>
      <Link to="/" className="notfound-button">Back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
