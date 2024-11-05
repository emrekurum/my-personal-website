import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>© 2024 My Personal Website</p>
      <p>Contact me: <a href="mailto:emrekurum07@hotmail.com">emrekurum07@hotmail.com</a></p>
      <div>
        <a href="https://github.com/emrekurum" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://linkedin.com/in/emre-kurum-58a106204" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
      </div>
    </footer>
  );
}

const footerStyle = {
  textAlign: 'center',
  padding: '1rem',
  backgroundColor: '#282c34',
  color: 'white',
  marginTop: '2rem',
};

export default Footer;
