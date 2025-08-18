import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Search({ setSearchText, searchText }) {
  const [currentMovies, setCurrentMovies] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // HANDLING THE SEARCH
  function searchChange(event) {
    setSearchText(event.target.value);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    renderMovies(searchText);
  }, []);

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      renderMovies(searchText);
    }
  }

  // RENDERING MOVIES / CALLING API
  async function renderMovies(searchTerm) {
    if (!searchTerm.trim()) {
      setCurrentMovies([]);
      setSearchName("");
      setHasError(false);
      return;
    }

    setIsLoading(true);
    setHasError(false);

    try {
      const response = await fetch(
        `https://omdbapi.com/?s=${searchTerm}&apikey=c5882ffb`
      );
      const data = await response.json();
      // Check if API returned an error or no results
      if (data.Response === "False" || !data.Search) {
        setHasError(true);
        setCurrentMovies([]);
        setSearchName(searchTerm);
        setIsLoading(false);
        return;
      }

      setSearchName(searchTerm);
      setCurrentMovies(data.Search.slice(0, 6));
      setIsLoading(false);
    } catch (error) {
      // Handle network errors or other fetch issues
      setHasError(true);
      setCurrentMovies([]);
      setSearchName(searchTerm);
      setIsLoading(false);
    }
  }

  // SORTING MOVIES
  function sortChange(event) {
    const sortOption = event.target.value;

    let sortedMovies = [...currentMovies];

    if (sortOption === "newest") {
      sortedMovies.sort((a, b) => b.Year - a.Year);
    } else if (sortOption === "oldest") {
      sortedMovies.sort((a, b) => a.Year - b.Year);
    }

    setCurrentMovies(sortedMovies);
  }

  // RENDER MOVIES COMPONENT
  const renderMoviesContent = () => {
    if (isLoading) {
      return (
        <div className="movie__night--wrapper">
          <div className="movie__night--img">
            <span className="loading-img">⏳</span>
          </div>
          <p className="movie__night--title">
            <span style={{ color: "#4a9eff" }}>Loading...</span> Searching for
            movies
          </p>
          <p className="movie__night--subtitle">
            Please wait while we find your movies...
          </p>
        </div>
      );
    }

    if (hasError) {
      return (
        <div className="movie__night--wrapper">
          <div className="movie__night--img error-img">⚠️</div>
          <p className="movie__night--title">
            <span style={{ color: "#ff3232" }}>Oops!</span> Something went wrong
          </p>
          <p className="movie__night--subtitle">
            We couldn't find any movies matching your search...
          </p>
        </div>
      );
    }

    if (currentMovies.length > 0) {
      return (
        <>
          {currentMovies.map((movie, index) => (
            <div key={`${movie.imdbID}-${index}`} className="movie">
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "/placeholder-movie.png"
                }
                alt={movie.Title}
              />
              <h2>{movie.Title}</h2>
              <h4>{movie.Year}</h4>
              <Link to={`/details/${movie.imdbID}`}>
                <button>Learn More</button>
              </Link>
            </div>
          ))}
        </>
      );
    }

    return (
      <div className="movie__night--wrapper">
        <div className="movie__night--img">🎬</div>
        <p className="movie__night--title">
          <span>Cinesphere</span> Movie Discovery Engine
        </p>
        <p className="movie__night--subtitle">
          Instant movie search. Every film, every detail, lightning fast.
        </p>
      </div>
    );
  };
  return (
    <div>
      <div id="app">
        <div style={{ flex: 1 }}>
          <div className="navbar">
            <div className="mobile-ver">
              <a href="/" className="logo">
                <img src="/logo.png" alt="cinesphere logo" />
              </a>
              <div className="links">
                <a className="link" href="/">
                  Home
                </a>
                <a className="link" href="/search">
                  Find your Movie
                </a>
                <a className="btn-contact" href="">
                  Contact
                </a>
              </div>
            </div>

            <div className="content-wrapper">
              <h1>Discover Amazing Movies</h1>
              <div className="input-wrap">
                <input
                  type="text"
                  onKeyPress={handleKeyPress}
                  placeholder="Search by name and find the best movies..."
                  onChange={(event) => searchChange(event)}
                />
                <div
                  onClick={() => renderMovies(searchText)}
                  className="search-wrapper"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {(searchName || currentMovies.length > 0 || hasError) && (
            <div id="filter">
              <div>
                <h1 className="search-info">
                  <span className="black-txt">Search results:</span>
                  <span className="searchName"> {searchName}</span>
                </h1>
              </div>
              {currentMovies.length > 0 && (
                <div className="price-filter">
                  <select
                    name="movieSort"
                    id="movieSort"
                    onChange={(event) => sortChange(event)}
                    defaultValue=""
                  >
                    <option disabled value="">
                      Sort by year
                    </option>
                    <option value="newest">Newest to Oldest</option>
                    <option value="oldest">Oldest to Newest</option>
                  </select>
                </div>
              )}
            </div>
          )}

          <section className="search">
            <div className="movies">{renderMoviesContent()}</div>
          </section>
        </div>
      </div>
    </div>
  );
}
