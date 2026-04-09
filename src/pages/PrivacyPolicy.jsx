import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-redesign" id="privacy-hero">
        <div className="hero-bg-slider">
          <div className="hero-slide active" style={{ backgroundImage: "url('/img/cool.jpg')", opacity: 0.2 }}></div>
          <div className="hero-dark-overlay" style={{ background: 'var(--primary-blue)' }}></div>
        </div>
        <div className="container hero-redesign-container">
          <div className="hero-redesign-content" data-aos="fade-up" data-aos-duration="400">
            <span className="hero-tag">🔒 Legal & Operations</span>
            <h1 className="hero-redesign-title">Privacy Policy</h1>
            <p className="hero-redesign-tagline">How we handle and protect your personal information.</p>
          </div>
        </div>
      </section>

      {/* PRIVACY POLICY CONTENT */}
      <section className="section bg-white text-left">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-medium)' }} data-aos="fade-up" data-aos-duration="400">
          
          <p style={{ marginBottom: '2rem', fontStyle: 'italic' }}>Last Updated: April 9, 2026</p>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem', marginTop: '2rem' }}>1. Introduction</h2>
          <p style={{ marginBottom: '1rem' }}>
            Welcome to IQRA Pioneers College. We respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy informs you as to how we look after your personal data when you visit our website and tells you about your privacy rights and how the law protects you.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem', marginTop: '2.5rem' }}>2. Information We Collect</h2>
          <p style={{ marginBottom: '1rem' }}>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, and gender.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Contact Data:</strong> includes your email address, phone numbers, and physical address provided during inquiries.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, and other technology on the devices you use to access this website.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem', marginTop: '2.5rem' }}>3. How We Use Your Data</h2>
          <p style={{ marginBottom: '1rem' }}>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>To process and manage your admission inquiries.</li>
            <li style={{ marginBottom: '0.5rem' }}>To respond to your questions and communicate with you about our programs.</li>
            <li style={{ marginBottom: '0.5rem' }}>To improve our website, services, marketing, and the overall student experience.</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem', marginTop: '2.5rem' }}>4. Data Security</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. 
            In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem', marginTop: '2.5rem' }}>5. Third-Party Links</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            This website may include links to third-party websites (such as social media platforms like Facebook or Instagram). 
            Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem', marginTop: '2.5rem' }}>6. Contact Details</h2>
          <p style={{ marginBottom: '1rem' }}>If you have any questions about this Privacy Policy or our privacy practices, please contact us in the following ways:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '3rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><i className="fas fa-envelope" style={{ color: 'var(--accent-yellow)', marginRight: '10px' }}></i> Email: principal.ipc.dsk@gmail.com</li>
            <li style={{ marginBottom: '0.5rem' }}><i className="fas fa-phone-alt" style={{ color: 'var(--accent-yellow)', marginRight: '10px' }}></i> Admissions: 0312-7867770</li>
            <li style={{ marginBottom: '0.5rem' }}><i className="fas fa-location-dot" style={{ color: 'var(--accent-yellow)', marginRight: '10px' }}></i> Near Silver Star, Motorway Interchange Sialkot road Daska</li>
          </ul>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/" className="btn btn-accent" style={{ display: 'inline-flex', padding: '0.8rem 2rem', borderRadius: '50px' }}>
              Return to Home
            </Link>
          </div>
          
        </div>
      </section>
    </>
  );
}
