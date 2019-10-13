import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

import "../assets/styles/components/Header.scss";

const Header = props => (
  <header className="header">
    <Link to="/">
      <img className="header__img" src={logo} alt="Shell Video" />
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>Profile</p>
      </div>
      <ul>
        <li>
          <a href="/">Account</a>
        </li>
        <li>
          <Link to="/login">Sign in</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
