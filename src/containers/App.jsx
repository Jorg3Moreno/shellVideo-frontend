import React from "react";

import "../assets/styles/App.scss";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

const App = () => (
  <div className="app">
    <Header />
    <Search />

    <Categories title="My Favorites">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Categories title="Trends">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Categories title="Originals">
      <Carousel>
        <CarouselItem />
      </Carousel>
    </Categories>

    <Footer />
  </div>
);

export default App;
