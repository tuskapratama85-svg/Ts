import { Link } from 'react-router-dom';

const links = [
  { name: 'Beranda', to: '/' },
  { name: 'Tentang Kami', to: '/about' },
  { name: 'Layanan', to: '/services' },
  { name: 'Portofolio', to: '/portfolio' },
  { name: 'Kontak', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="brand-mark">ND</span>
          <span className="brand-name">Nusa<span className="brand-accent">Digital</span></span>
          <p className="footer-tagline">
            Solusi digital terpercaya untuk pertumbuhan bisnis Anda.
          </p>
        </div>

        <nav className="footer-nav">
          <h3 className="footer-title">Menu</h3>
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <Link to={link.to}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-contact">
          <h3 className="footer-title">Kontak Kami</h3>
          <ul>
            <li>Jl. Contoh Raya No. 123, Jakarta</li>
            <li>hello@nusadigital.co.id</li>
            <li>+62 812-3456-7890</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nusa Digital. Hak cipta dilindungi.</p>
      </div>
    </footer>
  );
}
