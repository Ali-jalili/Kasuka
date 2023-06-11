import React, { useState } from 'react';
import '../../App.css';
import './Navbar.css';


function Navbar() {

    const [Toggle, showMenu] = useState(false);




    return (
        <>

            <nav className="nav container">

                <a className='nav-logo' href='insex.html'>Smith</a>

                <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>

                    <ul className="nav-list grid">

                        <li className="nav-item">

                            <a className='nav-link active-link' href="#home">

                                <i className='uil uil-estate nav-icon'></i>Home

                            </a>

                        </li>

                        <li className="nav-item">

                            <a className='nav-link' href="#about">

                                <i className='uil uil-user nav-icon'></i>About

                            </a>

                        </li>

                        <li className="nav-item">

                            <a className='nav-link' href="#skills">

                                <i className='uil uil-file-alt nav-icon'></i>Skills

                            </a>

                        </li>

                        <li className="nav-item">

                            <a className='nav-link' href="#services">

                                <i className='uil uil-briefcase-alt nav-icon'></i>Services

                            </a>

                        </li>

                        <li className="nav-item">

                            <a className='nav-link' href="#protfolio">

                                <i className='uil uil-scenery nav-icon'></i>Protfolio

                            </a>

                        </li>

                        <li className="nav-item">

                            <a className='nav-link' href="#contact">

                                <i className='uil uil-message nav-icon'></i>Contact

                            </a>

                        </li>
                    </ul>

                    <i class="uil uil-times nav-close" onClick={() => showMenu(!Toggle)}></i>

                </div>

                <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>



            </nav>

        </>
    )
}

export default Navbar