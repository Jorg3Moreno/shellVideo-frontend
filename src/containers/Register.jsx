import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { registerRequest } from "../actions";
import "../assets/styles/Register.scss";

const Register = props => {
  const [formValues, setFormValues] = useState({
    email: "",
    name: "",
    password: ""
  });

  const handleInput = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(formValues);
    props.history.push("/");
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2>Sign up</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            name="name"
            className="register__input"
            type="text"
            placeholder="Name"
            onChange={handleInput}
          />
          <input
            name="email"
            className="register__input"
            type="text"
            placeholder="Email"
            onChange={handleInput}
          />
          <input
            name="password"
            className="register__input"
            type="password"
            placeholder="Password"
            onChange={handleInput}
          />
          <button className="register__button">Sign up</button>
        </form>
        <Link to="/login">Sign in</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
