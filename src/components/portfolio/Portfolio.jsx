import React from "react";
import "./Portfolio.css";
const Portfolio = () => {
    return (
        <div>
            <section id="portfolio">
                <h5>My Recent Work</h5>
                <h2>Poortfolio</h2>
                <div className="container portfolio_container">
                    <article className="portfolio_item">
                        <div className="portfolio_item-image"> </div>
                        <h3>This is a portfolio item title</h3>
                        <a
                            href="https://github.com/krayemnada?tab=repositories"
                            className="btn"
                            target="_blank"
                        >
                            Github
                        </a>
                        {/* <a href="https://github.com/krayemnada?tab=repositories" className="btn bnt-primary"></a> */}
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
