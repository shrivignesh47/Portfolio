import React from 'react';
import './css/Skills.css';
import Bootstrap from './Assets/Skills/Bootstrap.png';
import Java from './Assets/Skills/java.png';
import ReactJS from './Assets/Skills/react.png';
import SpringBoot from './Assets/Skills/springboot.jpeg';
import MongoDB from './Assets/Skills/mongodb.jpeg';
import CPP from './Assets/Skills/c++.png';
import MySQL from './Assets/Skills/mysql.png';
import Node from './Assets/Skills/node.png';
import HTML from './Assets/Skills/html.png';
import JavaScript from './Assets/Skills/js.png';
import MUI from './Assets/Skills/mui1.jpeg';
import Docker from './Assets/Skills/Docker.png';
import AWS from './Assets/Skills/aws.png';
import Agile from './Assets/Skills/agile.png';
import RestApi from './Assets/Skills/restapi.png';
import Figma from './Assets/Skills/figma.png';

const skills = [
  { name: 'Java', icon: Java },
  { name: 'React JS', icon: ReactJS },
  { name: 'Spring Boot', icon: SpringBoot },
  { name: 'MongoDB', icon: MongoDB },
  { name: 'C++', icon: CPP },
  { name: 'My SQL', icon: MySQL },
  { name: 'Node', icon: Node },
  { name: 'HTML', icon: HTML },
  { name: 'JavaScript', icon: JavaScript },
  { name: 'BootStrap', icon: Bootstrap },
  { name: 'MUI', icon: MUI },
  { name: 'Docker', icon: Docker },
  { name: 'AWS', icon: AWS },
  { name: 'Agile', icon: Agile },
  { name: 'RestApi', icon: RestApi },
  {name: 'Figma', icon: Figma}
];

const Skills = () => {
  return (
    <div className="Skills">
      <h1>Skills</h1>
      <br></br>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
