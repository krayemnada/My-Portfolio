import React from "react";
import CTA from "./CTA";
import ME from "../../images/me.png";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";
const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello T'm</h5>
                <h1>Nada Kraiem</h1>
                <h5 className="text-light"> Fullstack Developer</h5>
                <CTA />
                <a href="#contact" className="scroll_down">
                    Scroll Down{" "}
                </a>
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>
            </div>
        </header>
    );
};

export default Header;
