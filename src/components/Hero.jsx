export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
        <div className="hero-blob blob-3"></div>
      </div>
      <div className="container hero-content">
        <a
          href="https://play.google.com/store/apps/details?id=com.credzo.dailyexpense"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-badge hero-badge-link"
        >
          <span className="badge-dot"></span>
          Available on Android &nbsp;&middot;&nbsp; iOS coming soon
        </a>
        <h1 className="hero-title">
          Take Control of <br />
          <span className="gradient-text">Every Swipe</span> on Your Card
        </h1>
        <p className="hero-subtitle">
          Credzo tracks every card transaction, keeps your budgets in check, and
          gives you real-time visibility into your spending — so no swipe ever
          catches you off guard.
        </p>
        <div className="hero-actions">
          <a
            href="https://play.google.com/store/apps/details?id=com.credzo.dailyexpense"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-playstore"
          >
            <svg className="playstore-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3.18 23.76c.37.2.8.22 1.2.04l12.76-7.37-2.88-2.88-11.08 10.21z" fill="#EA4335"/>
              <path d="M21.54 10.27c-.52-.29-4.62-2.67-6.4-3.7L12.26 9.4l3.66 3.66 5.62-3.24c.47-.27.52-.88 0-1.55z" fill="#FBBC04"/>
              <path d="M3.18.24C2.7.48 2.4.97 2.4 1.56v20.88c0 .59.3 1.08.78 1.32L14.34 12 3.18.24z" fill="#4285F4"/>
              <path d="M4.38.28L17.14 7.65l-2.88 2.88L3.18.24c.37-.2.8-.18 1.2.04z" fill="#34A853"/>
            </svg>
            <span className="playstore-text">
              <span className="playstore-label">Get it on</span>
              <span className="playstore-name">Google Play</span>
            </span>
          </a>
          <a href="#features" className="btn btn-ghost">Explore Features</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">11+</span>
            <span className="stat-label">Expense Categories</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">AI</span>
            <span className="stat-label">Powered Insights</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">4</span>
            <span className="stat-label">Languages &amp; Currencies</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Private &amp; Secure</span>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
}
