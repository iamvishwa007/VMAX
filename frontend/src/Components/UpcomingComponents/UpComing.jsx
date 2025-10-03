import React, { useEffect, useState } from "react";
import './UpComing.css'

const UpComing = ({theme,upMovies,setSelectedMovie,}) => {
  return (
    <section className={`upcoming-movies ${theme}`}>
      <h2 className="upcoming-movies__title">Upcoming Movies</h2>
      <div className="upcoming-movies__grid">
        {upMovies.map((movie) => (
          <div key={movie.id} className="upcoming-movies__card" >
            {movie.poster_path ? (
              <img
                className="upcoming-movies__poster"
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                onClick={() => setSelectedMovie(movie)}
              />
            ) : (
              <div className="upcoming-movies__poster-placeholder">
                No Image
              </div>
            )}
            <div className="upcoming-movies__info">
              <h3 className="upcoming-movies__name">{movie.title}</h3>
              <p className="upcoming-movies__date">
                {movie.release_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpComing;
