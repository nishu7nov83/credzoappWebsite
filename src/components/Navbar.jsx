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
      </div>
    </nav>
  );
}
