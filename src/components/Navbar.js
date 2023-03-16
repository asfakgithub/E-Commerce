// import { ShoppingCart } from 'phosphor-react';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import "./navbar.css";


export class navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="links">
          <Link to="/"> Shop </Link>
          <Link to="/cart">
            <FaShoppingCart size={22}/>
          </Link>
        </div>
      </div>
    )
  }
}

export default navbar
