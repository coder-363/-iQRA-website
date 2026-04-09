import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <>
      <section className="section" style={{ padding: '8rem 1rem', minHeight: '100vh', background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-blue-light))' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', background: '#FFFFFF', borderRadius: '12px', boxShadow: '0 25px 60px rgba(0,0,0,0.4)', overflow: 'hidden' }} data-aos="fade-up" data-aos-duration="600">
          
          {/* Document Header */}
          <div style={{ background: '#FFFFFF', padding: '3rem 2rem', textAlign: 'center', borderBottom: '5px solid var(--primary-blue)' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>Privacy Policy</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-medium)', margin: 0 }}>i-qra-website.vercel.app</p>
          </div>

          {/* Document Body */}
          <div style={{ padding: '3rem 4rem', color: 'var(--text-medium)', lineHeight: '1.8' }} className="privacy-document-body">
            
            <p style={{ marginBottom: '2rem', fontStyle: 'italic', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
              <strong>Last Updated:</strong> April 9, 2026
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              Welcome to i-qra-website.vercel.app. Your privacy is very important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p style={{ marginBottom: '2.5rem' }}>
              By using this website, you agree to the terms of this Privacy Policy.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>1. Information We Collect</h2>
            
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginTop: '1.5rem', marginBottom: '0.8rem' }}>a. Personal Information</h3>
            <p style={{ marginBottom: '0.8rem' }}>We may collect personal information that you voluntarily provide, including:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
              <li>Name</li>
              <li>Email address</li>
              <li>Any information submitted through forms or tools on the website</li>
            </ul>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginTop: '1.5rem', marginBottom: '0.8rem' }}>b. Non-Personal Information</h3>
            <p style={{ marginBottom: '0.8rem' }}>We may automatically collect certain information, such as:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Operating system</li>
              <li>Pages visited, time spent, and referring URLs</li>
            </ul>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginTop: '1.5rem', marginBottom: '0.8rem' }}>c. User-Generated Data</h3>
            <p style={{ marginBottom: '2.5rem' }}>If our website provides tools (such as input forms, AI tools, or analyzers), we may collect and temporarily process the data you submit to provide results.</p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>2. How We Use Your Information</h2>
            <p style={{ marginBottom: '0.8rem' }}>We use the collected data for purposes including:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem' }}>
              <li>Operating and maintaining the website</li>
              <li>Improving performance and user experience</li>
              <li>Understanding how users interact with the website</li>
              <li>Responding to inquiries and support requests</li>
              <li>Preventing fraud and ensuring security</li>
              <li>Developing new features and services</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>3. Legal Basis for Processing (if applicable)</h2>
            <p style={{ marginBottom: '0.8rem' }}>We process your information based on:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem' }}>
              <li>Your consent</li>
              <li>Legitimate business interests</li>
              <li>Legal obligations</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>4. Cookies and Tracking Technologies</h2>
            <p style={{ marginBottom: '0.8rem' }}>We use cookies and similar technologies to:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem' }}>
              <li>Enhance user experience</li>
              <li>Store preferences</li>
              <li>Analyze website traffic and usage patterns</li>
            </ul>
            <p style={{ marginBottom: '2.5rem' }}>You can control or disable cookies through your browser settings.</p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>5. Third-Party Services</h2>
            <p style={{ marginBottom: '0.8rem' }}>We may use third-party tools and services such as:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem' }}>
              <li>Analytics providers</li>
              <li>Hosting services</li>
              <li>AI or automation tools</li>
            </ul>
            <p style={{ marginBottom: '2.5rem' }}>These third parties may collect, store, and process your data according to their own privacy policies. We are not responsible for their practices.</p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>6. Data Retention</h2>
            <p style={{ marginBottom: '0.8rem' }}>We retain your information only for as long as necessary to:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem' }}>
              <li>Fulfill the purposes outlined in this policy</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>7. Data Security</h2>
            <p style={{ marginBottom: '2.5rem' }}>We implement reasonable technical and organizational measures to protect your data. However, no online system is completely secure, and we cannot guarantee absolute security.</p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>8. Your Rights</h2>
            <p style={{ marginBottom: '0.8rem' }}>Depending on your location, you may have the right to:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem' }}>
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent</li>
              <li>Object to data processing</li>
            </ul>
            <p style={{ marginBottom: '2.5rem' }}>To exercise these rights, contact us using the details below.</p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>9. Children's Privacy</h2>
            <p style={{ marginBottom: '2.5rem' }}>Our services are not intended for children under 13. We do not knowingly collect personal information from children.</p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>10. External Links</h2>
            <p style={{ marginBottom: '2.5rem' }}>Our website may contain links to external websites. We are not responsible for the privacy practices or content of those websites.</p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>11. International Data Transfers</h2>
            <p style={{ marginBottom: '2.5rem' }}>Your information may be transferred to and processed in countries outside your location, where data protection laws may differ.</p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>12. Changes to This Privacy Policy</h2>
            <p style={{ marginBottom: '2.5rem' }}>We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date.</p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>13. Contact Information</h2>
            <p style={{ marginBottom: '1rem' }}>If you have any questions, concerns, or requests regarding this Privacy Policy, you can contact us at:</p>
            <p style={{ marginBottom: '2.5rem' }}>
              <strong>Email:</strong> <a href="mailto:principal.ipc.dsk@gmail.com" style={{ color: 'var(--primary-blue)', textDecoration: 'underline', fontWeight: 'bold' }}>principal.ipc.dsk@gmail.com</a>
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>14. Consent</h2>
            <p style={{ marginBottom: '3rem' }}>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

            {/* Print / Back Buttons */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '2rem', flexWrap: 'wrap' }}>
              <Link to="/" className="btn btn-outline" style={{ display: 'inline-flex', padding: '0.6rem 2rem', borderRadius: '50px', border: '2px solid var(--primary-blue)', color: 'var(--primary-blue)' }}>
                <i className="fas fa-arrow-left"></i> Back to Home
              </Link>
              <button onClick={() => window.print()} className="btn btn-accent" style={{ display: 'inline-flex', padding: '0.6rem 2rem', borderRadius: '50px', border: 'none', cursor: 'pointer', background: 'var(--primary-blue)', color: 'white' }}>
                <i className="fas fa-print"></i> Print Document
              </button>
            </div>
            
          </div>
        </div>
      </section>

      {/* Internal styling for the document container */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .privacy-document-body {
            padding: 2rem 1.5rem !important;
          }
        }
        @media print {
          .navbar, .footer, .btn {
            display: none !important;
          }
          body {
            background: #fff !important;
          }
          .section {
            padding: 0 !important;
            background: #fff !important;
          }
          div[style*="boxShadow"] {
            box-shadow: none !important;
          }
        }
      `}} />
    </>
  );
}
