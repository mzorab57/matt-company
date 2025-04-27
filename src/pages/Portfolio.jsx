import React from 'react';
import PgaesHeader from '../components/ui/PgaesHeader';
import Projects from '../components/projects/Projects';

const Portfolio = () => {
  return (
    <>
      <PgaesHeader 
        title="Portfolio" 
        img={"/assets/images/portfolio/interior (2).jpg"} // Fix image path
      />
      <Projects />
    </>
  );
};

export default Portfolio;
