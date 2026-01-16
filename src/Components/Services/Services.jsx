import React from "react";
import ServicesCSS from './../Services/Services.module.css'
function Services(){
    return(
        <div className={`${ServicesCSS.Services_wrapper} section`}>
            <small className="section__Heading">Facilites</small>
            <h2 className="section__Title">Our Best <span>Services</span></h2>
            <div className={ServicesCSS.Services_cards}>
                <div className={ServicesCSS.Service_card}>
                    <i className="ri-hotel-line"></i>
                    <h3>Basic Faclities</h3>
                    <p>- Reception /Front Desk</p>
                    <p>- Room Services</p>
                    <p>- House Keeping</p>
                    <p>-WiFi & Parking</p>
                    </div>
                <div className={ServicesCSS.Service_card}>
                    <i className="ri-hotel-bed-line"></i>
                    <h3>Room Aminities</h3>
                    <p>- Comfortable Bedding</p>
                    <p>- Bed Room and Pool</p>
                    <p>- TV and AC</p>
                    <p>- Bar </p>
                </div>
                <div className={ServicesCSS.Service_card}>
                    <i className="ri-goblet-line"></i>
                    <h3>Dining Options</h3>
                    <p>- Restaurant Cafe</p>
                    <p>- Bar & Lounge</p>
                    <p>- Cafe & Canteen</p>
                    <p>- Room Serives</p>
                </div>
                <div className={ServicesCSS.Service_card}>
                    <i className="ri-restaurant-line"></i>
                    <h3>Special Features</h3>
                    <p>- Custom Rooms</p>
                    <p>- Cricket Ground</p>
                    <p>- Gym</p>
                </div>
            </div>
        </div>
    )
}

export default Services