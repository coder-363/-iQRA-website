import { useState } from 'react';
import { Link } from 'react-router-dom';

const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
const years = ['2012','2011','2010','2009','2008','2007','2006','2005'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', gender: '', day: '', month: '', year: '', reference: '', campus: '', course: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="hero-redesign" id="contact-hero">
        <div className="hero-bg-slider">
          <div className="hero-slide active" style={{ backgroundImage: "url('/img/contact1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="hero-dark-overlay"></div>
        </div>
        <div className="container hero-redesign-container">
          <div className="hero-redesign-content" data-aos="fade-up" data-aos-duration="900">
            <span className="hero-tag">📞 Get in Touch</span>
            <h1 className="hero-redesign-title">Contact Us</h1>
            <p className="hero-redesign-tagline">We're Here to Help You on Your Journey</p>
            <p className="hero-redesign-desc">Whether you have questions about admissions, our programs, or campus life, our team is ready to provide the answers you need.</p>
            <div className="hero-redesign-btns">
              <a href="#contact-form" className="btn-hero-primary"><i className="fas fa-paper-plane"></i> Send Message</a>
              <Link to="/about" className="btn-hero-outline">Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-page section bg-white page-header-offset">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <span className="section-subtitle">Get In Touch</span>
            <h2 className="section-title">Contact Us</h2>
            <p className="section-desc">Have questions? We're here to help. Reach out to us through the form below or our contact details.</p>
          </div>

          {/* INFO CARDS */}
          <div className="contact-info-landscape" data-aos="fade-up" data-aos-duration="700">
            {[
              { icon: 'fa-location-dot', title: 'Location', text: 'Near Silver Star, Motorway Interchange Sialkot road Daska' },
              { icon: 'fa-phone-alt', title: 'Admissions', text: '0312-7867770' },
              { icon: 'fa-phone-alt', title: 'Principal', text: '0311-7867770' },
              { icon: 'fa-envelope', title: 'Email', text: 'principal.ipc.dsk@gmail.com' },
            ].map(({ icon, title, text }) => (
              <div className="contact-card-mini" key={title}>
                <div className="icon-box"><i className={`fas ${icon}`}></i></div>
                <div className="text-box"><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>

          {/* FORM */}
          <div className="contact-form-landscape" data-aos="fade-up" data-aos-delay="150" data-aos-duration="700">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem' }}>
                <i className="fas fa-check-circle" style={{ fontSize: '3rem', color: 'var(--primary-blue)', marginBottom: '1rem', display: 'block' }}></i>
                <h3 style={{ color: 'var(--text-dark)' }}>Thank you! We'll be in touch soon.</h3>
              </div>
            ) : (
              <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                <div className="form-grid form-grid-3">
                  <div className="form-group">
                    <label>Full Name <span className="required">*</span></label>
                    <input type="text" placeholder="Your Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Email <span className="required">*</span></label>
                    <input type="email" placeholder="Email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Phone <span className="required">*</span></label>
                    <div className="phone-input-group">
                      <span className="country-flag"><img src="https://flagcdn.com/w20/pk.png" alt="PK" /></span>
                      <input type="tel" placeholder="0333-1234567" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <select value={form.gender} onChange={e => setForm({ ...form, gender: e.target.value })}>
                      <option value="" disabled>Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <div className="dob-group">
                      <select value={form.day} onChange={e => setForm({ ...form, day: e.target.value })}>
                        <option value="" disabled>DD</option>
                        {days.map(d => <option key={d}>{d}</option>)}
                      </select>
                      <select value={form.month} onChange={e => setForm({ ...form, month: e.target.value })}>
                        <option value="" disabled>MM</option>
                        {months.map(m => <option key={m}>{m}</option>)}
                      </select>
                      <select value={form.year} onChange={e => setForm({ ...form, year: e.target.value })}>
                        <option value="" disabled>YYYY</option>
                        {years.map(y => <option key={y}>{y}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Reference</label>
                    <select value={form.reference} onChange={e => setForm({ ...form, reference: e.target.value })}>
                      <option value="" disabled>Reference</option>
                      <option value="social">Social Media</option>
                      <option value="friend">Friend / Relative</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>City / Campus <span className="required">*</span></label>
                    <select required value={form.campus} onChange={e => setForm({ ...form, campus: e.target.value })}>
                      <option value="" disabled>Select Campus</option>
                      <option value="daska">Daska Campus</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Select Course</label>
                    <select value={form.course} onChange={e => setForm({ ...form, course: e.target.value })}>
                      <option value="" disabled>Select Course</option>
                      <option value="fsc-med">FSc Pre-Medical</option>
                      <option value="fsc-eng">FSc Pre-Engineering</option>
                      <option value="ics">ICS</option>
                      <option value="icom">I.Com</option>
                      <option value="fa">FA</option>
                    </select>
                  </div>
                  <div className="form-group form-group-submit">
                    <label style={{ visibility: 'hidden' }}>Submit</label>
                    <button type="submit" className="btn btn-blue btn-submit w-full">Submit</button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
