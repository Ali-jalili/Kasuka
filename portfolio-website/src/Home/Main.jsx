import React from 'react';
import About from '../Components/About/About';
import Skills from '../Components/Skills/Skills';
import Services from '../Components/Services/Services';
import Quailification from '../Components/qualification/Quailification';
import Testimonial from '../Components/Testimonial/Testimonial';
import Contact from '../Components/contact/Contact';
import Protfolio from '../Components/Protfolio/Protfolio';

const Aboutme = () => {
    return (

        <main className='main'>

            <About />

            <Skills />

            <Services />

            <Protfolio />

            <Quailification />

            <Testimonial />

            <Contact />


        </main>

    )
}

export default Aboutme;