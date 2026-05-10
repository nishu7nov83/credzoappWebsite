import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { label: 'Features', href: isHome ? '#features' : '/#features' },
    { label: 'Pricing', href: isHome ? '#pricing' : '/#pricing' },
    { label: 'About', href: isHome ? '#about' : '/#about' },
  ];

  const contactHref = isHome ? '#contact' : '/#contact';

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-inner container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/CredzoLogo1.png" alt="Credzo Logo" className="logo-img" />
          <span className="logo-text">Credzo</span>
        </Link>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.href.startsWith('#') ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                <Link to={item.href}>{item.label}</Link>
              )}
            </li>
          ))}
          <li>
            {contactHref.startsWith('#') ? (
              <a href={contactHref} className="nav-cta">Contact Us</a>
            ) : (
              <Link to={contactHref} className="nav-cta">Contact Us</Link>
            )}
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.credzo.dailyexpense"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-play"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3.18 23.76c.37.2.8.22 1.2.04l12.76-7.37-2.88-2.88-11.08 10.21z" fill="#EA4335"/>
                <path d="M21.54 10.27c-.52-.29-4.62-2.67-6.4-3.7L12.26 9.4l3.66 3.66 5.62-3.24c.47-.27.52-.88 0-1.55z" fill="#FBBC04"/>
                <path d="M3.18.24C2.7.48 2.4.97 2.4 1.56v20.88c0 .59.3 1.08.78 1.32L14.34 12 3.18.24z" fill="#4285F4"/>
                <path d="M4.38.28L17.14 7.65l-2.88 2.88L3.18.24c.37-.2.8-.18 1.2.04z" fill="#34A853"/>
              </svg>
              Google Play
            </a>
          </li>
        </ul>
        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navItems.map((item) => (
          item.href.startsWith('#') ? (
            <a key={item.label} href={item.href} className="mobile-link" onClick={closeMenu}>
              {item.label}
            </a>
          ) : (
            <Link key={item.label} to={item.href} className="mobile-link" onClick={closeMenu}>
              {item.label}
            </Link>
          )
        ))}
        {contactHref.startsWith('#') ? (
          <a href={contactHref} className="mobile-link" onClick={closeMenu}>Contact Us</a>
        ) : (
          <Link to={contactHref} className="mobile-link" onClick={closeMenu}>Contact Us</Link>
        )}
        <a
          href="https://play.google.com/store/apps/details?id=com.credzo.dailyexpense"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-link mobile-play"
          onClick={closeMenu}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0 }}>
            <path d="M3.18 23.76c.37.2.8.22 1.2.04l12.76-7.37-2.88-2.88-11.08 10.21z" fill="#EA4335"/>
            <path d="M21.54 10.27c-.52-.29-4.62-2.67-6.4-3.7L12.26 9.4l3.66 3.66 5.62-3.24c.47-.27.52-.88 0-1.55z" fill="#FBBC04"/>
            <path d="M3.18.24C2.7.48 2.4.97 2.4 1.56v20.88c0 .59.3 1.08.78 1.32L14.34 12 3.18.24z" fill="#4285F4"/>
            <path d="M4.38.28L17.14 7.65l-2.88 2.88L3.18.24c.37-.2.8-.18 1.2.04z" fill="#34A853"/>
          </svg>
          Google Play
        </a>
      </div>
    </nav>
  );
}
