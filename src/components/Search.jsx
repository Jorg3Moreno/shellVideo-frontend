import React from "react";

import "../assets/styles/components/Search.scss";

const Search = () => (
  <section className="main">
    <h2 className="main__title">What are you looking for?</h2>
    <input type="text" className="input" placeholder="Search..." />
  </section>
);

export default Search;
