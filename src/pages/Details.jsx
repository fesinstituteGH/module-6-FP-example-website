import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SiMetacritic } from "react-icons/si";
import { SiRottentomatoes } from "react-icons/si";
import DetailsSkeleton from "../components/DetailsSkeleton";

export default function MovieDetails() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    getMovieInfo();
  }, []);

  async function getMovieInfo() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://omdbapi.com/?i=${imdbID}&apikey=c5882ffb`
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    } finally {
      setLoading(false);
    }
  }

  const getRatingColor = (rating) => {
    const score = parseFloat(rating);
    if (score >= 8) return "rating-excellent";
    if (score >= 6) return "rating-good";
    return "rating-poor";
  };

  // Skeleton Loading State
  if (loading) {
    return <DetailsSkeleton />;
  }

  return (
    <div className="details-page">
      {/* Header with back button */}
      <div className="details-header">
        <div className="header-container">
          <Link style={{ textDecoration: "none" }} to="/search">
            <button className="back-nav">
              <svg
                className="back-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back to Search</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="details-container">
        {/* Main Movie Info Section */}
        <div className="movie-layout">
          {/* Movie Poster */}
          <div className="poster-section">
            <div className="poster-sticky">
              <div className="poster-wrapper">
                <img
                  src={movie.Poster}
                  alt="Oppenheimer"
                  className="poster-image"
                />
                <div className="poster-overlay"></div>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button className="btn-primary">
                  <span className="btn-content">
                    <span>▶</span>
                    <span>Watch Trailer</span>
                  </span>
                </button>
                <button className="btn-secondary">+ Add to Watchlist</button>
              </div>
            </div>
          </div>

          {/* Movie Details */}
          <div className="details-section">
            {/* Title and Basic Info */}
            <div className="title-section">
              <h1 className="movie-title">{movie.Title}</h1>

              <div className="movie-meta">
                <span className="meta-tag">{movie.Year}</span>
                <span className="meta-separation"></span>
                <span className="meta-tag">{movie.Rated}</span>
                <span className="meta-separation"></span>

                <span className="meta-tag">{movie.Runtime}</span>
              </div>

              {/* Genre Tags */}
              <div className="genre-tags">
                {movie.Genre?.split(",").map((word, index) => (
                  <span key={index} className="genre-tag">
                    {word.trim()}
                  </span>
                ))}
              </div>
            </div>

            {/* Ratings Section */}
            <div className="ratings-section">
              <h3 className="section-title">Ratings</h3>
              <div className="ratings-grid">
                {movie.Ratings?.map((rating, index) => {
                  // Shorten "Internet Movie Database" -> "IMDb"
                  const source =
                    rating.Source === "Internet Movie Database"
                      ? "IMDb"
                      : rating.Source;

                  return (
                    <div key={index} className="rating-card">
                      {source === "Metacritic" && (
                        <span className="rating-icon">
                          <SiMetacritic />
                        </span>
                      )}
                      {source === "Rotten Tomatoes" && (
                        <span className="rating-icon">
                          <SiRottentomatoes />
                        </span>
                      )}
                      <div className="rating-source">{source}</div>
                      <div
                        className={`rating-score ${
                          source === "IMDb"
                            ? getRatingColor(movie.imdbRating)
                            : ""
                        }`}
                      >
                        {rating.Value}
                      </div>

                      {/* If this is IMDb, show votes below */}
                      {source === "IMDb" && movie.imdbVotes && (
                        <div className="rating-votes">
                          {movie.imdbVotes} votes
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Plot Section */}
            <div className="plot-section">
              <h3 className="section-title">Plot</h3>
              <p className="plot-text">{movie.Plot}</p>
            </div>

            {/* Cast and Crew */}
            <div className="cast-crew-section">
              <div className="crew-grid">
                <div className="crew-item">
                  <h4 className="crew-role">Director</h4>
                  <p className="crew-names">{movie.Director}</p>
                </div>

                <div className="crew-item">
                  <h4 className="crew-role">Writers</h4>
                  <p className="crew-names">{movie.Writer}</p>
                </div>

                <div className="crew-item">
                  <h4 className="crew-role">Stars</h4>
                  <p className="crew-names">{movie.Actors}</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="additional-info">
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Language:</span>

                  <span className="info-value">
                    {movie.Language?.split(",")[0]}
                  </span>
                </div>

                <div className="info-item">
                  <span className="info-label">Released:</span>
                  <span className="info-value">{movie.Released}</span>
                </div>

                <div className="info-item">
                  <span className="info-label">Box Office:</span>
                  <span className="info-value">{movie.BoxOffice}</span>
                </div>

                <div className="info-item">
                  <span className="info-label">Production:</span>
                  <span className="info-value">{movie.Production}</span>
                </div>

                <div className="info-item awards">
                  <span className="info-label">Awards:</span>
                  <span className="info-value">{movie.Awards}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
