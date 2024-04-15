import "./portfolio.css";

import IMG2 from "../../assets/work1.jpg";
import IMG3 from "../../assets/work2.jpg";
import IMG6 from "../../assets/work3.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "RubyCode Blog Project",
      img: IMG2,
      description: "This site is a kind of social media platform. You can register and share your posts.",
      technologies: "React",
      link: "https://www.linkedin.com/in/bekzod-avazov-54b109269",
      github: "https://github.com/AvazovBekzod",
    },
    {
      id: 2,
      title: "Startup Landing Page",
      img: IMG3,
      description:
        "A dedicated, standalone web page built for specific campaigns and target audiences.",
      technologies: "Html | CSS | JavaScript | Next Js",
      link: "https://www.linkedin.com/in/bekzod-avazov-54b109269",
      github: "https://github.com/AvazovBekzod",
    },
    
    {
      id: 3,
      title: "Fs Poster Website",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "Html | Scss | Javascript",
      link: "https://www.linkedin.com/in/bekzod-avazov-54b109269",
      github: "https://github.com/AvazovBekzod",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
