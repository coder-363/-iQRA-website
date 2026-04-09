const galleryItems = [
  { src: '/gallery/01.jpg', title: 'Campus Event', desc: 'Celebrating student achievements', large: true },
  { src: '/gallery/04.jpg', title: 'Student Life', desc: 'Engagement in campus activities', delay: 50 },
  { src: '/gallery/05.jpg', title: 'Academic Excellence', desc: 'Focusing on a bright future', delay: 100 },
  { src: '/gallery/08.jpg', title: 'Collaboration', desc: 'Learning together as a community', delay: 150 },
  { src: '/gallery/09.jpg', title: 'Campus Pride', desc: 'Building our legacy', delay: 200 },
  { src: '/gallery/10.jpg', title: 'Future Leaders', desc: 'Empowering the next generation', large: true, delay: 250 },
  { src: '/gallery/IMG_20251215_085502.jpg', title: 'Campus View', desc: 'Our beautiful local environment', delay: 50 },
  { src: '/gallery/IMG_20251216_094833.jpg', title: 'Interactive Learning', desc: 'Engaging educational experiences', delay: 100 },
  { src: '/gallery/IMG_20251216_094903.jpg', title: 'Student Moments', desc: 'Capturing the college spirit', delay: 150 },
  { src: '/gallery/IMG_20251216_095106.jpg', title: 'Campus Activity', desc: 'Dynamic life at IQRA Pioneers', delay: 200 },
];

export default function Gallery() {
  return (
    <>
      <section className="gallery section bg-blue page-header-offset" id="campus">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Life at IQRA</span>
            <h2 className="section-title">Campus Facilities &amp; Life</h2>
            <p className="section-desc">Explore our vibrant campus environment designed to foster learning, creativity, and personal growth.</p>
          </div>
          <div className="gallery-grid">
            {galleryItems.map(({ src, title, desc, large, delay }) => (
              <div key={title} className={`gallery-item${large ? ' item-large' : ''}`} data-aos="zoom-in" data-aos-delay={delay || 0}>
                <img src={src} alt={title} loading="lazy" />
                <div className="gallery-overlay">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
