import React from "react";
import aminitiesCSS from './../Amenities/Amenities.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { Autoplay } from "swiper/modules";

import img2 from './../../assets/gym.jpg'
import img1 from './../../assets/pool.jpg'
import img3 from './../../assets/rest.jpg'

function Amenities() {
    return (
        <div className={`${aminitiesCSS.aminities_wrapper} section`}>
            <small className="section__Heading">Luxury Amenities</small>
            <h2 className="section__Title">Our Best <span>Amenities</span></h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 1000,
                }}
                speed={2000}
                modules={[Autoplay]}
                className={aminitiesCSS.swiper}
            >
                <SwiperSlide>
                    <div className={aminitiesCSS.amenities__item}>
                        <img src={img1} alt="amenities-img" />

                        <div className={aminitiesCSS.content}>
                            <h2>Swimming Pool</h2>
                            <p>Enjoy a refreshing swim in our crystal-clear swimming pool, featuring
                                comfortable poolside seating, safety supervision, and a relaxing
                                atmosphere perfect for leisure and rejuvenation.</p>
                            <button>Book Now !</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={aminitiesCSS.amenities__item}>
                        <img src={img2} alt="amenities-img" />

                        <div className={aminitiesCSS.content}>
                            <h2>GYM and Sports</h2>
                            <p>Stay active in our fully equipped gym and sports area, offering modern
                                fitness equipment, open workout space, and a motivating environment
                                for all your fitness needs.</p>
                            <button>Book Now !</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={aminitiesCSS.amenities__item}>
                        <img src={img3} alt="amenities-img" />

                        <div className={aminitiesCSS.content}>
                            <h2>Restro & Cafe</h2>
                            <p>Experience delightful dining at our restaurant and café, serving
                                delicious cuisines, refreshing beverages, and a cozy ambiance perfect
                                for family meals and casual hangouts.</p>
                            <button>Book Now !</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Amenities