import React from "react";
import Cart from "../Cart";

const Navbar = () => {
  return (
    <div className="navigation__container">
      <nav className="navigation--desktop">
        <ul className="navigation__list">
          <li className="navigation__item--main">1</li>
          <li className="navigation__item--main">2</li>
          <li className="navigation__item--main">3</li>
        </ul>
      </nav>
      <Cart />
    </div>
  );
};

export default Navbar;
