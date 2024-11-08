import React from 'react';

function About() {
  return (
    <section style={aboutStyle}>
      <h3 style={titleStyle}>About Me</h3>
      <p style={textStyle}>
        Hello! I’m Emre KURUM, a web developer passionate about creating beautiful and functional websites. I have experience in HTML, CSS, JavaScript, and React.
      </p>
      <h4 style={titleStyle}>Skills</h4>
      <ul style={skillsListStyle}>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    </section>
  );
}

const aboutStyle = {
  padding: '2rem',
  maxWidth: '800px',
  margin: '3rem auto', // Center and add spacing from the header
  backgroundColor: '#f9f9f9', // Light background to differentiate
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  borderRadius: '8px', // Rounded corners for a modern look
};

const titleStyle = {
  color: '#333',
  marginBottom: '1rem',
  borderBottom: '2px solid #61dafb', // Underline with a color that matches the header and footer
  paddingBottom: '0.5rem',
};

const textStyle = {
  color: '#555',
  lineHeight: '1.6',
  fontSize: '1.1rem',
};

const skillsListStyle = {
  listStyleType: 'square',
  paddingLeft: '20px',
  color: '#333',
  lineHeight: '1.6',
};

export default About;
