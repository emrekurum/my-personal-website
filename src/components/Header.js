import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h2>My Personal Website</h2>
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
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#282c34',
  color: 'white',
};

const navListStyle = {
  listStyleType: 'none',
  display: 'flex',
  gap: '1rem',
  margin: 0,
};

const navItemStyle = {
  cursor: 'pointer',
};

export default Header;
