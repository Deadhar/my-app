import React from "react";

function Projects (){
    return(
<section id="projects">
      <h2>Проекты</h2>
      <div>
        <h3>Проект 1: Мой первый сайт</h3>
        <p>
          Это мой первый проект на React, где я создал простое одностраничное приложение.
        </p>
        <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">Посмотреть код на GitHub</a>
      </div>
      <div>
        <h3>Проект 2: Портфолио</h3>
        <p>
          Это портфолио, которое я создал с использованием React и Vite. Здесь я показываю все свои проекты.
        </p>
        <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer">Посмотреть код на GitHub</a>
      </div>
    </section>
  );
}

export default Projects;