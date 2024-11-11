import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'CROWD-FUNDING USING BLOCKCHAIN',
    des: 'Crowd funding is a way to raise money from a large number of individual investors or companies with the evolution of blockchain.our proposed work have a bright future and a large scope for improvement and evolution. In the future, the proposed research work can progress further in an easier and safer way for all ideas that are achieved through the proposed crowdfunding application The main objectives is crowd funding using smart contracts in block chain',
    mission: 'Front-end Developer',
    language: 'HTML5, CSS3, Django,...',
    images: '/project1.PNG'
  },
  {
    name: ' BIKE WEB APP',
    des: ' A Mernstack based Ecommerce web application which deals with Selling of automotive parts . Its built with eye catching UI , contains three  modules Admin, User, shop .',
    mission: 'Handled both front-end and Back-end',
    language: 'HTML5, CSS3, React JS, Node Js,...',
    images: '/Screenshot 2024-11-11 125711.png'
  },
  {
    name: 'CAT WEB APP',
    des: 'A React.js web app dedicated to cat lovers, providing a curated Selection of cat accessories and detailed information on cat care. Users can browse and purchase high-quality products, read expert articles, and discover tips to keep their cats happy and healthy.',
    mission: 'Handled both front-end and Back-end',
    language: 'HTML5, CSS3, React JS, Node Js,...',
    images: '/Screenshot 2024-11-11 125834.png'
  },

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        I have worked on a variety of projects that showcase my ability to build full-stack web applications. My projects typically involve creating dynamic and scalable back-end APIs using Node.js and Express, while leveraging MongoDB for data storage and management. On the front-end, I use React to build interactive, user-friendly interfaces with efficient state management and responsive designs.
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Mission</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
