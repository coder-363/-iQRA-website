import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
const years = ['2012','2011','2010','2009','2008','2007','2006','2005'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', gender: '', day: '', month: '', year: '', reference: '', campus: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact-form') {
      setTimeout(() => {
        const el = document.getElementById('contact-form');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const formData = new FormData(e.target);
      formData.append('access_key', 'afe9cb21-5f85-4141-a463-72e383f58675');
      formData.append('subject', 'New Contact Form Submission - IQRA Pioneers College');
      formData.append('from_name', 'IQRA Pioneers College Website');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', gender: '', day: '', month: '', year: '', reference: '', campus: '', course: '', message: '' });
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="hero-redesign" id="contact-hero">
        <div className="hero-bg-slider">
          <div className="hero-slide active" style={{ backgroundImage: "url('/img/contact1.png')" }}></div>
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
      <section className="contact-page section bg-white">
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
              <div style={{ textAlign: 'center', padding: '4rem 2rem', background: '#fff', borderRadius: '16px', boxShadow: 'var(--shadow-md)' }}>
                <i className="fas fa-check-circle" style={{ fontSize: '4rem', color: '#10B981', marginBottom: '1.5rem', display: 'block' }}></i>
                <h3 style={{ color: '#1E293B', fontSize: '1.75rem', marginBottom: '1rem' }}>Submission Successful!</h3>
                <p style={{ color: '#64748B', fontSize: '1.1rem' }}>Thank you for reaching out. Our team will review your application and get back to you soon.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn btn-blue" 
                  style={{ marginTop: '2rem', padding: '0.75rem 2rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                <input type="hidden" name="subject" value="New Contact Form Submission - IQRA Pioneers College" />
                <div className="form-grid form-grid-3">
                  <div className="form-group">
                    <label>Full Name <span className="required">*</span></label>
                    <input type="text" name="name" placeholder="Your Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Email <span className="required">*</span></label>
                    <input type="email" name="email" placeholder="Email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Phone <span className="required">*</span></label>
                    <div className="phone-input-group">
                      <span className="country-flag"><img src="https://flagcdn.com/w20/pk.png" alt="PK" /></span>
                      <input type="tel" name="phone" placeholder="0333-1234567" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <select name="gender" value={form.gender} onChange={e => setForm({ ...form, gender: e.target.value })}>
                      <option value="" disabled>Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <div className="dob-group">
                      <select name="dob_day" value={form.day} onChange={e => setForm({ ...form, day: e.target.value })}>
                        <option value="" disabled>DD</option>
                        {days.map(d => <option key={d}>{d}</option>)}
                      </select>
                      <select name="dob_month" value={form.month} onChange={e => setForm({ ...form, month: e.target.value })}>
                        <option value="" disabled>MM</option>
                        {months.map(m => <option key={m}>{m}</option>)}
                      </select>
                      <select name="dob_year" value={form.year} onChange={e => setForm({ ...form, year: e.target.value })}>
                        <option value="" disabled>YYYY</option>
                        {years.map(y => <option key={y}>{y}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Reference</label>
                    <select name="reference" value={form.reference} onChange={e => setForm({ ...form, reference: e.target.value })}>
                      <option value="" disabled>Reference</option>
                      <option value="social">Social Media</option>
                      <option value="friend">Friend / Relative</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>City / Campus <span className="required">*</span></label>
                    <select name="campus" required value={form.campus} onChange={e => setForm({ ...form, campus: e.target.value })}>
                      <option value="" disabled>Select Campus</option>
                      <option value="daska">Daska Campus</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Select Course</label>
                    <select name="course" value={form.course} onChange={e => setForm({ ...form, course: e.target.value })}>
                      <option value="" disabled>Select Course</option>
                      <option value="fsc-med">FSc Pre-Medical</option>
                      <option value="fsc-eng">FSc Pre-Engineering</option>
                      <option value="ics">ICS</option>
                      <option value="icom">I.Com</option>
                      <option value="fa">FA</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Message</label>
                    <textarea name="message" placeholder="How can we help you?" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ width: '100%', minHeight: '150px' }}></textarea>
                  </div>
                   <div className="form-group" style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                    <button type="submit" className="btn btn-accent btn-submit" disabled={submitting} style={{ padding: '1rem 2.5rem', borderRadius: '12px' }}>
                      {submitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin"></i> Submitting...
                        </>
                      ) : 'Submit Application'}
                    </button>
                    {error && <p style={{ color: '#e74c3c', marginTop: '0.5rem', fontSize: '1rem', textAlign: 'center', fontWeight: '500' }}>{error}</p>}
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
