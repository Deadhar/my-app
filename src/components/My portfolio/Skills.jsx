import React from "react";
import { FaGitAlt, FaJs } from "react-icons/fa";
import { DiHtml5 } from "react-icons/di";
import { IoLogoReact } from "react-icons/io5";

function Skills() {
  return (
    <section id="skills">
      <h2>Навыки</h2>
      <ul style={{ display: 'flex', justifyContent: 'center', padding: 0, listStyle: 'none' }}>
        <li style={{ margin: '0 20px', display: 'flex', alignItems: 'center' }}>
          <FaJs color="#F7DF1E" size={40} style={{ marginRight: '8px' }} /> 
          JavaScript (ES6+)
        </li>
        <li style={{ margin: '0 20px', display: 'flex', alignItems: 'center' }}>
          <IoLogoReact color="#61DBFB" size={40} style={{ marginRight: '8px' }} /> 
          React.js
        </li>
        <li style={{ margin: '0 20px', display: 'flex', alignItems: 'center' }}>
          <DiHtml5 color="#E44D26" size={40} style={{ marginRight: '8px' }} /> 
          HTML & CSS
        </li>
        <li style={{ margin: '0 20px', display: 'flex', alignItems: 'center' }}>
          <FaGitAlt color="#F1502F" size={40} style={{ marginRight: '8px' }} /> 
          Git
        </li>
      </ul>
    </section>
  );
}

export default Skills;