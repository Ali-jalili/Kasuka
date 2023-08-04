import React from 'react';
import './Skills.css';
import FrontEnd from './FrontEnd';
import Backnd from './Backnd';

const Skills = () => {
    return (
        <section className='skills section' id='skills'>

            <h2 className="section-title">Skills</h2>
            <span className="section-subtitle">My technical level</span>

            <div className='skills-container container grid'>

                <FrontEnd />

                <Backnd />


            </div>


        </section>
    )
}

export default Skills