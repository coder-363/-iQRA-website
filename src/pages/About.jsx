import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="hero-redesign" id="about-hero">
        <div className="hero-bg-slider">
          <div className="hero-slide active" style={{ backgroundImage: "url('/img/cool.jpg')" }}></div>
          <div className="hero-dark-overlay"></div>
        </div>
        <div className="container hero-redesign-container">
          <div className="hero-redesign-content" data-aos="fade-up" data-aos-duration="400">
            <span className="hero-tag">🎓 Learn More About Us</span>
            <h1 className="hero-redesign-title">About IQRA Pioneers College</h1>
            <p className="hero-redesign-tagline">Faith, Knowledge, Leadership — Shaping the Future Together</p>
            <p className="hero-redesign-desc">Discover our story, mission, and the values that drive us to educate and inspire the next generation of leaders.</p>
            <div className="hero-redesign-btns">
              <Link to="/contact" className="btn-hero-primary"><i className="fas fa-user-graduate"></i> Enroll Now</Link>
              <a href="#mission" className="btn-hero-outline">Our Mission <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="about-intro section bg-white">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <span className="section-subtitle">Our Story</span>
            <h2 className="section-title">About IQRA Pioneers College</h2>
            <div className="about-text-content mt-4">
              <p>IQRA Pioneers College is an educational institution committed to nurturing students who are firmly grounded in Islamic values while achieving excellence in modern education.</p>
              <p>Our goal is to develop confident, disciplined, and knowledgeable individuals who contribute positively to society.</p>
              <p>Education at our college goes beyond classrooms. We focus on spiritual growth, character building, and intellectual development in a balanced and supportive learning environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision section bg-blue" id="mission">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card" data-aos="fade-right">
              <div className="mv-icon"><i className="fas fa-bullseye"></i></div>
              <h3>Our Mission</h3>
              <p>Our mission is to provide a comprehensive educational system that combines Islamic teachings with contemporary knowledge, helping students succeed in both this world and the Hereafter.</p>
              <ul className="mission-checklist">
                {['Strengthening Islamic character and identity','Promoting academic excellence','Developing leadership qualities','Preparing students for future challenges','Encouraging community service'].map(item => (
                  <li key={item}><i className="fas fa-check-circle"></i> {item}</li>
                ))}
              </ul>
            </div>
            <div className="mv-card" data-aos="fade-left">
              <div className="mv-icon"><i className="fas fa-eye"></i></div>
              <h3>Our Vision</h3>
              <p>Our vision is to become a leading institution producing faith-driven leaders and professionals who uphold honesty, justice, and compassion in every aspect of life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATIONAL APPROACH */}
      <section className="educational-approach section bg-white">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <span className="section-subtitle">Our Methodology</span>
            <h2 className="section-title">Our Educational Approach</h2>
          </div>
          <div className="approach-grid">
            {[
              { icon: 'fa-kaaba', title: 'Islamic Foundation', items: ['Quran and Tafseer', 'Hadith', 'Fiqh and Aqeedah', 'Seerah of Prophet Muhammad (PBUH)'], delay: 100 },
              { icon: 'fa-microscope', title: 'Academic Excellence', desc: 'Focus on analytical thinking, intellectual growth, and problem-solving abilities.', delay: 200 },
              { icon: 'fa-user-graduate', title: 'Character & Leadership', desc: 'Training in public speaking, communication, teamwork, and leadership skills.', delay: 300 },
              { icon: 'fa-tools', title: 'Practical Learning', items: ['Workshops', 'Debates and lectures', 'Community service', 'Internships and projects'], delay: 400 },
            ].map(({ icon, title, items, desc, delay }) => (
              <div key={title} className="approach-card" data-aos="fade-up" data-aos-delay={delay}>
                <div className="approach-header">
                  <i className={`fas ${icon}`}></i>
                  <h3>{title}</h3>
                </div>
                {items ? <ul>{items.map(i => <li key={i}>{i}</li>)}</ul> : <p>{desc}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="core-values section bg-blue">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <span className="section-subtitle">Our Values</span>
            <h2 className="section-title text-white">Our Core Values</h2>
          </div>
          <div className="values-flex">
            {['Honesty','Respect','Responsibility','Discipline','Compassion','Service to Humanity'].map((v, i) => (
              <div key={v} className="value-item" data-aos="zoom-in" data-aos-delay={(i + 1) * 100}>{v}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
