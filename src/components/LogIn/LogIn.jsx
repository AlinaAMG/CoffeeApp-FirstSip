import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../RegisterPage/RegisterPage.css";

function LogIn({ onLogin }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      await onLogin(user);
      setUser({ email: "", password: "" });
    } catch (error) {
      alert(
        "Login failed: " + (error.response?.data?.message || error.message)
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <h2 className="register-title">LogIn</h2>
      <h3 className="register-sub-title">Welcome back</h3>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="register-input"
          value={user.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="register-input"
          value={user.password}
          onChange={handleChange}
          required
        />
        <Link to="/" className="forgot-link">
          Forgot password?{" "}
        </Link>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Logging in..." : "LogIn"}
        </button>
      </form>
    </div>
  );
}

export default LogIn;
