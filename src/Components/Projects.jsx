import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CursorAnimation from "./CursorAnimation";
import birthdayDataApp from "../Videos/birthdayDataApp.mp4";

export default function Projects({ cursorClass }) {
  const [Active1, setActive1] = useState(true);
  const [Active2, setActive2] = useState(true);
  const [Active3, setActive3] = useState(true);
  const [Active4, setActive4] = useState(true);

  useEffect(() => {
    CursorAnimation();
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
            <video autoPlay muted loop src={birthdayDataApp}></video>
            <div className="projects__button-container">
              <button onClick={handleClick1}>Learned</button>
              <button>Git</button>
            </div>
            <div
              className={
                Active1
                  ? "projects__content-learned"
                  : "projects__content-learned__clicked"
              }
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                corporis consequatur ex cum doloremque labore perferendis
                voluptates natus nesciunt, aperiam quaerat iste? Distinctio
                facere maxime dicta rerum. Commodi, debitis cumque!
              </p>
            </div>
          </div>
        </div>
        <div className="projects__container">
          {" "}
          <div className="projects__content">
            <video autoPlay muted loop src={birthdayDataApp}></video>
            <div className="projects__button-container">
              <button onClick={handleClick2}>Learned</button>
              <button>Git</button>
            </div>
            <div
              className={
                Active2
                  ? "projects__content-learned"
                  : "projects__content-learned__clicked"
              }
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                corporis consequatur ex cum doloremque labore perferendis
                voluptates natus nesciunt, aperiam quaerat iste? Distinctio
                facere maxime dicta rerum. Commodi, debitis cumque!
              </p>
            </div>
          </div>
        </div>
        <div className="projects__container">
          {" "}
          <div className="projects__content">
            <video autoPlay muted loop src={birthdayDataApp}></video>
            <div className="projects__button-container">
              <button onClick={handleClick3}>Learned</button>
              <button>Git</button>
            </div>
            <div
              className={
                Active3
                  ? "projects__content-learned"
                  : "projects__content-learned__clicked"
              }
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda tempora recusandae laborum natus repellat voluptatum
                alias provident, incidunt, neque voluptatibus similique
                reprehenderit? Officia deserunt debitis ab sed perferendis ea
                amet?
              </p>
            </div>
          </div>
        </div>
        <div className="projects__container">
          {" "}
          <div className="projects__content">
            <video autoPlay muted loop src={birthdayDataApp}></video>
            <div className="projects__button-container">
              <button onClick={handleClick4}>Learned</button>
              <button>Git</button>
            </div>
            <div
              className={
                Active4
                  ? "projects__content-learned"
                  : "projects__content-learned__clicked"
              }
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda tempora recusandae laborum natus repellat voluptatum
                alias provident, incidunt, neque voluptatibus similique
                reprehenderit? Officia deserunt debitis ab sed perferendis ea
                amet?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
