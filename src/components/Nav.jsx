import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar shadow-lg z-10 fixed bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Login Page</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal gap-5 px-1">
      <Link to='/'>Home</Link>
      <Link to='/signup'>Signup</Link>
      <Link to='signin'>Signin</Link>
      
    </ul>
  </div>
</div>
    );
};

export default Nav;