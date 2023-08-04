import React from 'react';
import './Skills.css';

const FrontEnd = () => {
    return (
        <div className='skills-content'>

            <h3 className="skills-title">Frontend developer</h3>

            <div className="skills-box">

                <div className="skills-group">

                    <div className="skilss-data">
                        <i class='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills-name">HTML </h3>
                            <span className='skills-level'>Basic</span>
                        </div>

                    </div>


                    <div className="skilss-data">
                        <i class='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills-name"> CSS</h3>
                            <span className='skills-level'>Advanced</span>
                        </div>

                    </div>


                    <div className="skilss-data">
                        <i class='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills-name">Bootstrap</h3>
                            <span className='skills-level'>Intermediate</span>
                        </div>

                    </div>



                </div>

                <div className="skills-group">

                    <div div className="skilss-data" >
                        <i class='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills-name"> JavaScript</h3>
                            <span className='skills-level'>Intermediate</span>
                        </div>

                    </div >


                    <div className="skilss-data">
                        <i class='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills-name">React</h3>
                            <span className='skills-level'>Intermediate</span>
                        </div>

                    </div>

                    <div className="skilss-data">
                        <i class='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills-name">Git/Github</h3>
                            <span className='skills-level'>Intermediate</span>
                        </div>

                    </div>



                </div>



            </div>

        </div>
    )
}

export default FrontEnd


