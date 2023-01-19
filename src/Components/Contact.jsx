import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import CursorAnimation from "./CursorAnimation";
import emailjs from "@emailjs/browser";

export default function Contact({
  handleInputHover,
  handleInputLeave,
  cursorClass,
}) {
  const form = useRef();
  useEffect(() => {
    CursorAnimation();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3t589y2",
        "template_u5t6zq1",
        form.current,
        "aEYQQP-65mEPEsaXX"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Meassage sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact__wrapper">
      <Navbar cursorClass={cursorClass} />
      <div className="form__container">
        <h1>nwils000@gmail.com</h1>
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <label contactLabel>Name</label>
          <input
            onMouseEnter={handleInputHover}
            onMouseLeave={handleInputLeave}
            className="contact__input"
            type="text"
            name="user_name"
          />
          <label contactLabel>Email</label>
          <input
            onMouseEnter={handleInputHover}
            onMouseLeave={handleInputLeave}
            className="contact__input"
            type="email"
            name="user_email"
          />
          <label contactLabel>Message</label>
          <textarea
            className="contact__text-area contact__input"
            onMouseEnter={handleInputHover}
            onMouseLeave={handleInputLeave}
            name="message"
            style={{ resize: "none" }}
          />
          <input className="contact__input" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
