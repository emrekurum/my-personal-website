import React from 'react';

function About() {
  return (
    <section style={aboutStyle}>
      <h3>About Me</h3>
      <p>Hello! I’m Emre KURUM, a web developer passionate about creating beautiful and functional websites. I have experience in HTML, CSS, JavaScript, and React.</p>
      <h4>Skills</h4>
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
  margin: 'auto',
};

const skillsListStyle = {
  listStyleType: 'square',
  paddingLeft: '20px',
};

export default About;
