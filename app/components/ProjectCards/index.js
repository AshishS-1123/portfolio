import React, { memo, useEffect } from 'react';
// import PropTypes from 'prop-types'

import stackedCards from './stacked_cards/stackedCards';

import './index.css';

const projectList = [
  {
    id: 'one',
    name: 'Chat App',
    tagline: 'App to send and recieve messages.',
    desc: `This was my first major React project. 
      I have given a lot of focus on the UI, trying to make the interface stand out. 
      I used React for developing the front end and firebase as backend/database.
      This app allows its users to send and recieve messages (not in real time though) and supports multiple users. 
      Users can also create accounts on the app. Spent a lot of time making the design responsive.`,
    github: 'https://github.com/AshishS-1123/React-Chat-App',
    live: '',
  },
  {
    id: 'two',
    name: 'Akira UX',
    tagline: 'UI UX design tool for Linux',
    desc: `Developed features like Linear and Radial Gradients (for shading), 
      Vector Tool (for drawing paths and curves), Pencil Tool (for drawing freehand curves), etc. 
      I had to learn a new language called Vala and learn to use GTK and Cairo libraries as this is a desktop app. 
      This is where I learnt most of the principles of Software Development like SOLID principles, Design Patterns and Software Architecture.`,
      github: 'https://github.com/AshishS-1123/Akira',
      live: '',
  },
  {
    id: 'three',
    name: 'ClickUp Clone',
    tagline: 'Project Management',
    desc: `This is a clone of a project management app called ClickUp. 
      It was my first major Full Stack project. The user can organise their tasks using Workspaces, Spaces, Folders and Lists. 
      When creating new tasks, users can assign priorities and due dates. They can also view all the tasks using Kanban boards. 
      I have used NextJS for server side rendering and Material UI for components.`,
      github: 'https://github.com/AshishS-1123/ClickUp-Clone',
      live: '',
  },
]

function ProjectCards() {
  useEffect(() => {
    const stackedCardFanOut = new stackedCards({
    selector: '.stacked-cards-slide',
    layout: "slide",
    transformOrigin: "center",
    });

    		stackedCardFanOut.init();
  }, [])

  return (
    <div className="container-fixed stacked-cards stacked-cards-slide">
      <ul>
        {
          projectList.map(item => {
            return (
              <li key={item.id} className="ProjectCards__card">
                <h1>{item.name}</h1>
                <h5>{item.tagline}</h5>

                <p>{item.desc}</p>
                <div>
                  <a href={item.github} target="_blank">GitHub</a>
                  <a href={item.live} target="_blank">Go Live</a>
                </div>
              </li>
            );
          })
        }
      </ul>
      <p>My Projects and Open Source Contributions</p>
    </div>
  )
}

export default memo(ProjectCards);

/*
Projects

1. Akira
2. Chat App
3. MERN stack authentiction
4. Clone
*/
