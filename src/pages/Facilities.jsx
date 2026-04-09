import { Link } from 'react-router-dom';

const facilityRows = [
  {
    subtitle: 'Academic Excellence',
    title: 'Science Labs',
    paragraphs: [
      'Our state-of-the-art science laboratories are fully equipped with modern apparatus used in Physics, Chemistry, and Biology experiments. Each lab is designed to foster inquiry-based learning and provide students with real-world, hands-on experience.',
      'With dedicated lab assistants and a well-stocked inventory of materials, students at IQRA Pioneers College are always prepared for board practicals and beyond.',
    ],
    imgSrc: '/img/Screenshot 2026-03-11 151534.png',
    imgAlt: 'Science Labs',
    reverse: false,
  },
  {
    subtitle: 'Digital Learning',
    title: 'Computer Labs',
    paragraphs: [
      'Our high-tech computer labs are equipped with the latest hardware and software, offering students access to high-speed internet, programming environments, and digital design tools essential for the modern age.',
      'Whether you are studying ICS, Pre-Engineering, or any other program, our computer labs ensure you build the digital skills necessary for today\'s competitive world.',
    ],
    imgSrc: '/img/Computer Labs.png',
    imgAlt: 'Computer Labs',
    reverse: true,
  },
  {
    subtitle: 'Knowledge Hub',
    title: 'Library',
    paragraphs: [
      'Our well-stocked library is a sanctuary of knowledge, housing an extensive collection of textbooks, reference books, journals, and digital resources covering all major academic subjects and disciplines.',
      'It provides a quiet, comfortable space for individual study, group discussions, and research — making it an indispensable resource for every student at IQRA Pioneers College.',
    ],
    imgSrc: '/img/Library.png',
    imgAlt: 'Library',
    reverse: false,
  },
  {
    subtitle: 'Spiritual Space',
    title: 'Prayer Area',
    paragraphs: [
      'We believe in nurturing the spiritual well-being of our students alongside their academic growth. Our campus features a dedicated mosque and prayer areas that provide a serene environment for Salah and personal reflection throughout the day.',
      'These spaces are designed to be peaceful and accessible to all students, helping them maintain their connection with faith while pursuing excellence.',
    ],
    imgSrc: '/img/Prayer Area.jpg',
    imgAlt: 'Prayer Area',
    reverse: true,
  },
];

export default function Facilities() {
  return (
    <>
      {/* HERO */}
      <section className="hero-redesign" id="campus-facilities-hero">
        <div className="hero-bg-slider">
          <div className="hero-slide active" style={{ backgroundImage: "url('/img/life.png')" }}></div>
          <div className="hero-dark-overlay"></div>
        </div>
        <div className="container hero-redesign-container">
          <div className="hero-redesign-content" data-aos="fade-up" data-aos-duration="400">
            <span className="hero-tag">🏢 Modern Amenities</span>
            <h1 className="hero-redesign-title">Campus Facilities</h1>
            <p className="hero-redesign-tagline">State-of-the-Art Environment for Excellence</p>
            <p className="hero-redesign-desc">IQRA Pioneers College is equipped with optimal facilities to support learning, research, and the holistic development of every student.</p>
            <div className="hero-redesign-btns">
              <Link to="/contact" className="btn-hero-primary"><i className="fas fa-building"></i> Experience Campus</Link>
              <Link to="/gallery" className="btn-hero-outline">View Gallery <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="hero-stats-line section">
        <div className="container">
          <div className="stats-line-grid">
            {[
              { icon: 'fa-flask', num: '5+', label: 'Modern Science Labs', delay: 100 },
              { icon: 'fa-desktop', num: '200+', label: 'High-Speed Computers', delay: 200 },
              { icon: 'fa-book', num: '10,000+', label: 'Books & Journals', delay: 300 },
            ].map(({ icon, num, label, delay }) => (
              <div className="stat-line-card" key={label} data-aos="fade-up" data-aos-delay={delay}>
                <div className="stat-line-icon"><i className={`fas ${icon}`}></i></div>
                <div className="stat-line-info"><h3>{num}</h3><p>{label}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITY ROWS */}
      <section className="side-feature-section section bg-white">
        <div className="container">
          {facilityRows.map(({ subtitle, title, paragraphs, imgSrc, imgAlt, reverse }) => (
            <div className="side-feature-row" key={title}>
              {reverse && (
                <div className="side-feature-image" data-aos="fade-right" data-aos-duration="400">
                  <div className="side-feature-img-wrapper"><img src={imgSrc} alt={imgAlt} loading="lazy" /></div>
                </div>
              )}
              <div className="side-feature-content" data-aos={reverse ? 'fade-left' : 'fade-right'} data-aos-duration="400" data-aos-delay={reverse ? 80 : 0}>
                <span className="section-subtitle">{subtitle}</span>
                <h2>{title}</h2>
                {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              {!reverse && (
                <div className="side-feature-image" data-aos="fade-left" data-aos-duration="400" data-aos-delay="80">
                  <div className="side-feature-img-wrapper"><img src={imgSrc} alt={imgAlt} loading="lazy" /></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
