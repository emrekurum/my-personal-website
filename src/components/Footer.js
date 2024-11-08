import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>© 2024 My Personal Website</p>
      <p>Contact me: <a href="mailto:emrekurum07@hotmail.com" style={linkStyle}>emrekurum07@hotmail.com</a></p>
      <div style={socialLinksStyle}>
        <a href="https://github.com/emrekurum" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub</a> | 
        <a href="https://linkedin.com/in/emre-kurum-58a106204" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a>
      </div>
    </footer>
  );
}

const footerStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  textAlign: 'center',
  padding: '1rem',
  backgroundColor: '#282c34',
  color: 'white',
  boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
  margin: 0, // Ensure no extra margins around the footer
  height: 'auto', // In case height needs to be specified for full coverage
};

const socialLinksStyle = {
  marginTop: '0.5rem',
};

const linkStyle = {
  color: '#61dafb',
  textDecoration: 'none',
  margin: '0 0.5rem',
  transition: 'color 0.3s',
};

// Hover effect for links
linkStyle[':hover'] = {
  color: 'white',
};

export default Footer;
