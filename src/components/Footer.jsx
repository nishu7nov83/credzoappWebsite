import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <img src="/CredzoLogo1.png" alt="Credzo Logo" className="logo-img" />
            <span className="logo-text" style={{ color: '#fff' }}>Credzo</span>
          </Link>
          <p className="footer-tagline">Track your spending, every day.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Product</h4>
            <Link to="/#features">Features</Link>
            <Link to="/#pricing">Pricing</Link>
            <Link to="/#about">How It Works</Link>
          </div>
          <div className="footer-col">
            <h4>Plans</h4>
            <Link to="/#pricing">Starter — Free</Link>
            <Link to="/#pricing">Pro — ₹250/quarter</Link>
            <Link to="/#pricing">Elite — ₹500/quarter</Link>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/account-deletion">Account Deletion</Link>
            <a href="mailto:support@credzoapp.com">support@credzoapp.com</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; 2026 Credzo. All rights reserved.</p>
        <p>Built with ❤️ in India</p>
      </div>
    </footer>
  );
}
