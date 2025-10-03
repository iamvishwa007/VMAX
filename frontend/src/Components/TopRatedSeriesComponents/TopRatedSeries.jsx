import React from 'react'
import './TopRatedSeries.css'
const TopRatedSeries = ({
    theme,
    topRated,
    setSelectedMovie
}) => {
   return (
   <div className={`trending-body ${theme}`}>
  <section className="trending-section">
    <h2 className="trending-title">Top Rated Series</h2>
    <div className="trending-container">
      {topRated.map((movie, idx) => (
        <div key={movie.id} className="trending-item">
          <div className="trending-number">{idx + 1}</div>
          <div className="trending-poster-container">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                  : 'https://img.icons8.com/ios/200/image--v1.png'
              }
              alt={movie.title}
              className="trending-poster"
              draggable="false"
              onClick={() => setSelectedMovie(movie)}
              title={movie.title}
            />
          </div>
        </div>
      ))}
    </div>
  </section>
</div>

  )
}

export default TopRatedSeries
