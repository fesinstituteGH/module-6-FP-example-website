import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="logo-icon">🎬</span>
              <span className="brand-name">Cinesphere</span>
            </div>
            <p className="brand-description">
              The world's most comprehensive movie discovery engine. Find any
              film instantly with lightning-fast results and detailed
              information.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">
                🐦
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                📘
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                📷
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                📺
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Discover</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Popular Movies</a>
              </li>
              <li>
                <a href="#">New Releases</a>
              </li>
              <li>
                <a href="#">Top Rated</a>
              </li>
              <li>
                <a href="#">Coming Soon</a>
              </li>
              <li>
                <a href="#">Genres</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">API Documentation</a>
              </li>
              <li>
                <a href="#">Bug Reports</a>
              </li>
              <li>
                <a href="#">Feature Requests</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <div className="newsletter">
              <h3>Stay Updated</h3>
              <p>
                Get the latest movie updates and recommendations delivered to
                your inbox.
              </p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button
                  className="newsletter-btn"
                  onClick={(e) => e.preventDefault()}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © 2025 Cinesphere. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
