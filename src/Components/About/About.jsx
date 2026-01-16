import React from "react";
import aboutCSS from './../About/About.module.css'
import aboutImg from './../../assets/about-one.png'
function About() {
    return(
        <div className={`${aboutCSS.about_wrapper} section`}>
            <div className={aboutCSS.about_img}>
                <img src={aboutImg} alt="about-img" />
            </div>
            <div className={aboutCSS.about_content}>
                <small className="section__Heading">The Royal Hotel</small>
                <h2 className="section__Title">Where Elegance Meets <span> Excellance </span></h2>
                <p>Every dish is thoughtfully prepared using premium ingredients, blending traditional recipes with modern culinary artistry. From the warm ambiance to the exquisite presentation, we ensure each moment is a celebration of taste, comfort, and sophistication.</p>
                <div className={aboutCSS.Cards}>
                    <p>260+ <span>Awards Wins</span></p>
                    <p>250k+ <span>Visitors Vists </span></p>
                    <p>150k+ <span>Events </span></p>
                </div>
            </div>
        </div>
    )
}

export default About