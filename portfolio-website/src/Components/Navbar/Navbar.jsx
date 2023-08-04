import React, { useState } from 'react';
import './Navbar.css';
import '../../App.css';


function Navbar() {

    window.addEventListener('scroll', () => {
        const sectionNav = document.querySelector('.section-nav');

        if (window.scrollY >= 80) {
            sectionNav.classList.add('scroll-nav');
        } else {
            sectionNav.classList.remove('scroll-nav');
        }
    });

    const [Toggle, showMenu] = useState(false);
    const [activNav, setActivNav] = useState('#home');




    return (
        <>

            <section className='section-nav'>

                <nav className="nav container">

                    <a className='nav-logo' href='insex.html'>Smith</a>

                    <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>

                        <ul className="nav-list grid">

                            <li className="nav-item">

                                <a href="#home" className={activNav === '#home' ? 'nav-link active-link' : 'nav-link'} onClick={() => setActivNav('#home')}>

                                    <i className='uil uil-estate nav-icon'></i>Home

                                </a>

                            </li>

                            <li className="nav-item">

                                <a className={activNav === '#about' ? 'nav-link active-link' : 'nav-link'} onClick={() => setActivNav('#about')} href="#about">

                                    <i className='uil uil-user nav-icon'></i>About

                                </a>

                            </li>

                            <li className="nav-item">

                                <a className={activNav === '#skills' ? 'nav-link active-link' : 'nav-link'} onClick={() => setActivNav('#skills')} href="#skills">

                                    <i className='uil uil-file-alt nav-icon'></i>Skills

                                </a>

                            </li>

                            <li className="nav-item">

                                <a className={activNav === '#services' ? 'nav-link active-link' : 'nav-link'} onClick={() => setActivNav('#services')} href="#services">

                                    <i className='uil uil-briefcase-alt nav-icon'></i>Services

                                </a>

                            </li>

                            <li className="nav-item">

                                <a className={activNav === '#protfolio' ? 'nav-link active-link' : 'nav-link'} onClick={() => setActivNav('#protfolio')} href="#protfolio">

                                    <i className='uil uil-scenery nav-icon'></i>Protfolio

                                </a>

                            </li>

                            <li className="nav-item">

                                <a className={activNav === '#contact' ? 'nav-link active-link' : 'nav-link'} onClick={() => setActivNav('#contact')} href="#contact">

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

            </section>



        </>
    )
}

export default Navbar