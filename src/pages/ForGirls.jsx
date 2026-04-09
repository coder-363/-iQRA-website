import { Link } from 'react-router-dom';

const features = [
  {
    icon: '📚',
    subtitle: 'Academic Excellence',
    title: 'Girls Leadership & Scholastic Programs',
    paragraphs: [
      'At IQRA Pioneers College, our girls are empowered to lead from the front. We offer dedicated academic support programs, mentorship sessions with accomplished women professionals, and a student council that champions the voices of female students across all disciplines.',
      'From science olympiads to literary competitions and debate championships, our female students consistently achieve top results — proving that excellence knows no boundaries.',
    ],
  },
  {
    icon: '🎭',
    subtitle: 'Creative Expression',
    title: 'Arts, Culture & Societies',
    paragraphs: [
      'Our campus nurtures creativity through a vibrant network of girls\' societies dedicated to literature, fine arts, calligraphy, drama, and cultural heritage. These clubs provide a safe, inspiring environment where every girl discovers her unique voice and passion.',
      'Annual exhibitions, literary galas, art showcases, and theatre performances give our students a platform to shine and develop confidence that extends well beyond the classroom.',
    ],
  },
  {
    icon: '🏃‍♀️',
    subtitle: 'Active & Healthy Living',
    title: 'Sports & Fitness for Girls',
    paragraphs: [
      'Physical well-being is a top priority for every student at IQRA Pioneers College. Our girls enjoy access to dedicated sports facilities including badminton courts, table tennis, aerobics sessions, and inter-college sports competitions designed exclusively for female athletes.',
      'With qualified female coaches and a supportive environment, every girl is encouraged to embrace an active lifestyle, build teamwork skills, and take pride in her physical health and sporting achievements.',
    ],
  },
  {
    icon: '🛡️',
    subtitle: 'Safe & Supportive Environment',
    title: 'Girls\' Campus Welfare & Support',
    paragraphs: [
      'We take immense pride in maintaining a safe, respectful, and nurturing campus atmosphere. Our dedicated girls\' welfare office provides counselling services, academic guidance, and personal development workshops to ensure every student thrives both academically and personally.',
      'Our trained female faculty and staff ensure that every concern is heard and every student feels valued, supported, and at home within the IQRA Pioneers College community.',
    ],
  },
];

const highlights = [
  { icon: '🎓', label: 'Top Academic Results', desc: 'Girls consistently rank among the top performers in board examinations.' },
  { icon: '🌸', label: 'Safe Campus Environment', desc: 'Dedicated female staff ensure a secure and welcoming atmosphere.' },
  { icon: '🏆', label: 'Inter-College Champions', desc: 'Our girls excel in sports, debates, and cultural competitions.' },
  { icon: '🎨', label: 'Creative Societies', desc: 'Art, literature, drama and more — a platform for every talent.' },
];

export default function ForGirls() {
  return (
    <>
      {/* HERO */}
      <section className="hero-redesign" id="for-girls-hero">
        <div className="hero-bg-slider">
          <div className="hero-slide active hero-slide-desktop" style={{ backgroundImage: "url('/img/play.png')" }}></div>
          <div className="hero-slide active hero-slide-mobile" style={{ backgroundImage: "url('/img/play.png')" }}></div>
          <div className="hero-dark-overlay"></div>
        </div>
        <div className="container hero-redesign-container">
          <div className="hero-redesign-content" data-aos="fade-up" data-aos-duration="400">
            <span className="hero-tag girls-tag">Life at Campus — For Girls</span>
            <h1 className="hero-redesign-title">Empowering Every Girl</h1>
            <p className="hero-redesign-tagline">A Campus Where She Belongs, Thrives & Leads</p>
            <p className="hero-redesign-desc">
              At IQRA Pioneers College, we are dedicated to nurturing ambitious, confident, and accomplished young women. Explore the exclusive programs, activities, and support systems designed with our girls in mind.
            </p>
            <div className="hero-redesign-btns">
              <Link to="/contact" className="btn-hero-primary">
                <i className="fas fa-user-graduate" /> Join Us Now
              </Link>
              <Link to="/gallery" className="btn-hero-outline">
                View Gallery <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="about-intro section bg-white">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <span className="section-subtitle">Vibrant &amp; Empowering</span>
            <h2 className="section-title" style={{ color: '#000000' }}>Life at Campus — For Girls</h2>
            <div className="about-text-content">
              <p>
                IQRA Pioneers College offers a vibrant, inclusive, and fully supportive campus experience for girls. Beyond academic excellence, we cultivate confidence, character, creativity, and lifelong friendships — preparing every young woman to take on the future with strength and grace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS STRIP */}
      <section className="girls-highlights-section section bg-light">
        <div className="container">
          <div className="girls-highlights-grid" data-aos="fade-up">
            {highlights.map(({ icon, label, desc }) => (
              <div className="girls-highlight-card" key={label}>
                <div className="girls-highlight-icon">{icon}</div>
                <h4 className="girls-highlight-label">{label}</h4>
                <p className="girls-highlight-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE ROWS - REDESIGNED WITHOUT IMAGES */}
      <section className="girls-features-section section bg-white">
        <div className="container">
          <div className="girls-features-info-grid">
            {features.map(({ icon, subtitle, title, paragraphs }) => (
              <div className="girls-feature-card-full" key={title} data-aos="fade-up">
                <div className="girls-feature-card-icon">{icon}</div>
                <div className="girls-feature-card-content">
                  <span className="section-subtitle">{subtitle}</span>
                  <h2>{title}</h2>
                  {paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="girls-cta-section section">
        <div className="container">
          <div className="girls-cta-inner" data-aos="fade-up" data-aos-duration="400">
            <span className="girls-cta-badge">🌟 Your Journey Starts Here</span>
            <h2 className="girls-cta-title">Ready to Join Our Girls' Community?</h2>
            <p className="girls-cta-desc">
              Become part of a proud tradition of academic excellence and personal growth at IQRA Pioneers College. Apply today and take the first step toward an extraordinary future.
            </p>
            <div className="girls-cta-btns flex flex-col items-center md:flex-row md:justify-center">
              <Link to="/contact#contact-form" className="btn btn-accent btn-large">
                <i className="fas fa-paper-plane" /> Apply Now
              </Link>
              <Link to="/about" className="btn btn-outline-white btn-large">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
