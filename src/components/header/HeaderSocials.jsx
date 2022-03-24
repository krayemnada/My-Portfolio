import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const HeaderSocials = () => {
    return (
        <div className="header_socials">
            <a
                href="https://www.linkedin.com/in/nada-kraiem-58296b203/"
                target="_blank"
            >
                <BsLinkedin />
            </a>
            <a href="https://github.com/krayemnada" target="_blank">
                {" "}
                <FaGithub />
            </a>
            <a href="https://www.facebook.com/nada.krayem.52" target="_blank">
                {" "}
                <FaFacebookSquare />
            </a>
        </div>
    );
};

export default HeaderSocials;
