import React from 'react';
import Navbar from '../../Layouts/Navbar';
import ProfileInfo from '../../components/ProfileInfo';

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <ProfileInfo />
      <p className="about__copyright">member since 2023</p>
    </div>
  );
};

export default About;
