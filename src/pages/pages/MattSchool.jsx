
import React from 'react';
import PgaesHeader from '../../components/ui/PgaesHeader';
import OurCourses from '../../components/mattSchool/OurCourses';

const MattSchool = () => {
  return (
    <div className="Matt School">
      <PgaesHeader img={'/assets/images/mattSchool/bgPage.png'} title={'Matt School'} />
      <OurCourses />
    </div>
  );
};

export default MattSchool;