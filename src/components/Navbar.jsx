import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  // { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  {
    label: 'Life at Campus',
    dropdown: [
      { to: '/life-at-campus', label: 'For Boys' },
      { to: '/life-at-campus/for-girls', label: 'For Girls' },
    ],
  },
  { to: '/facilities', label: 'Facilities' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    document.body.style.overflow = 'auto';
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : 'auto';
  };

  const isLifeAtCampusActive =
    location.pathname === '/life-at-campus' ||
    location.pathname === '/life-at-campus/for-girls';

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="/img/log1.png" alt="IQRA Pioneers College Logo" className="logo-img" />
        </Link>
        <nav className={`nav-menu${menuOpen ? ' active' : ''}`} id="nav-menu">
          <ul className="nav-list">
            {navLinks.map((item) => {
              if (item.dropdown) {
                return (
                  <li key={item.label} className="nav-item-dropdown" ref={dropdownRef}>
                    <button
                      className={`nav-link nav-dropdown-toggle${isLifeAtCampusActive ? ' active' : ''}${dropdownOpen ? ' open' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdownOpen((prev) => !prev);
                      }}
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen}
                      id="life-at-campus-dropdown-btn"
                    >
                      <span className="nav-link-text">{item.label}</span>
                      <i className={`fas fa-chevron-down nav-chevron${dropdownOpen ? ' rotated' : ''}`} style={{ marginLeft: '8px', fontSize: '0.8rem' }}></i>
                    </button>
                    <div className={`nav-dropdown-menu${dropdownOpen ? ' open' : ''}`} id="life-at-campus-dropdown">
                      {item.dropdown.map(({ to, label, icon }) => (
                        <Link
                          key={to}
                          to={to}
                          className={`nav-dropdown-item${location.pathname === to ? ' active' : ''}`}
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </li>
                );
              }
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`nav-link${location.pathname === item.to ? ' active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="nav-actions">
          <Link to="/contact#contact-form" className="nav-link apply-btn">Apply Now</Link>
          <div className="mobile-toggle" id="mobile-toggle" onClick={toggleMenu}>
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
          </div>
        </div>
      </div>
    </header>
  );
}
