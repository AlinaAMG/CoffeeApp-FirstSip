import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./DropboxUser.css";

function DropboxUser({ open: forceOpen = false }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);
  const isLoggedIn = !!localStorage.getItem("token");
  const toggleDropdownUser = () => setOpen((prev) => !prev);

  useEffect(() => {
    if (forceOpen) return;
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [forceOpen]);

  const handleLogOut = async () => {
    try {
      await axios.get("http://localhost:4001/api/auth/logout");

      localStorage.removeItem("token");
      localStorage.removeItem("username");
      window.dispatchEvent(new Event("storage"));
      navigate("/login");
    } catch (error) {
      alert(
        "Logout failed: " + (error.response?.data?.message || error.message)
      );
    }
  };
  console.log("Dropdown open:", open);

  const isDropdownVisible = forceOpen || open;
  return (
    <div className="dropdown" ref={dropdownRef}>
      {!forceOpen && (
        <button
          onClick={forceOpen ? undefined : toggleDropdownUser}
          className="dropdown-toggle"
        >
          <span className="login-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V22h19.2v-2.8c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </span>
        </button>
      )}

      {isDropdownVisible && (
        <ul className={`dropdown-menu ${forceOpen ? "open" : ""}`}>
          {isLoggedIn ? (
            <li>
              <button onClick={handleLogOut}>Logout</button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
}

export default DropboxUser;
