import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-redesign page-header-offset" id="privacy-hero">
        <div className="hero-bg-slider">
          <div className="hero-slide active" style={{ backgroundImage: "url('/img/cool.jpg')", opacity: 0.15 }}></div>
          <div className="hero-dark-overlay" style={{ background: 'var(--primary-blue)' }}></div>
        </div>
        <div className="container hero-redesign-container">
          <div className="hero-redesign-content" data-aos="fade-up" data-aos-duration="400">
            <span className="hero-tag">🔒 Legal & Operations</span>
            <h1 className="hero-redesign-title">Privacy Policy</h1>
            <p className="hero-redesign-tagline">How we collect, use, and protect your information.</p>
          </div>
        </div>
      </section>

      {/* PRIVACY POLICY CONTENT */}
      <section className="section bg-white text-left">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-medium)' }} data-aos="fade-up" data-aos-duration="400">
          
          <p style={{ marginBottom: '2rem', fontStyle: 'italic' }}><strong>Last Updated:</strong> April 9, 2026</p>

          <p style={{ marginBottom: '1.5rem' }}>
            Welcome to i-qra-website.vercel.app. Your privacy is very important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
          <p style={{ marginBottom: '2.5rem' }}>
            By using this website, you agree to the terms of this Privacy Policy.
          </p>

          <hr style={{ borderTop: '1px solid #e2e8f0', marginBottom: '2.5rem' }} />

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>1. Information We Collect</h2>
          
          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginTop: '1.5rem', marginBottom: '0.8rem' }}>a. Personal Information</h3>
          <p style={{ marginBottom: '0.8rem' }}>We may collect personal information that you voluntarily provide, including:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '0.3rem' }}>Name</li>
            <li style={{ marginBottom: '0.3rem' }}>Email address</li>
            <li style={{ marginBottom: '0.3rem' }}>Any information submitted through forms or tools on the website</li>
          </ul>

          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginTop: '1.5rem', marginBottom: '0.8rem' }}>b. Non-Personal Information</h3>
          <p style={{ marginBottom: '0.8rem' }}>We may automatically collect certain information, such as:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '0.3rem' }}>IP address</li>
            <li style={{ marginBottom: '0.3rem' }}>Browser type and version</li>
            <li style={{ marginBottom: '0.3rem' }}>Device type</li>
            <li style={{ marginBottom: '0.3rem' }}>Operating system</li>
            <li style={{ marginBottom: '0.3rem' }}>Pages visited, time spent, and referring URLs</li>
          </ul>

          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginTop: '1.5rem', marginBottom: '0.8rem' }}>c. User-Generated Data</h3>
          <p style={{ marginBottom: '2.5rem' }}>If our website provides tools (such as input forms, AI tools, or analyzers), we may collect and temporarily process the data you submit to provide results.</p>

          <hr style={{ borderTop: '1px solid #e2e8f0', marginBottom: '2.5rem' }} />

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>2. How We Use Your Information</h2>
          <p style={{ marginBottom: '0.8rem' }}>We use the collected data for purposes including:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '0.3rem' }}>Operating and maintaining the website</li>
            <li style={{ marginBottom: '0.3rem' }}>Improving performance and user experience</li>
            <li style={{ marginBottom: '0.3rem' }}>Understanding how users interact with the website</li>
            <li style={{ marginBottom: '0.3rem' }}>Responding to inquiries and support requests</li>
            <li style={{ marginBottom: '0.3rem' }}>Preventing fraud and ensuring security</li>
            <li style={{ marginBottom: '0.3rem' }}>Developing new features and services</li>
          </ul>

          <hr style={{ borderTop: '1px solid #e2e8f0', marginBottom: '2.5rem' }} />

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>3. Legal Basis for Processing (if applicable)</h2>
          <p style={{ marginBottom: '0.8rem' }}>We process your information based on:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '0.3rem' }}>Your consent</li>
            <li style={{ marginBottom: '0.3rem' }}>Legitimate business interests</li>
            <li style={{ marginBottom: '0.3rem' }}>Legal obligations</li>
          </ul>

          <hr style={{ borderTop: '1px solid #e2e8f0', marginBottom: '2.5rem' }} />

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>4. Cookies and Tracking Technologies</h2>
          <p style={{ marginBottom: '0.8rem' }}>We use cookies and similar technologies to:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '0.3rem' }}>Enhance user experience</li>
            <li style={{ marginBottom: '0.3rem' }}>Store preferences</li>
            <li style={{ marginBottom: '0.3rem' }}>Analyze website traffic and usage patterns</li>
          </ul>
          <p style={{ marginBottom: '2.5rem' }}>You can control or disable cookies through your browser settings.</p>

          <hr style={{ borderTop: '1px solid #e2e8f0', marginBottom: '2.5rem' }} />

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>5. Third-Party Services</h2>
          <p style={{ marginBottom: '0.8rem' }}>We may use third-party tools and services such as:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '0.3rem' }}>Analytics providers</li>
            <li style={{ marginBottom: '0.3rem' }}>Hosting services</li>
            <li style={{ marginBottom: '0.3rem' }}>AI or automation tools</li>
          </ul>
          <p style={{ marginBottom: '2.5rem' }}>These third parties may collect, store, and process your data according to their own privacy policies. We are not responsible for their practices.</p>

          <hr style={{ borderTop: '1px solid #e2e8f0', marginBottom: '2.5rem' }} />

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>6. Data Retention</h2>
          <p style={{ marginBottom: '0.8rem' }}>We retain your information only for as long as necessary to:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '0.3rem' }}>Fulfill the purposes outlined in this policy</li>
            <li style={{ marginBottom: '0.3rem' }}>Comply with legal obligations</li>
            <li style={{ marginBottom: '0.3rem' }}>Resolve disputes</li>
          </ul>

          <hr style={{ borderTop: '1px solid #e2e8f0', marginBottom: '2.5rem' }} />

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>7. Data Security</h2>
          <p style={{ marginBottom: '2.5rem' }}>We implement reasonable technical and organizational measures to protect your data. However, no online system is completely secure, and we cannot guarantee absolute security.</p>

          <hr style={{ borderTop: '1px solid #e2e8f0', marginBottom: '2.5rem' }} />

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>8. Your Rights</h2>
          <p style={{ marginBottom: '0.8rem' }}>Depending on your location, you may have the right to:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '0.3rem' }}>Access your personal data</li>
            <li style={{ marginBottom: '0.3rem' }}>Request correction or deletion</li>
            <li style={{ marginBottom: '0.3rem' }}>Withdraw consent</li>
            <li style={{ marginBottom: '0.3rem' }}>Object to data processing</li>
          </ul>
          <p style={{ marginBottom: '2.5rem' }}>To exercise these rights, contact us using the details below.</p>

          <hr style={{ borderTop: '1px solid #e2e8f0', marginBottom: '2.5rem' }} />

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>9. Children's Privacy</h2>
          <p style={{ marginBottom: '2.5rem' }}>Our services are not intended for children under 13. We do not knowingly collect personal information from children.</p>

          <hr style={{ borderTop: '1px solid #e2e8f0', marginBottom: '2.5rem' }} />

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>10. External Links</h2>
          <p style={{ marginBottom: '2.5rem' }}>Our website may contain links to external websites. We are not responsible for the privacy practices or content of those websites.</p>

          <hr style={{ borderTop: '1px solid #e2e8f0', marginBottom: '2.5rem' }} />

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>11. International Data Transfers</h2>
          <p style={{ marginBottom: '2.5rem' }}>Your information may be transferred to and processed in countries outside your location, where data protection laws may differ.</p>

          <hr style={{ borderTop: '1px solid #e2e8f0', marginBottom: '2.5rem' }} />

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>12. Changes to This Privacy Policy</h2>
          <p style={{ marginBottom: '2.5rem' }}>We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date.</p>

          <hr style={{ borderTop: '1px solid #e2e8f0', marginBottom: '2.5rem' }} />

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>13. Contact Information</h2>
          <p style={{ marginBottom: '1rem' }}>If you have any questions, concerns, or requests regarding this Privacy Policy, you can contact us at:</p>
          <p style={{ marginBottom: '2.5rem' }}>
            <strong>Email:</strong> <a href="mailto:principal.ipc.dsk@gmail.com" style={{ color: 'var(--primary-blue)', textDecoration: 'underline', fontWeight: 'bold' }}>principal.ipc.dsk@gmail.com</a>
          </p>

          <hr style={{ borderTop: '1px solid #e2e8f0', marginBottom: '2.5rem' }} />

          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>14. Consent</h2>
          <p style={{ marginBottom: '2.5rem' }}>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/" className="btn btn-accent" style={{ display: 'inline-flex', padding: '0.8rem 2rem', borderRadius: '50px' }}>
              Return to Home
            </Link>
          </div>
          
        </div>
      </section>
    </>
  );
}
