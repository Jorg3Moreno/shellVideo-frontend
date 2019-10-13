import React from "react";

import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import useInitialState from "../hooks/useInitialState";

import "../assets/styles/App.scss";

const API = "http://localhost:3000/initalState";

const Home = () => {
  const initialState = useInitialState(API);

  return (
    <>
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title="My Favorites">
          <Carousel>
            <Carousel>
              {initialState.mylist.map(item => (
                <CarouselItem key={item.id} {...item} />
              ))}
            </Carousel>
          </Carousel>
        </Categories>
      )}

      <Categories title="Trends">
        <Carousel>
          {initialState.trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originals">
        <Carousel>
          {initialState.originals.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

export default Home;
