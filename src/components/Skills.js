import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faNode, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    des: 'As a MERN stack developer, my HTML skills are focused on building clean, semantic, and accessible web pages that integrate seamlessly with React for dynamic content rendering. I am proficient in structuring HTML to ensure optimal SEO, accessibility (A11Y), and responsiveness across devices. I can efficiently use HTML5 elements like forms, inputs, and multimedia tags.',
    icon: faHtml5
  },
  {
    name: 'CSS',
    des: 'As a MERN stack developer, my CSS skills are focused on creating responsive, visually appealing, and user-friendly interfaces. I am proficient in writing clean, modular CSS using both traditional styles and modern methodologies like Flexbox and CSS Grid for responsive layouts. ',
    icon: faCss3
  },
  {
    name: 'Javascript',
    des: 'As a MERN stack developer, my JavaScript skills are the foundation of my ability to build dynamic and interactive web applications. I am proficient in both front-end and back-end JavaScript, using ES6+ features such as arrow functions, async/await, destructuring, and modules to write clean, efficient code. On the front-end, I leverage React to build component-based, state-driven UIs, while on the back-end, I work with Node.js and Express to create RESTful APIs and handle server-side logic.',
    icon: faJs},
  {
    name: 'ReactJs',
    des: 'As a MERN stack developer, my React skills are focused on building dynamic, high-performance user interfaces. I am proficient in creating reusable components, managing state with hooks like useState and useEffect, and handling routing with React Router for seamless navigation. I have experience with state management libraries like Redux for complex application states and context APIs for simpler use cases.',
    icon: faReact
  },
  {
    name: 'NodeJs',
    des: 'As a MERN stack developer, my Node.js skills are centered around building efficient, scalable back-end services and APIs. I am proficient in using Node.js for server-side development, handling asynchronous operations, and managing application logic. With Express.js, I create RESTful APIs that interact with databases (MongoDB) and handle HTTP requests, routing, and middleware.',
    icon: faNode
  },
  {
    name: 'Bootstrap',
    des: 'As a MERN stack developer, my Bootstrap skills enable me to quickly build responsive, mobile-first web applications with a consistent, professional design. I am proficient in using Bootstrap’s grid system, pre-built components, and utilities to create layouts that adapt seamlessly across devices.',
    icon: faBootstrap
  }

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
       My Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        As a MERN stack developer, I specialize in building dynamic, full-stack web applications using MongoDB, Express.js, React, and Node.js. I have strong expertise in creating RESTful APIs with Node.js and Express, managing data with MongoDB, and building interactive user interfaces with React. I am proficient in handling front-end logic with React components, state management (using hooks and Redux)
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

