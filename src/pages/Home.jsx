import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function HeroSlider({ slides, mobileImage }) {
  const currentRef = useRef(0);
  const slideRefs = useRef([]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      slideRefs.current[currentRef.current]?.classList.remove('active');
      currentRef.current = (currentRef.current + 1) % slides.length;
      slideRefs.current[currentRef.current]?.classList.add('active');
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero-bg-slider">
      {/* Desktop Slides */}
      {slides.map((src, i) => (
        <div
          key={i}
          ref={(el) => (slideRefs.current[i] = el)}
          className={`hero-slide hero-slide-desktop${i === 0 ? ' active' : ''}`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
      {/* Mobile Slide */}
      {mobileImage && (
        <div 
          className="hero-slide hero-slide-mobile active" 
          style={{ backgroundImage: `url('${mobileImage}')` }}
        />
      )}
      <div className="hero-dark-overlay"></div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-redesign" id="home">
        <HeroSlider 
          slides={['/img/hero1.png', '/img/her-new.png', '/img/hero-new12.png']} 
          mobileImage="/img/mobile-home.png"
        />
        <div className="container hero-redesign-container">
          <div className="hero-redesign-content" data-aos="fade-up" data-aos-duration="400">
            <span className="hero-tag">🎓 Admissions Open 2026</span>
            <h1 className="hero-redesign-title">IQRA Pioneers College</h1>
            <p className="hero-redesign-tagline">Faith, Knowledge, Leadership — Shaping the Future Together</p>
            <p className="hero-redesign-desc">A modern educational institution dedicated to combining Islamic values with academic excellence, 
                                                       preparing students to become ethical leaders and responsible members of society.</p>
            <div className="hero-redesign-btns">
              <Link to="/contact#contact-form" className="btn-hero-primary"><i className="fas fa-user-graduate"></i> Enroll Now</Link>
              <Link to="/about" className="btn-hero-outline">Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="hero-stats-line section">
        <div className="container">
          <div className="stats-line-grid">
            {[
              { icon: 'fa-users', num: '5000+', label: 'Enrolled Students', delay: 50 },
              { icon: 'fa-chalkboard-teacher', num: '200+', label: 'Expert Faculty', delay: 100 },
              { icon: 'fa-trophy', num: '98%', label: 'Success Rate', delay: 150 },
            ].map(({ icon, num, label, delay }) => (
              <div className="stat-line-card" key={label} data-aos="fade-up" data-aos-delay={delay}>
                <div className="stat-line-icon"><i className={`fas ${icon}`}></i></div>
                <div className="stat-line-info"><h3>{num}</h3><p>{label}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAIRMAN MESSAGE */}
      <section className="principal-message-section section bg-white" id="principal-message">
        <div className="container">
          <div className="principal-message-grid">
            <div className="principal-text-col" data-aos="fade-right">
              <span className="section-subtitle">Leadership</span>
              <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>Message from chairman</h2>
              <h3 className="principal-name" style={{ color: 'var(--primary-blue)', fontWeight: '800' }}>MIAN MANZOOR AHMED</h3>
              <div className="principal-message-content">
                <p>Our vision is to create future-ready leaders by building solid Islamic values with modern education, and developing well-rounded individuals who lead with integrity and positively impact society as responsible global citizens.</p>
              </div>
            </div>
            <div className="principal-image-col" data-aos="fade-left">
              <img src="/img/chairman.png" alt="MIAN MANZOOR AHMED - Chairman" className="principal-img" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROGRAMS */}
      <section className="home-programs section bg-blue" id="programs">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <span className="section-subtitle">What We Offer</span>
            <h2 className="section-title text-white">Our Programs</h2>
          </div>
          <div className="hprograms-grid">
            {[
              { icon: 'fa-hand-holding-heart', title: 'Faith-Based Leadership', desc: 'A program that blends Islamic education with leadership training, helping students develop strong character guided by Quranic teachings and ethical values.', delay: 50 },
              { icon: 'fa-book-open', title: 'Holistic Academic Excellence', desc: 'A balanced academic program combining Islamic studies with modern subjects, encouraging critical thinking and problem-solving skills.', delay: 100 },
              { icon: 'fa-user-shield', title: 'Character Development & Ethical Foundations', desc: 'Values-based education focused on building integrity, discipline, and global citizenship rooted in Islamic principles.', delay: 150 },
              { icon: 'fa-tools', title: 'Practical Skills & Experiential Learning', desc: 'Students develop communication, leadership, and teamwork skills through workshops, projects, and real-world experiences.', delay: 200 },
            ].map(({ icon, title, desc, delay }) => (
              <div key={title} className="hprogram-card" data-aos="fade-up" data-aos-delay={delay}>
                <div className="hprogram-icon"><i className={`fas ${icon}`}></i></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISLAMIC EDUCATION */}
      <section className="islamic-section section bg-white">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <span className="section-subtitle">Deep Roots</span>
            <h2 className="section-title">Islamic Education</h2>
          </div>
          <div className="islamic-cards-grid">
            {[
              { icon: 'fa-book-quran', title: 'Tafseer', desc: 'In-depth study of the Quran with focus on interpretation and real-life application.', delay: 50 },
              { icon: 'fa-mosque', title: 'Hadith', desc: 'Learning the sayings and teachings of the Prophet Muhammad (PBUH) to build ethical character.', delay: 100 },
              { icon: 'fa-scale-balanced', title: 'Fiqh & Aqeedah', desc: 'Understanding Islamic beliefs and jurisprudence to guide students in moral decision-making.', delay: 150 },
              { icon: 'fa-heart', title: 'Seerah', desc: 'Lessons from the life of the Prophet Muhammad (PBUH) focusing on leadership, resilience, and compassion.', delay: 200 },
            ].map(({ icon, title, desc, delay }) => (
              <div key={title} className="isl-card" data-aos="flip-left" data-aos-delay={delay}>
                <div className="isl-front">
                  <div className="isl-icon"><i className={`fas ${icon}`}></i></div>
                  <h3>{title}</h3>
                </div>
                <div className="isl-back"><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPECTED OUTCOMES */}
      <section className="outcomes-section section bg-blue">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <span className="section-subtitle">Future Ready</span>
            <h2 className="section-title text-white">Expected Outcomes</h2>
            <p className="text-white" style={{ opacity: 0.85 }}>Students graduating from IQRA Pioneers College will:</p>
          </div>
          <div className="outcomes-redesign-grid">
            {[
              'Become leaders grounded in faith and ethics',
              'Achieve academic excellence',
              'Develop critical thinking and problem-solving skills',
              'Serve society with responsibility and compassion',
              'Demonstrate emotional intelligence and resilience',
            ].map((text, i) => (
              <div key={i} className="outcome-redesign-item" data-aos="fade-right" data-aos-delay={(i + 1) * 100}>
                <div className="outcome-num">{String(i + 1).padStart(2, '0')}</div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL LEARNING */}
      <section className="practical-redesign section bg-white">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <span className="section-subtitle">Beyond the Classroom</span>
            <h2 className="section-title">Practical Learning &amp; Community Engagement</h2>
            <p className="section-desc">We provide opportunities beyond the classroom:</p>
          </div>
          <div className="practical-redesign-grid">
            {[
              { icon: 'fa-laptop-code', title: 'Workshops & Short Courses', desc: 'Time management, entrepreneurship, and problem solving — skills for real life.', delay: 100 },
              { icon: 'fa-briefcase', title: 'Internships & Real-World Projects', desc: 'Partnerships with businesses and NGOs to gain professional exposure.', delay: 200 },
              { icon: 'fa-microphone-alt', title: 'Public Lectures & Debates', desc: 'Engaging with global issues from an Islamic perspective through open discourse.', delay: 300 },
            ].map(({ icon, title, desc, delay }) => (
              <div key={title} className="practical-redesign-card" data-aos="fade-up" data-aos-delay={delay}>
                <div className="pr-icon"><i className={`fas ${icon}`}></i></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENROLL CTA */}
      <section className="enroll-cta section bg-blue">
        <div className="container">
          <div className="enroll-cta-inner" data-aos="zoom-in" data-aos-duration="400">
            <div className="enroll-cta-content">
              <span className="enroll-kicker">Start Your Journey Today</span>
              <h2>Enroll Now</h2>
              <p>"A place where education promotes honesty, responsibility, and respect for diversity."</p>
              <Link to="/contact#contact-form" className="btn-enroll">
                <i className="fas fa-arrow-right"></i> Join IQRA Pioneers College
              </Link>
            </div>
            <div className="enroll-cta-deco">
              <div className="deco-circle c1"></div>
              <div className="deco-circle c2"></div>
              <div className="deco-circle c3"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
