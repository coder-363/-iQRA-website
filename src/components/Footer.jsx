import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo footer-logo">
              <img src="/img/logoiqra 2.png" alt="IQRA Pioneers College Logo" className="logo-img" />
            </Link>
            <p className="footer-desc">Empowering the youth with quality education, modern skills, and unwavering ethical values to become the leaders of tomorrow.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/iqrapioneerscollege" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.tiktok.com/@iqrapioneerscollege" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
              <a href="https://www.instagram.com/iqrapioneers/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/life-at-campus">Life at Campus</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Programs</h3>
            <ul>
              <li><a href="#">FSc Pre-Medical</a></li>
              <li><a href="#">FSc Pre-Engineering</a></li>
              <li><a href="#">ICS</a></li>
              <li><a href="#">I.Com</a></li>
              <li><a href="#">FA</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li><i className="fas fa-location-dot"></i> Near Silver Star, Motorway Interchange Sialkot road Daska</li>
              <li><i className="fas fa-phone-alt"></i> 0312-7867770 (Admissions)</li>
              <li><i className="fas fa-phone-alt"></i> 0311-7867770 (Principal)</li>
              <li><i className="fas fa-envelope"></i> principal.ipc.dsk@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 IQRA Pioneers College. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
