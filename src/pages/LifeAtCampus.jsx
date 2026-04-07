import { Link } from 'react-router-dom';

const features = [
  {
    subtitle: 'Active Lifestyle',
    title: 'Sports & Athletics',
    paragraphs: [
      'At IQRA Pioneers College, we believe in nurturing both mind and body. Our students participate in a variety of inter-college sports tournaments, daily fitness activities, and team-building athletic challenges designed to promote physical well-being.',
      'With dedicated coaches and well-maintained sports facilities, every student gets the opportunity to discover and excel in their athletic passion — whether it\'s cricket, football, badminton, or athletics.',
    ],
    imgSrc: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    imgAlt: 'Sports & Athletics',
    reverse: false,
  },
  {
    subtitle: 'Student Community',
    title: 'Clubs & Societies',
    paragraphs: [
      'Our campus is home to a vibrant network of student-led clubs and societies that cater to a wide range of interests — from debating, literature, and arts to technology, science, and entrepreneurship.',
      'Joining a club is an excellent way to discover new passions, make lasting friendships, develop leadership skills, and grow beyond the boundaries of a traditional classroom environment.',
    ],
    imgSrc: '/img/47.jpg',
    imgAlt: 'Clubs & Societies',
    reverse: true,
  },
  {
    subtitle: 'College Celebrations',
    title: 'Events & Festivals',
    paragraphs: [
      'Life at IQRA Pioneers College is full of energy and celebration. Throughout the year, we host a rich calendar of cultural events, academic festivals, talent shows, and annual gatherings that showcase the incredible diversity and talent of our student body.',
      'These events are more than just entertainment — they are opportunities to build confidence, celebrate achievements, and create lifelong memories with fellow students and faculty.',
    ],
    imgSrc: '/img/50.jpg',
    imgAlt: 'Events & Festivals',
    reverse: false,
  },
];

export default function LifeAtCampus() {
  return (
    <>
      {/* HERO */}
      <section className="hero-redesign" id="campus-life-hero">
        <div className="hero-bg-slider">
          <div className="hero-slide active" style={{ backgroundImage: "url('/img/52.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="hero-dark-overlay"></div>
        </div>
        <div className="container hero-redesign-container">
          <div className="hero-redesign-content" data-aos="fade-up" data-aos-duration="900">
            <span className="hero-tag">🎓 Life at Campus — For Boys</span>
            <h1 className="hero-redesign-title">Life at Boys' Campus</h1>
            <p className="hero-redesign-tagline">Excellence in Every Field</p>
            <p className="hero-redesign-desc">Explore the diverse activities, clubs, and events that make life at IQRA Pioneers College an unforgettable journey of personal growth.</p>
            <div className="hero-redesign-btns">
              <Link to="/contact" className="btn-hero-primary"><i className="fas fa-user-graduate"></i> Join Us Now</Link>
              <Link to="/gallery" className="btn-hero-outline">View Gallery <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="about-intro section bg-white">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <span className="section-subtitle">Vibrant &amp; Focused</span>
            <h2 className="section-title">Life at Campus — For Boys</h2>
            <div className="about-text-content mt-4">
              <p>At IQRA Pioneers College, student life extends well beyond the classroom. We offer a vibrant campus environment designed to foster personal growth, encourage teamwork, and build lasting friendships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE ROWS */}
      <section className="side-feature-section bg-white">
        <div className="container">
          {features.map(({ subtitle, title, paragraphs, imgSrc, imgAlt, reverse }) => (
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
