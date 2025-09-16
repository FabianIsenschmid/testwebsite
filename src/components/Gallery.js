import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Gallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const close = () => setActiveIndex(null);
  const open = (index) => setActiveIndex(index);
  const showPrev = (e) => {
    e.stopPropagation();
    setActiveIndex((idx) => (idx === null ? null : (idx + images.length - 1) % images.length));
  };
  const showNext = (e) => {
    e.stopPropagation();
    setActiveIndex((idx) => (idx === null ? null : (idx + 1) % images.length));
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        if (activeIndex !== null) {
            setActiveIndex(null);  
        }
      }
      if (activeIndex !== null) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          setActiveIndex((idx) => (idx === null ? null : (idx + images.length - 1) % images.length));
        }
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          setActiveIndex((idx) => (idx === null ? null : (idx + 1) % images.length));
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, images.length, location.pathname, navigate]);

  return (
    <section id="work" className="gallery">
      <div className="gallery__grid">
        {images.map((src, index) => (
          <button
            key={index}
            className="gallery__item"
            onClick={() => open(index)}
            aria-label={`Open image ${index + 1}`}
          >
            <img src={src} alt="Photography" loading="lazy" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox__close" onClick={close} aria-label="Close">×</button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={showPrev} aria-label="Previous">‹</button>
          <img className="lightbox__image" src={images[activeIndex]} alt="Large view" />
          <button className="lightbox__nav lightbox__nav--next" onClick={showNext} aria-label="Next">›</button>
        </div>
      )}
    </section>
  );
}

export default Gallery;


