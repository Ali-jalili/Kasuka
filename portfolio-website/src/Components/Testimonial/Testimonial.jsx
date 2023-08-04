import React from 'react';
import './Testimonial.css';
import { Data } from './Data';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';



// import required modules
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const Testimonial = () => {

    return (

        <section className='testimonial container section' id='testimonial'>

            <h2 className="section-title">My clients say</h2>
            <span className="section-subtitle">Testimonial</span>

            <Swiper className='testimonial-container'

                loop={true}
                grabCursor={true}
                touchRatio={0.5}
                touchAngle={5}
                speed={500}
                spaceBetween={24}


                pagination={{
                    clickable: true,
                }}

                breakpoints={

                    {
                        576: {
                            slidesPerView: 2,

                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 48,
                        },

                    }

                }


                modules={[Pagination]}
            >

                {Data.map(({ id, image, title, description }) => {

                    return (
                        <SwiperSlide className='testimonal-card' key={id}>

                            <img src={image} alt="testimonal-img" className='testimonal-img' />

                            <h3 className='testimonal-name'>{title}</h3>

                            <p className='testimonal-description'>{description}</p>

                        </SwiperSlide>
                    )

                })}

            </Swiper>



        </section>

    )
}

export default Testimonial;