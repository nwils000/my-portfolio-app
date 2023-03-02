import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import CursorAnimation from "./CursorAnimation";
import emailjs from "@emailjs/browser";

export default function Contact({
  handleInputHover,
  handleInputLeave,
  cursorClass,
}) {
  const [isSent, setIsSent] = useState(false);

  const form = useRef();
  useEffect(() => {
    CursorAnimation();
  }, []);

  const handleClick = () => {
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 2000);
  };

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
          console.log("Message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact__wrapper" id="contact">
      <Navbar cursorClass={cursorClass} />
      <div className="form__container">
        <h1 data-aos="fade-right" data-aos-duration="1000">
          nwils000@gmail.com
        </h1>
        <form
          data-aos="fade-left"
          data-aos-duration="1000"
          className="contact__form"
          ref={form}
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input
            onMouseEnter={handleInputHover}
            onMouseLeave={handleInputLeave}
            className="contact__input"
            type="text"
            name="user_name"
          />
          <label>Email</label>
          <input
            onMouseEnter={handleInputHover}
            onMouseLeave={handleInputLeave}
            className="contact__input"
            type="email"
            name="user_email"
          />
          <label>Message</label>
          <textarea
            className="contact__text-area contact__input"
            onMouseEnter={handleInputHover}
            onMouseLeave={handleInputLeave}
            name="message"
            style={{ resize: "none" }}
          />
          <input
            onClick={() => handleClick()}
            className="contact__input"
            type="submit"
            value="Send"
          />
          {isSent && <div className="email-sent-message">Email Sent!</div>}
        </form>
      </div>
    </div>
  );
}
