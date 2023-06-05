import React from 'react';
import '../../App.css';
import './NavbarStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faMoon } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    return (

        <section className=''>



            <nav className='nav-bar container'>

                <div className='logo'>
                    <img src="/img/logo.png" alt="Logo" />
                </div>

                <ul className='menu-bar'>

                    <li><a href="#Home">Home</a></li>

                    <li><a href="#Specs">Specs</a></li>

                    <li><a href="#Case">Case</a></li>

                    <li><a href="#Products">Products</a></li>

                    <li><a href="#About Me">About Me</a></li>

                    <li><a href="#Contact me">Contact me</a></li>


                </ul>


                <div className='icon-bar'>

                    <a href="#Cart"><FontAwesomeIcon icon={faShoppingCart} /></a>
                    <a href="#User"> <FontAwesomeIcon icon={faUser} /></a>
                    <a href="#Moon"><FontAwesomeIcon icon={faMoon} /></a>

                </div>


            </nav>





        </section>

    )
}

export default NavBar;