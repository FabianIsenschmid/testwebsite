import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';

function GalleryPage() {
  const images = [
    process.env.PUBLIC_URL + '/photos/_DSF8101.JPG',
    process.env.PUBLIC_URL + '/photos/_DSF8393.JPG',
    process.env.PUBLIC_URL + '/photos/_DSF8397.JPG',
    process.env.PUBLIC_URL + '/photos/_DSF8398.JPG',
  ];

  return (
    <main className="page">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ margin: 0 }}>Gallery</h1>
        <Link to="/" className="btn" aria-label="Back to Home">← Back</Link>
      </div>
      <p className="muted">A dedicated page for your full portfolio.</p>
      <Gallery images={images} />
    </main>
  );
}

export default GalleryPage;


