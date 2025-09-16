import './App.css';
import { useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import GalleryPage from './pages/GalleryPage';

function App() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <div className="site">
      <Navbar />

      <main>
        <SwitchTransition mode="out-in">
          <CSSTransition key={location.pathname} classNames="route" timeout={320} nodeRef={nodeRef}>
            <div ref={nodeRef} className="route-transition-wrapper">
              <Routes location={location}>
              <Route
                path="/"
                element={
                  <div>
                    <section className="hero">
                      <div className="hero__banner">
                        <img src={process.env.PUBLIC_URL + '/photos/_DSF8411.JPG'} alt="Photography Banner" />
                      </div>
                      <h1>Photography</h1>
                      <p>Capturing moments, light, and stories.</p>
                      <div style={{ marginTop: 16 }}>
                        <Link to="/gallery" className="btn">View Gallery</Link>
                      </div>
                    </section>
                  </div>
                }
              />
              <Route path="/gallery" element={<GalleryPage />} />
              </Routes>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </main>

      <Footer />
    </div>
  );
}

export default App;
