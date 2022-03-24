import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
    return (
        <div>
            <footer>
                <a href="#" className="footer_logo">
                    Nada
                </a>
                <ul className="permalinks">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

                <div className="footer_socials">
                    <a href="https://www.facebook.com/nada.krayem.52">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.facebook.com/nada.krayem.52">
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com/nada.krayem.52">
                        <AiOutlineLinkedin />
                    </a>
                    {/* <a href="https://www.facebook.com/nada.krayem.52"></a> */}
                </div>

                <div className="footer_copyright">
                    <small>&copy; Nada kraiem. All rights reserved. </small>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
