import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./Experience.css";

const Experience = () => {
    return (
        <div>
            <section id="experience">
                <h5>What Skills I Have</h5>
                <h2>My Experience</h2>
                <div className="container experience_container">
                    <div className="experience_frontend">
                        <h3>Frontend Development</h3>
                        <div className="experience_content">
                            <article className="experience_details">
                                <BsPatchCheckFill className="experience_details-icon" />
                                <div>
                                    <h4>HTML</h4>
                                    <small>Experienced</small>
                                </div>
                            </article>
                            <article className="experience_details">
                                <BsPatchCheckFill className="experience_details-icon" />
                                <div>
                                    <h4>CSS</h4>
                                    <small>Experienced</small>
                                </div>
                            </article>
                            <article className="experience_details">
                                <BsPatchCheckFill className="experience_details-icon" />
                                <div>
                                    <h4>JavaScript</h4>
                                    <small>Experienced</small>
                                </div>
                            </article>
                            <article className="experience_details">
                                <BsPatchCheckFill className="experience_details-icon" />
                                <div>
                                    <h4>Bootstrap</h4>
                                    <small>Experienced</small>
                                </div>
                            </article>
                            <article className="experience_details">
                                <BsPatchCheckFill className="experience_details-icon" />
                                <div>
                                    <h4>React </h4>
                                    <small>Experienced</small>
                                </div>
                            </article>
                            <article className="experience_details">
                                <BsPatchCheckFill className="experience_details-icon" />
                                <div>
                                    <h4>Material-UI </h4>
                                    <small>Experienced</small>
                                </div>
                            </article>
                        </div>
                    </div>
                    {/* End of frontend */}

                    <div className="experience_backend">
                        <h3>Backend Development</h3>
                        <div className="experience_content">
                            <article className="experience_details">
                                <BsPatchCheckFill />
                                <div>
                                    <h4>Node js</h4>
                                    <small>Experienced</small>
                                </div>
                            </article>
                            <article className="experience_details">
                                <BsPatchCheckFill />
                                <div>
                                    <h4>MongoDb</h4>
                                    <small>Experienced</small>
                                </div>
                            </article>
                            <article className="experience_details">
                                <BsPatchCheckFill />
                                <div>
                                    <h4>Express</h4>
                                    <small>Experienced</small>
                                </div>
                            </article>
                            {/* <article className="experience_details">
                                <BsPatchCheckFill />
                                <h4>Bootstrap</h4>
                                <small>Experienced</small>
                            </article> */}
                            {/* <article className="experience_details">
                                <BsPatchCheckFill />
                                <h4>React </h4>
                                <small>intermediate</small>
                            </article> */}
                            {/* <article className="experience_details">
                                <BsPatchCheckFill />
                                <h4>Material-UI </h4>
                                <small>Experienced</small>
                            </article> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experience;
