import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ setSearchText, searchText }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function searchChange(event) {
    setSearchText(event.target.value);
  }

  function handleSearch() {
    if (searchText.trim()) {
      setIsLoading(true);
      setTimeout(() => {
        navigate("/search");
      }, 3000);
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="home-page">
      <div id="app">
        {/* Navbar */}
        <div className="navbar">
          <div className="navbar-background"></div>

          <div className="mobile-ver">
            <a href="/" className="logo">
              <img src="/logo.png" alt="cinesphere logo" />
            </a>
            <div className="links">
              <a className="link active" href="/">
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

          <div className="content-wrapper content-home">
            <h1>Discover Amazing Movies</h1>
            <div className="input-wrap">
              <input
                type="text"
                placeholder="Search by name and find the best movies..."
                value={searchText}
                onChange={searchChange}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
              />
              <button
                disabled={isLoading}
                onClick={handleSearch}
                className="search-wrapper"
              >
                {isLoading ? (
                  <div className="spinner"></div>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <main className="main-content">
            <div className="hero-section">
              <div className="hero-content">
                <h2 className="hero-section-title">
                  <span className="brand-highlight">Cinesphere</span> Movie
                  Discovery Engine
                </h2>
                <p className="hero-section-subtitle">
                  Instant movie search. Every film, every detail, lightning
                  fast.
                </p>
                <div className="feature-grid">
                  <div className="feature-card">
                    <div className="feature-icon">🔍</div>
                    <h3>Smart Search</h3>
                    <p>
                      Find any movie instantly with our powerful search engine
                    </p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">⭐</div>
                    <h3>Detailed Info</h3>
                    <p>Get comprehensive movie details, ratings, and reviews</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🚀</div>
                    <h3>Lightning Fast</h3>
                    <p>Results appear instantly as you type your search</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
