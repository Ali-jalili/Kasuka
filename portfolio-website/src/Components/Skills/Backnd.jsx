import React from 'react';
import './Skills.css';

const Backnd = () => {
    return (
        <div className='skills-content'>

            <h3 className="skills-title">Backend Developer</h3>

            <div className="skills-box">

                <div className="skills-group">

                    <div className="skilss-data">
                        <i class='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills-name"> Python</h3>
                            <span className='skills-level'>Intermediate</span>
                        </div>

                    </div>

                    <div className="skilss-data">
                        <i class='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills-name"> Node Js</h3>
                            <span className='skills-level'>Basic</span>
                        </div>

                    </div>

                    <div className="skilss-data">
                        <i class='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills-name"> Django</h3>
                            <span className='skills-level'>Basic</span>
                        </div>

                    </div>




                </div>

                <div className="skills-group">

                    <div className="skilss-data">
                        <i class='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills-name">Expres </h3>
                            <span className='skills-level'>Basic</span>
                        </div>

                    </div>

                    <div className="skilss-data">
                        <i class='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills-name">Mongo DB</h3>
                            <span className='skills-level'>Basic</span>
                        </div>

                    </div>

                    <div className="skilss-data">
                        <i class='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills-name">Firebase</h3>
                            <span className='skills-level'>Intermediate</span>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default Backnd