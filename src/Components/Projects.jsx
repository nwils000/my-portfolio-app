import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CursorAnimation from "./CursorAnimation";
import birthdayDataApp from "../Videos/birthdayDataApp.mp4";
import recipeListApp from "../Videos/recipeListApp.mp4";
import flashcardApp from "../Videos/flashcardApp.mp4";
import amazonCloneApp from "../Videos/amazonCloneApp.mp4";
import portfolioProject from "../Videos/portfolioProject.mp4";
import gitLogo from "../Photos/gitLogo.png";
import gitLogoWhite from "../Photos/gitLogoWhite.png";
import birthday from "../Photos/birthday.png";
import amzin from "../Photos/amzin.png";
import recipes from "../Photos/recipes.png";
import flashcard from "../Photos/flashcard.png";
import portfolio from "../Photos/portfolio.png";

export default function Projects({ cursorClass }) {
  const [gitHubLogo, setGitHubLogo] = useState(gitLogo);
  const [autoplay, setAutoplay] = useState(true);
  const [videoLink, setVideoLink] = useState(
    "https://amzin-clone.netlify.app/"
  );
  const [gitHubLink, setGitHubLink] = useState(
    "https://github.com/nwils000/amazon-clone-app"
  );
  const [videoLink2, setVideoLink2] = useState(
    "https://nathan-wilson.netlify.app/"
  );
  const [gitHubLink2, setGitHubLink2] = useState(
    "https://github.com/nwils000/my-portfolio-app"
  );
  const [projectTitle, setProjectTitle] = useState("Amazon Clone");
  const [projectTitle2, setProjectTitle2] = useState("Portfolio");

  useEffect(() => {
    CursorAnimation();
    var w = window.innerWidth;
    if (w <= 768) {
      setAutoplay(false);
      setVideoLink("https://nathan-wilson.netlify.app/");
      setGitHubLink("https://github.com/nwils000/my-portfolio-app");
      setVideoLink2("https://amzin-clone.netlify.app/");
      setGitHubLink2("https://github.com/nwils000/amazon-clone-app");
      setProjectTitle("Portfolio");
      setProjectTitle2("Amazon Clone");
    }
  }, []);

  return (
    <div className="projects__wrapper" id="projects">
      <Navbar cursorClass={cursorClass} />
      <div className="projects__grid">
        <div
          data-aos="zoom-in"
          data-aos-duration="700"
          className="projects__container"
        >
          {" "}
          <div className="projects__content">
            <h2>{projectTitle}</h2>
            <a href={videoLink} target="_blank" rel="noreferrer">
              <video
                autoPlay={autoplay}
                muted
                loop
                src={amazonCloneApp}
              ></video>
              <img
                className="screenshot"
                src={portfolio}
                alt="screenshot of project"
              ></img>
            </a>
            <div className="projects__button-container">
              <a href={gitHubLink} target="_blank" rel="noreferrer">
                <img
                  className="projects-git-hub__logo"
                  src={gitHubLogo}
                  alt="Git Hub logo"
                  onMouseEnter={() => setGitHubLogo(gitLogoWhite)}
                  onMouseLeave={() => setGitHubLogo(gitLogo)}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="700"
          className="projects__container"
        >
          {" "}
          <div className="projects__content">
            <h2>Flashcards</h2>
            <a
              href="https://nathans-flashcard-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <video autoPlay={autoplay} muted loop src={flashcardApp}></video>
              <img
                className="screenshot"
                src={flashcard}
                alt="screenshot of project"
              ></img>
            </a>
            <div className="projects__button-container">
              <a
                href="https://github.com/nwils000/flashcard-app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="projects-git-hub__logo"
                  src={gitHubLogo}
                  alt="Git Hub logo"
                  onMouseEnter={() => setGitHubLogo(gitLogoWhite)}
                  onMouseLeave={() => setGitHubLogo(gitLogo)}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="700"
          className="projects__container"
        >
          {" "}
          <div className="projects__content">
            <h2>Birthday Global Events</h2>
            <a
              href="https://birthday-historical-data.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <video
                autoPlay={autoplay}
                muted
                loop
                src={birthdayDataApp}
              ></video>
              <img
                className="screenshot"
                src={birthday}
                alt="screenshot of project"
              ></img>
            </a>
            <div className="projects__button-container">
              <a
                href="https://github.com/nwils000/birthday-data-app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="projects-git-hub__logo"
                  src={gitHubLogo}
                  alt="Git Hub logo"
                  onMouseEnter={() => setGitHubLogo(gitLogoWhite)}
                  onMouseLeave={() => setGitHubLogo(gitLogo)}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="700"
          className="projects__container"
        >
          {" "}
          <div className="projects__content">
            <h2>Recipe List</h2>
            <a
              href="https://nathans-recipe-list.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <video autoPlay={autoplay} muted loop src={recipeListApp}></video>
              <img
                className="screenshot"
                src={recipes}
                alt="screenshot of project"
              ></img>
            </a>
            <div className="projects__button-container">
              <a
                href="https://github.com/nwils000/recipe-list-app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="projects-git-hub__logo"
                  src={gitHubLogo}
                  alt="Git Hub logo"
                  onMouseEnter={() => setGitHubLogo(gitLogoWhite)}
                  onMouseLeave={() => setGitHubLogo(gitLogo)}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="700"
          className="projects__container"
        >
          {" "}
          <div className="projects__content">
            <h2>{projectTitle2}</h2>
            <a href={videoLink2} target="_blank" rel="noreferrer">
              <video
                autoPlay={autoplay}
                muted
                loop
                src={portfolioProject}
              ></video>
              <img
                className="screenshot"
                src={amzin}
                alt="screenshot of project"
              ></img>
            </a>
            <div className="projects__button-container">
              <a href={gitHubLink2} target="_blank" rel="noreferrer">
                <img
                  className="projects-git-hub__logo"
                  src={gitHubLogo}
                  alt="Git Hub logo"
                  onMouseEnter={() => setGitHubLogo(gitLogoWhite)}
                  onMouseLeave={() => setGitHubLogo(gitLogo)}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
