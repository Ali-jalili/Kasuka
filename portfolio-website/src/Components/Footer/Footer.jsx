import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>

            <section className='footer-container container'>

                <h1 className='footer-title'>Smith</h1>

                <ul className="footer-list">

                    <li>

                        <a href="#about" className='footer-link'> About</a>

                    </li>


                    <li>

                        <a href="#protfolio" className='footer-link'> Projects</a>

                    </li>


                    <li>

                        <a href="#testimonial" className='footer-link'>Testimonials </a>

                    </li>

                </ul>

                <div className='footer-social'>

                    <a href="#" className='footer-social-icon' target='_blank'><i class="uil uil-instagram"></i></a>
                    <a href="#" className='footer-social-icon' target='_blank'><i class="uil uil-github"></i></a>
                    <a href="#" className='footer-social-icon' target='_blank'><i class="uil uil-linkedin"></i></a>
                    <a href="#" className='footer-social-icon' target='_blank'><i class="uil uil-telegram"></i></a>
                </div>

                <span className='footer-copy'>&#169; Crypticalcoder. All rigths reserved</span>



            </section>



        </footer>
    )
}

export default Footer