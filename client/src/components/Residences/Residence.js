import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residence.css";
import data from '../../components/Utilities/slider.json'
import { sliderSettings } from '../Utilities/Common';

const Residence = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'> Best Choices</span>
                    <span className='primaryText'> Popular Residences</span>
                </div>


                <Swiper {...sliderSettings}r>
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card ">
                                    <img src={card.image} alt="home" />

                                    <span className="secondaryText r-price">
                                        <span style={{ color: 'orange' }}>$</span>
                                        <span>{card.price}</span>

                                    </span>

                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>


                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </section>

    )
}

export default Residence