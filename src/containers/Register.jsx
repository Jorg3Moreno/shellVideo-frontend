import React from "react";

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
      <a href="">Sign in</a>
    </section>
  </section>
);

export default Register;
