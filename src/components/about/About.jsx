import React from "react";
import "./About.css";
import Me from "../../images/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
    return (
        <div>
            <section id="about">
                <h5>Get To Know </h5>
                <h2>About Me</h2>
                <div className="container about_container">
                    <div className="about_me">
                        <div className="about_me-image">
                            <img src={Me} alt="About" />
                        </div>
                    </div>

                    <div className="about_content">
                        <div className="about_cards">
                            <article className="about_card">
                                <FaAward className="about_icon" />
                                <h5>Experience</h5>
                                <small>No experience </small>
                            </article>
                            <article className="about_card">
                                <FiUsers className="about_icon" />
                                <h5>Clients</h5>
                                <small>200+ Worldwide</small>
                            </article>
                            <article className="about_card">
                                <VscFolderLibrary className="about_icon" />
                                <h5>Projects</h5>
                                <small>20+ Completed </small>
                            </article>
                        </div>
                        <p>
                            Je m’appelle Nada Kraiem, j’ai 24 ans et je suis
                            célibataire. Je suis diplômée en développement web
                            en Full-Stack React Js. Motivée, organisée,
                            rigoureuse, valorisant le travail en équipe et dotée
                            d’une volonté d’apprendre et d’un bon sens de
                            l’écoute et de l’analyse.
                        </p>

                        <a href="#contact" className="btn btn-primary">
                            {" "}
                            Let's Talk
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
