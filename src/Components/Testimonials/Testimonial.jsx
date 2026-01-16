import React from "react";
import testimonialCSS from './../Testimonials/Testimonial.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { Autoplay } from "swiper/modules";

import img1 from './../../assets/testi-01.jpg'
import img2 from './../../assets/testi-04.jpg'
import img3 from './../../assets/testi-03.jpg'
function Testimonial() {
    return (
        <div className={`${testimonialCSS.testimonial_wrapper} section`}>
            <small className="section__Heading">Testimonials</small>
            <h2 className="section__Title">What Our Clients <span>Says</span></h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 1000,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    1200: {
                        slidesPerView: 2
                    }
                }}
                speed={1500}
                modules={[Autoplay]}
                className={testimonialCSS.swiper}
            >
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img1} alt="" />
                        <div className={testimonialCSS.content}>
                            <h3>Amrita <span>manager</span></h3>
                            <p>The stay was absolutely wonderful. The rooms were clean, the staff was
                                friendly, and the overall service exceeded our expectations. Highly
                                recommended for a relaxing experience.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img2} alt="" />
                        <div className={testimonialCSS.content}>
                            <h3>Samantha <span>Sales manager</span></h3>
                            <p>Amazing hospitality and great ambiance. The amenities were top-class,
                                and the food quality was excellent. I truly enjoyed my stay and will
                                definitely visit again.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img3} alt="" />
                        <div className={testimonialCSS.content}>
                            <h3>John Doe <span>manager</span></h3>
                            <p>A perfect place to unwind and relax. The service was prompt, the rooms
                                were spacious, and the staff ensured comfort throughout our stay.
                                Exceptional experience.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonial