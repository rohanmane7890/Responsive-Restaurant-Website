import React from "react";
import footerCSS from './../Footer/Footer.module.css'
function Footer(){
    return(
        <footer className={`${footerCSS.footer_wrapper} section`}>
            <div className={footerCSS.FooterLinks}>
                <div className={footerCSS.logo}>
                    <h2>RoyalX</h2>
                    <p>RoyalX is a premium hospitality brand offering luxury stays, fitness, dining, and memorable experiences across the globe.</p>
                </div>
            </div>
            <div className={footerCSS.FooterLinks}>
                <h3>Quick Links</h3>
                <p>About</p>
                <p>Contact Us</p>
                <p>Rooms</p>
                <p>GYM</p>
                <p>Restaurant</p>
            </div>
            <div className={footerCSS.FooterLinks}>
                <h3>City Branches</h3>
                <p>India</p>
                <p>Mexico</p>
                <p>Germany</p>
                <p>Australia</p>
                <p>California</p>
            </div>
            <div className={footerCSS.FooterLinks}>
                <h3>Contact</h3>
                <p>Address: <span>360 Street- Mumbai , India </span></p>
                <p>Email: <span>ex@gmail.com</span></p>
                <p>Phone: <span>9254347445</span></p>
            </div>
        </footer>
    )
}

export default Footer