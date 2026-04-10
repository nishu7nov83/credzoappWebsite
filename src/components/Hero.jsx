export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
        <div className="hero-blob blob-3"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available on Android &nbsp;&middot;&nbsp; iOS coming soon
        </div>
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
          <a href="#contact" className="btn btn-primary">Get Early Access</a>
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
