import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logoutRequest } from "../actions";
import { gravatar } from "../utils/gravatar";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import "../assets/styles/components/Header.scss";

const Header = props => {
  const { user, location } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header
      className={
        location.pathname === "/login" || location.pathname === "/register"
          ? "header header__login-register"
          : "header"
      }
    >
      <Link to="/">
        <img className="header__img" src={logo} alt="Shell Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="User Profile" />
          )}
          <p>Profile</p>
        </div>
        <ul>
          {hasUser ? (
            <>
              <li>
                <a href="/">{user.email}</a>
              </li>
              <li>
                <a href="#logout" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Sign in</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
