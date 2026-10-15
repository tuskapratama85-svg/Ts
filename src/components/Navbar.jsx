import { useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
  { name: 'Beranda', to: '/' },
  { name: 'Tentang Kami', to: '/about' },
  { name: 'Layanan', to: '/services' },
  { name: 'Portofolio', to: '/portfolio' },
  { name: 'Kontak', to: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" aria-label="Beranda">
          <span className="brand-mark">ND</span>
          <span className="brand-name">Nusa<span className="brand-accent">Digital</span></span>
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <div
          className={`navbar-menu ${isOpen ? 'navbar-menu--open' : ''}`}
        >
          <ul className="navbar-list">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="navbar-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="btn btn-primary">
                Kontak Kami
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
