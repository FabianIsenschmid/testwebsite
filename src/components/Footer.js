import React from 'react';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <p>© {new Date().getFullYear()} Fabian Isenschmid — All rights reserved.</p>
      <div className="footer__links">
        <a  href="https://www.instagram.com/fabian_isenschmid/" 
            aria-label="Instagram" target="_blank" 
            rel="noopener noreferrer">
            Instagram</a>
        <a  href="mailto:fabian@isenschmid.com" 
            aria-label="Email">
            Email</a>
      </div>
    </footer>
  );
}

export default Footer;


