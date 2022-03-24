import React from "react";
import "./Portfolio.css";
import IMG1 from "../../images/api.jpg";
import IMG2 from "../../images/auth.png";
import IMG3 from "../../images/jobs.jpg";
import IMG4 from "../../images/movie.png";
import IMG5 from "../../images/todo.jpg";
// import IMG6 from '../../images/api.jpg'

const Portfolio = () => {
    return (
        <div>
            <section id="portfolio">
                <h5>My Recent Work</h5>
                <h2>Poortfolio</h2>
                <div className="container portfolio_container">
                    <article className="portfolio_item">
                        <div className="portfolio_item-image">
                            <img src={IMG1} alt="IMG1" />
                        </div>
                        <h3>Challange API</h3>
                        <div className="portfolio_item-cta">
                            <a
                                href="https://github.com/krayemnada?tab=repositories"
                                className="btn"
                                target="_blank"
                            >
                                Github
                            </a>
                        </div>
                        {/* <a href="https://github.com/krayemnada?tab=repositories" className="btn bnt-primary"></a> */}
                    </article>
                    <article className="portfolio_item">
                        <div className="portfolio_item-image">
                            <img src={IMG2} alt="IMG1" />
                        </div>
                        <h3>authentication</h3>
                        <div className="portfolio_item-cta">
                            <a
                                href="https://github.com/krayemnada?tab=repositories"
                                className="btn"
                                target="_blank"
                            >
                                Github
                            </a>
                        </div>
                        {/* <a href="https://github.com/krayemnada?tab=repositories" className="btn bnt-primary"></a> */}
                    </article>
                    <article className="portfolio_item">
                        <div className="portfolio_item-image">
                            <img src={IMG3} alt="IMG1" />
                        </div>
                        <h3>Forsa Jobs</h3>
                        <div className="portfolio_item-cta">
                            <a
                                href="https://github.com/krayemnada?tab=repositories"
                                className="btn"
                                target="_blank"
                            >
                                Github
                            </a>
                        </div>
                        {/* <a href="https://github.com/krayemnada?tab=repositories" className="btn bnt-primary"></a> */}
                    </article>
                    <article className="portfolio_item">
                        <div className="portfolio_item-image">
                            <img src={IMG4} alt="IMG1" />
                        </div>
                        <h3>Movie App</h3>
                        <div className="portfolio_item-cta">
                            <a
                                href="https://github.com/krayemnada?tab=repositories"
                                className="btn"
                                target="_blank"
                            >
                                Github
                            </a>
                        </div>
                        {/* <a href="https://github.com/krayemnada?tab=repositories" className="btn bnt-primary"></a> */}
                    </article>
                    <article className="portfolio_item">
                        <div className="portfolio_item-image">
                            <img src={IMG5} alt="IMG1" />
                        </div>
                        <h3>ToDo App</h3>
                        <div className="portfolio_item-cta">
                            <a
                                href="https://github.com/krayemnada?tab=repositories"
                                className="btn"
                                target="_blank"
                            >
                                Github
                            </a>
                        </div>
                        {/* <a href="https://github.com/krayemnada?tab=repositories" className="btn bnt-primary"></a> */}
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
