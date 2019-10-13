import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/Register.scss";

const Register = () => (
  <section class="register">
    <section class="register__container">
      <h2>Sign up</h2>
      <form class="register__container--form">
        <input class="register__input" type="text" placeholder="Nombre" />
        <input class="register__input" type="text" placeholder="Correo" />
        <input
          class="register__input"
          type="password"
          placeholder="Contraseña"
        />
        <button class="register__button">Sign up</button>
      </form>
      <Link to="/login">Sign in</Link>
    </section>
  </section>
);

export default Register;
