import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { loginRequest } from "../actions";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";
import "../assets/styles/Login.scss";

const Login = props => {
  const [formValues, setFormValues] = useState({
    email: ""
  });

  const handleInput = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(formValues);
    props.history.push("/");
  };

  return (
    <section className="login">
      <section className="login__container">
        <h2>Sign in</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            name="email"
            className="login__input"
            type="text"
            placeholder="Email"
            onChange={handleInput}
          />
          <input
            name="password"
            className="login__input"
            type="password"
            placeholder="Password"
            onChange={handleInput}
          />
          <button className="login__button">Sign in</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox" />
              remember me
            </label>
            <a href="/">Forgot my password</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} /> Sign in with Google
          </div>
          <div>
            <img src={twitterIcon} /> Sign in with Twitter
          </div>
        </section>
        <p className="login__container--register">
          Do not you have an account yet? <Link to="/register">Sign up</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
