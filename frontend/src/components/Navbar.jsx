// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { user, loading, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {loading ? (
        <span>Loading...</span>
      ) : user ? (
        <>
          <span>Welcome, {user.fullName}!</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
