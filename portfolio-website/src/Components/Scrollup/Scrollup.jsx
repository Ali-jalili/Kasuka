import React from 'react';
import './Scrollup.css';

const Scroll = () => {
    window.addEventListener('scroll', () => {
        const scrollUp = document.querySelector('.scrollup');

        if (window.scrollY >= 700) {
            scrollUp.classList.add('show-scroll');
        } else {
            scrollUp.classList.remove('show-scroll');
        }
    });
    return (
        <a href="#" className='scrollup'>

            <i className='uil uil-arrow-up scrollup-icon'></i>

        </a>
    )
}

export default Scroll;