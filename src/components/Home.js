import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                I'm <span>VIGHNESH KUMAR</span>
            </div>
            <div className="des">
                {/* 30 */}
                Developer with a strong foundation in web development through
 academic projects and self-driven learning. Proficient in building
 dynamic and responsive web applications using MongoDB, Express.js,
 React, and Node.js. Eager to apply my technical skills and creativity to
 develop innovative solutions. Strong problem-solving abilities and a
 passion for continuous learning in the field of software development.
            </div>
            
            <a href="VIGHNESH KUMAR T  MERN (1).pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/cb5ec0b3-7286-4230-a57e-b2bcaca808c6.jpg" alt="" />
                <div className="info">
                    <div>MERNSTACK DEV</div>
                    <div>INDIAN</div>
                    <div>26/05</div>
                    <div>Male</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
