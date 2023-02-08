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
  const [Active1, setActive1] = useState(true);
  const [Active2, setActive2] = useState(true);
  const [Active3, setActive3] = useState(true);
  const [Active4, setActive4] = useState(true);
  const [gitHubLogo, setGitHubLogo] = useState(gitLogo);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    CursorAnimation();
    var w = window.innerWidth;
    if (w <= 768) setAutoplay(false);
  }, []);

  function handleClick1() {
    Active1 ? setActive1(false) : setActive1(true);
  }
  function handleClick2() {
    Active2 ? setActive2(false) : setActive2(true);
  }
  function handleClick3() {
    Active3 ? setActive3(false) : setActive3(true);
  }
  function handleClick4() {
    Active4 ? setActive4(false) : setActive4(true);
  }

  return (
    <div className="projects__wrapper">
      <Navbar cursorClass={cursorClass} />
      <div className="projects__grid">
        <div className="projects__container">
          {" "}
          <div className="projects__content">
            <h2>Amazon Clone</h2>
            <a
              href="https://amzin-clone.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <video
                autoPlay={autoplay}
                muted
                loop
                src={amazonCloneApp}
              ></video>
              <img
                className="screenshot"
                src={amzin}
                alt="screenshot of project"
              ></img>
            </a>
            <div className="projects__button-container">
              <button onClick={handleClick1}>Skills Used</button>
              <a
                href="https://github.com/nwils000/amazon-clone-app"
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
            <div
              className={
                Active1
                  ? "projects__content-learned"
                  : "projects__content-learned__clicked"
              }
            >
              <p>
                1. CSS Sprites <br />
                2. Large arrays of object
                <br />
                3. State management
                <br />
                4. DOM manipulation
              </p>
            </div>
          </div>
        </div>
        <div className="projects__container">
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
              <button onClick={handleClick2}>Skills Used</button>
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
            <div
              className={
                Active2
                  ? "projects__content-learned"
                  : "projects__content-learned__clicked"
              }
            >
              <p>
                1. Communicating with API <br />
                2. CSS Animations <br />
                3. Dynamic classes using JavaScript
              </p>
            </div>
          </div>
        </div>
        <div className="projects__container">
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
              <button onClick={handleClick3}>Skills Used</button>
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
            <div
              className={
                Active3
                  ? "projects__content-learned"
                  : "projects__content-learned__clicked"
              }
            >
              <p>
                1. State management
                <br />
                2. Communicating with API
                <br />
                3. React hooks such as useEffect and useRef
              </p>
            </div>
          </div>
        </div>
        <div className="projects__container">
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
              <button onClick={handleClick4}>Skills Used</button>
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
            <div
              className={
                Active4
                  ? "projects__content-learned"
                  : "projects__content-learned__clicked"
              }
            >
              <p>
                1. useRef React hook
                <br />
                2. JavaScript methods to create objects and filter arrays
                <br />
                3. Saving to local storage
              </p>
            </div>
          </div>
        </div>
        <div className="projects__container">
          {" "}
          <div className="projects__content">
            <h2>Portfolio</h2>
            <a
              href="https://nathan-wilson.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <video
                autoPlay={autoplay}
                muted
                loop
                src={portfolioProject}
              ></video>
              <img
                className="screenshot"
                src={portfolio}
                alt="screenshot of project"
              ></img>
            </a>
            <div className="projects__button-container">
              <button onClick={handleClick4}>Skills Used</button>
              <a
                href="https://github.com/nwils000/my-portfolio-app"
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
            <div
              className={
                Active4
                  ? "projects__content-learned"
                  : "projects__content-learned__clicked"
              }
            >
              <p>
                1. Creating custom cursor effects
                <br />
                2. CSS animations
                <br />
                3. Optimized video performance
                <br />
                4. Manipulating the DOM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
