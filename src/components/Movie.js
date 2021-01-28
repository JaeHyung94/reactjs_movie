import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

const Movie = ({ id, year, title, summary, poster, genres }) => {
  return (
    <Link
      to={{
        pathname: "/Movie-detail",
        state: {
          year,
          title,
          summary,
          poster,
          genres
        }
      }}
    >
      <div className="movie">
        <div className="movie__pic">
          <img src={poster} alt={title} title={title}></img>
        </div>
        <div className="movie__data">
          <div className="movie__basic">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
          </div>
          <ul className="genres">
            {genres.map((genre, index) => {
              return (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          <p className="movie__summary">{summary.slice(0, 140)}...</p>
        </div>
      </div>
    </Link>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
