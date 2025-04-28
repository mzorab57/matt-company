import React from 'react';
import PgaesHeader from '../components/ui/PgaesHeader';
import Projects from '../components/projects/Projects';

const Portfolio = () => {
  return (
    <>
      <PgaesHeader 
        img={"/assets/images/portfolio/exterior/exterior (15).jpg"} // Fix image path
        title="Portfolio" 
      />
      <Projects />
    </>
  );
};

export default Portfolio;
