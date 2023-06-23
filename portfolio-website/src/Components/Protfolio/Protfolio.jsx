import React from 'react';
import './Protfolio.css';

import Work1 from '../../Img/work1.jpg';
import Work2 from '../../Img/work2.jpg';
import Work3 from '../../Img/work3.jpg';
import Work4 from '../../Img/work4.jpg';
import Work5 from '../../Img/work5.jpg';



const ProtfolioCardItem = ({ src, href, text }) => {
    return (
        <div className='box-protfolio'>
            <div className='protfolio-card-item'>

                <img src={src} alt="img" />




            </div>

            <a target='_blank' className='protfolio-btn' href={href}>{text}</a>
        </div>

    );
}

const Protfolio = () => {
    const items = [
        { id: 1, src: Work1, href: 'https://watch-store-z07k.onrender.com/', text: 'Watch Store' },
        { id: 2, src: Work2, href: 'https://clienttodo.onrender.com/', text: 'App Todo' },
        { id: 3, src: Work3, href: 'https://personal-portfolio-t.netlify.app/', text: 'Personal Portfolio' },
        { id: 4, src: Work4, href: 'https://my-tv-show.netlify.app/', text: 'TV Show' },
        { id: 5, src: Work5, href: 'https://app.netlify.com/sites/countries-api-app1', text: 'Countries api App' }
    ];

    return (
        <section className='protfolio section' id='protfolio'>

            <h2 className="section-title">My Portfolio</h2>
            <span className="section-subtitle">Recent Works</span>

            <div className='protfolio-container container grid'>

                <div className='protfolio-card'>

                    {items.map(item => (
                        <ProtfolioCardItem key={item.id} src={item.src} href={item.href} text={item.text} />
                    ))}

                </div>



            </div>

        </section>
    );
}

export default Protfolio;

