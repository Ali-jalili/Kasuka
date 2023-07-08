import React from 'react';
import '../../App.css';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import { Social } from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';


const Header = () => {
    return (

        <header className='header'>

            {/* <Navbar /> */}


            <section className='home section' id='home'>

                <div className="home-cintaner container grid">

                    <div className='home-content grid'>

                        <Social />

                        <div className='home-img'>

                        </div>

                        <Data />


                    </div>

                    <ScrollDown />


                </div>




            </section>

        </header>
    )
}

export default Header;

