import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h2 style={titleStyle}>My Personal Website</h2>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}>Home</li>
          <li style={navItemStyle}>About</li>
          <li style={navItemStyle}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

const headerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  boxSizing: 'border-box', // Ensure padding doesn't extend the width
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#282c34',
  color: 'white',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
};

const titleStyle = {
  margin: 0,
};

const navListStyle = {
  listStyleType: 'none',
  display: 'flex',
  gap: '1.5rem',
  margin: 0,
  padding: 0,
};

const navItemStyle = {
  cursor: 'pointer',
  transition: 'color 0.3s',
};

// Hover effect for nav items
navItemStyle[':hover'] = {
  color: '#61dafb',
};

export default Header;
