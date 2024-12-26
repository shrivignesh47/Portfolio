import React from 'react';
// import Room3d from './Room3d';
import HackerTextBox from './HackerTextBox';
import Navbar from './Navbar';

import  ProfileCard from './ProfileCard';
import Education from './Education';
import Acheivements from './Acheivements';
import ProjectCard from './ProjectCard';
import Contact from './Contact';
import { SpeedInsights } from "@vercel/speed-insights/react"
// import ProjectCard from './ProjectCard';
export default function Homepage() {
  return (
    <div>
    <Navbar />
    <div>
          <HackerTextBox/>
          <ProfileCard />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Education/>  
          <Acheivements/>
          <br></br>
          <ProjectCard/>
          <Contact/>
          </div>
          <SpeedInsights>
          </SpeedInsights>
          </div>
          );
}

