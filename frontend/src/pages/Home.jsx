import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>🛒 Welcome To Shiva Store</h1>

          <p>
            Fresh Groceries, Fruits, Vegetables and Daily Essentials
            delivered to your doorstep at the best prices.
          </p>

          <div className="hero-buttons">
            <Link to="/products">
              <button className="hero-btn">
                Shop Now
              </button>
            </Link>

            <button className="hero-btn-outline">
              Download App
            </button>
          </div>
        </div>
      </section>

      {/* Today's Offers */}
      <section className="offer-section">
        <h2>🔥 Today's Special Offers</h2>

        <div className="offer-grid">
          <div className="offer-card">
            <h3>50% OFF</h3>
            <p>Fresh Vegetables</p>
          </div>

          <div className="offer-card">
            <h3>Buy 1 Get 1</h3>
            <p>Biscuits & Snacks</p>
          </div>

          <div className="offer-card">
            <h3>30% OFF</h3>
            <p>Dairy Products</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features">
        <h2>Why Choose Shiva Store?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            🚚
            <h3>Fast Delivery</h3>
            <p>Delivery within 30 minutes.</p>
          </div>

          <div className="feature-card">
            🥬
            <h3>Fresh Products</h3>
            <p>Directly sourced from farms.</p>
          </div>

          <div className="feature-card">
            💰
            <h3>Best Prices</h3>
            <p>Affordable prices every day.</p>
          </div>

          <div className="feature-card">
            🔒
            <h3>Secure Payments</h3>
            <p>100% safe transactions.</p>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="app-section">
        <div>
          <h2>📱 Download Shiva Store App</h2>

          <p>
            Order groceries anytime, anywhere.
            Get exclusive app-only discounts.
          </p>

          <button className="download-btn">
            Download Now
          </button>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="review-section">
        <h2>⭐ Customer Reviews</h2>

        <div className="review-grid">
          <div className="review-card">
            <h3>Rahul</h3>
            <p>
              Excellent delivery and fresh products.
              Highly recommended.
            </p>
          </div>

          <div className="review-card">
            <h3>Priya</h3>
            <p>
              Great offers and very easy ordering
              experience.
            </p>
          </div>

          <div className="review-card">
            <h3>Amit</h3>
            <p>
              Best grocery store website I have used.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about-section">
        <h2>About Shiva Store</h2>

        <p>
          Shiva Store is a modern online grocery
          platform providing fresh groceries,
          vegetables, fruits, beverages, household
          products and daily essentials at affordable
          prices with quick delivery.
        </p>
      </section>
    </>
  );
}

export default Home;