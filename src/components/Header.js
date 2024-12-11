import React from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContex";
import { useSelector } from "react-redux";
import cartLogo from "../utils/images/shopping-cart.png";
import foodLogo from "../../images/foodninja.png";
const Header = () => {
  let user = useContext(UserContext);

  let items = useSelector((store) => {
    //console.log(store);
    // store will be an object that looks like this- basically main objects will be the slices u added in the store and nested keys will be the initial state of each slice
    // {
    //   cart: {
    //     items: [];
    //     totalPrice: 0;
    //   }
    // }
    return store.cart.items;
  });

  //console.log(items);

  function getTotalItems() {
    let totalItems = 0;
    items.forEach((item, index) => {
      totalItems += item.qtyToAdd;
    });
    return totalItems;
  }
  return (
    <div className="header">
      <div className="logo-container">
        <img src={foodLogo} />
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-link home">
            <button className="header-btn">
              <Link to="/">Home</Link>
            </button>
          </li>
          {/* <li className="nav-link about">
            <Link to="/about">About</Link>
          </li> */}
          <li className="nav-link about">
            <button className="header-btn">
              <Link to="/about">About</Link>
            </button>
          </li>
          <li className="nav-link contact">
            <button className="header-btn">
              <Link to="/contact">Contact</Link>
            </button>
          </li>
          <li className="nav-link cart">
            <Link to="/cart">
              {" "}
              <img src={cartLogo} className="cart-logo"></img>{" "}
              <span>{getTotalItems() ? getTotalItems() : ""}</span>
            </Link>
          </li>
          <li className="nav-link loggedin-user">{user.loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
