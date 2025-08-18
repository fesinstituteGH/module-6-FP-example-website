import React from "react";
import { Link } from "react-router-dom";

export default function DetailsSkeleton() {
  // Skeleton component for reusable animated loading blocks
  const Skeleton = ({ width = "100%", height = "20px", className = "" }) => (
    <div className={`skeleton ${className}`} style={{ width, height }} />
  );

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
          {/* Movie Poster Skeleton */}
          <div className="poster-section">
            <div className="poster-sticky">
              <div className="poster-wrapper">
                <Skeleton height="400px" className="skeleton-poster" />
                <div></div>
              </div>

              {/* Action Buttons Skeleton */}
              <div className="action-buttons">
                <Skeleton height="48px" className="skeleton-btn-primary" />
                <Skeleton height="48px" className="skeleton-btn-secondary" />
              </div>
            </div>
          </div>

          {/* Movie Details Skeleton */}
          <div className="details-section">
            {/* Title and Basic Info Skeleton */}
            <div className="title-section">
              <Skeleton height="48px" width="70%" className="skeleton-title" />

              <div
                className="movie-meta"
                style={{ marginTop: "16px", marginBottom: "16px" }}
              >
                <Skeleton
                  width="60px"
                  height="24px"
                  className="skeleton-meta"
                />
                <span className="meta-separation-skeleton"></span>
                <Skeleton
                  width="40px"
                  height="24px"
                  className="skeleton-meta"
                />
                <span className="meta-separation-skeleton"></span>
                <Skeleton
                  width="80px"
                  height="24px"
                  className="skeleton-meta"
                />
              </div>

              {/* Genre Tags Skeleton */}
              <div className="genre-tags">
                <Skeleton
                  width="80px"
                  height="32px"
                  className="skeleton-genre"
                />
                <Skeleton
                  width="100px"
                  height="32px"
                  className="skeleton-genre"
                />
                <Skeleton
                  width="90px"
                  height="32px"
                  className="skeleton-genre"
                />
              </div>
            </div>

            {/* Ratings Section Skeleton */}
            <div className="ratings-section">
              <Skeleton
                height="28px"
                width="80px"
                className="skeleton-section-title"
              />
              <div className="ratings-grid" style={{ marginTop: "16px" }}>
                {[1, 2, 3].map((index) => (
                  <div key={index} className="rating-card skeleton-rating-card">
                    <Skeleton
                      width="24px"
                      height="24px"
                      className="skeleton-rating-icon"
                    />
                    <Skeleton
                      height="16px"
                      width="60px"
                      className="skeleton-rating-source"
                    />
                    <Skeleton
                      height="24px"
                      width="50px"
                      className="skeleton-rating-score"
                    />
                    {index === 1 && (
                      <Skeleton
                        height="14px"
                        width="80px"
                        className="skeleton-rating-votes"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Plot Section Skeleton */}
            <div className="plot-section">
              <Skeleton
                height="28px"
                width="60px"
                className="skeleton-section-title"
              />
              <div style={{ marginTop: "16px" }}>
                <Skeleton height="20px" width="100%" />
                <Skeleton
                  height="20px"
                  width="95%"
                  style={{ marginTop: "8px" }}
                />
                <Skeleton
                  height="20px"
                  width="88%"
                  style={{ marginTop: "8px" }}
                />
                <Skeleton
                  height="20px"
                  width="75%"
                  style={{ marginTop: "8px" }}
                />
              </div>
            </div>

            {/* Cast and Crew Skeleton */}
            <div className="cast-crew-section">
              <div className="crew-grid">
                <div className="crew-item">
                  <Skeleton
                    height="20px"
                    width="70px"
                    className="skeleton-crew-role"
                  />
                  <Skeleton
                    height="18px"
                    width="40%"
                    style={{ marginTop: "8px" }}
                  />
                </div>

                <div className="crew-item">
                  <Skeleton
                    height="20px"
                    width="60px"
                    className="skeleton-crew-role"
                  />
                  <Skeleton
                    height="18px"
                    width="40%"
                    style={{ marginTop: "8px" }}
                  />
                </div>

                <div className="crew-item">
                  <Skeleton
                    height="20px"
                    width="50px"
                    className="skeleton-crew-role"
                  />
                  <Skeleton
                    height="18px"
                    width="40%"
                    style={{ marginTop: "8px" }}
                  />
                </div>
              </div>
            </div>

            {/* Additional Info Skeleton */}
            <div className="additional-info">
              <div className="info-grid">
                {[
                  { label: "Language:", width: "60px" },
                  { label: "Released:", width: "90px" },
                  { label: "Box Office:", width: "80px" },
                  { label: "Production:", width: "85px" },
                  { label: "Awards:", width: "20%" },
                ].map((item, index) => (
                  <div key={index} className="info-item">
                    <Skeleton
                      height="18px"
                      width="80px"
                      className="skeleton-info-label"
                    />
                    <Skeleton
                      height="18px"
                      width={item.width}
                      style={{ marginTop: "4px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
