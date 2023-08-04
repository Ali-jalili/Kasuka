import React, { useState } from 'react';
import './Quailification.css';

const Quailification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (

        <section className='quailification section'>

            <h2 className="section-title">Qualification</h2>

            <span className="section-subtitle">My personel journey</span>

            <div className='quailification-container container'>

                <div className='quailification-tabs'>

                    <div className={toggleState === 1 ? 'quailification-button quailification-active  button--flex' : 'quailification-button  button--flex'} onClick={() => toggleTab(1)}>

                        <i className='uil uil-graduation-cap quailification-icon'></i>Education

                    </div>

                    <div className={toggleState === 1 ? 'quailification-button quailification-active  button--flex' : 'quailification-button  button--flex'} onClick={() => toggleTab(2)}>

                        <i className='uil uil-briefcase-alt quailification-icon'></i>Experience

                    </div>

                </div>

                <div className='quailification-sections'>

                    <div className={toggleState === 1 ? 'quailification-content quailification-content-active' : 'quailification-content'}>

                        <div className='quailification-data'>

                            <div>

                                <h3 className='quailification-title'>Web Design</h3>

                                <span className='quailification-subtitle'>Spain - Institute</span>

                                <div className='quailification-calender'>
                                    <i className='uil uil-calendar-alt'></i>2021 - Persent
                                </div>

                            </div>

                            <div>

                                <span className='quailification-rounder'></span>
                                <span className='quailification-line'></span>

                            </div>



                        </div>

                        <div className='quailification-data'>

                            <div></div>

                            <div>

                                <span className='quailification-rounder'></span>
                                <span className='quailification-line'></span>

                            </div>

                            <div>

                                <h3 className='quailification-title'>Art Director</h3>

                                <span className='quailification-subtitle'>Spain - Institute</span>

                                <div className='quailification-calender'>
                                    <i className='uil uil-calendar-alt'></i>2021 - 2023
                                </div>

                            </div>


                        </div>


                        <div className='quailification-data'>

                            <div>

                                <h3 className='quailification-title'>Web Development</h3>

                                <span className='quailification-subtitle'>Spain - Institute</span>

                                <div className='quailification-calender'>
                                    <i className='uil uil-calendar-alt'></i>2019 - 2021
                                </div>

                            </div>

                            <div>

                                <span className='quailification-rounder'></span>
                                <span className='quailification-line'></span>

                            </div>



                        </div>

                        <div className='quailification-data'>

                            <div></div>

                            <div>

                                <span className='quailification-rounder'></span>
                                <span className='quailification-line'></span>

                            </div>

                            <div>

                                <h3 className='quailification-title'>UX Expert</h3>

                                <span className='quailification-subtitle'>Spain - Institute</span>

                                <div className='quailification-calender'>
                                    <i className='uil uil-calendar-alt'></i>2018 - 2019
                                </div>

                            </div>


                        </div>

                    </div>

                    <div className={toggleState === 2 ? 'quailification-content quailification-content-active' : 'quailification-content'}>

                        <div className='quailification-data'>

                            <div>

                                <h3 className='quailification-title'>Product Designer</h3>

                                <span className='quailification-subtitle'>Microsoft - Spain</span>

                                <div className='quailification-calender'>
                                    <i className='uil uil-calendar-alt'></i>2021 - Persent
                                </div>

                            </div>

                            <div>

                                <span className='quailification-rounder'></span>
                                <span className='quailification-line'></span>

                            </div>



                        </div>

                        <div className='quailification-data'>

                            <div></div>

                            <div>

                                <span className='quailification-rounder'></span>
                                <span className='quailification-line'></span>

                            </div>

                            <div>

                                <h3 className='quailification-title'>UX Designer</h3>

                                <span className='quailification-subtitle'>Apple Inc - Spain</span>

                                <div className='quailification-calender'>
                                    <i className='uil uil-calendar-alt'></i>2021 - 2023
                                </div>

                            </div>


                        </div>


                        <div className='quailification-data'>

                            <div>

                                <h3 className='quailification-title'>Web Designer</h3>

                                <span className='quailification-subtitle'>Figma - Spain</span>

                                <div className='quailification-calender'>
                                    <i className='uil uil-calendar-alt'></i>2019 - 2021
                                </div>

                            </div>

                            <div>

                                <span className='quailification-rounder'></span>
                                <span className='quailification-line'></span>

                            </div>



                        </div>


                    </div>

                </div>

            </div>

        </section>

    )

}

export default Quailification;