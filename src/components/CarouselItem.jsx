import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { setFavorite, deleteFavorite } from "../actions";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import removeIcon from "../assets/static/remove-icon.png";
import favoriteIcon from "../assets/static/favorite.png";

import "../assets/styles/components/CarouselItem.scss";

const CarouselItem = props => {
  const {
    id,
    cover,
    title,
    year,
    contentRating,
    duration,
    isList,
    favorite
  } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
      favorite
    });
  };

  const handleDeleteFavorite = itemId => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={playIcon}
              alt="Play Icon"
            />
          </Link>
          {isList ? (
            <img
              className="carousel-item__details--img"
              src={removeIcon}
              alt="Delete Icon"
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : favorite ? (
            <img
              className="carousel-item__details--img"
              src={favoriteIcon}
              alt="Favorite Icon"
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Plus Icon"
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration} min.`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.prototype = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
};

export default connect(
  null,
  mapDispatchToProps
)(CarouselItem);
