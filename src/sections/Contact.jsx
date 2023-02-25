import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ButtonWithIcon from "../components/ButtonWithIcon";

const Contact = () => {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [disableBtn, setDisableBtn] = useState(true);

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const validateForm = () => {
      if (
        form.from_name.length > 0 &&
        validateEmail(form.from_email) &&
        form.subject.length > 0 &&
        form.message.length > 0
      ) {
        setDisableBtn(false);
      } else {
        setDisableBtn(true);
      }
    };

    const validateEmail = () => {
      const pattern = /[a-z0-9.]{1,64}@[a-z0-9.]{1,64}/i;
      if (form.from_email.match(pattern)) {
        return true;
      }
      return false;
    };

    validateForm();
  }, [form]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_g98ns0w", "template_l77je4u", form, "7KVwDCNVK_O3q_M5I")
      .then(
        (result) => {
          alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );

    setForm({
      from_name: "",
      from_email: "",
      subject: "",
      message: "",
    });
    setDisableBtn(true);
  };

  return (
    <div className="container contact-container" id="contact">
      <h2 className="h2-title red">Send me a message</h2>
      <p className="text-center">
        Interested in getting to know more about me? Please reach out!
      </p>
      <div className="form-container">
        <form className="contact-form" autoComplete="off">
          <label htmlFor="user_name" className="form-name">
            Name
          </label>
          <input
            type={"text"}
            name="from_name"
            value={form.from_name}
            onChange={updateForm}
            className="input form-name-input"
            autoComplete="off"
            required
          />
          <label htmlFor="from_email" className="form-email">
            Email
          </label>
          <input
            type="email"
            name="from_email"
            value={form.from_email}
            onChange={updateForm}
            className="input form-email-input"
            autoComplete="off"
            required
            pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
          />
          <label htmlFor="user_name" className="form-subject">
            Subject
          </label>
          <input
            type={"text"}
            name="subject"
            value={form.subject}
            onChange={updateForm}
            className="input form-subject-input"
            autoComplete="off"
            required
          />
          <label htmlFor="message" className="form-message">
            Message
          </label>
          <textarea
            name="message"
            className="input form-textarea"
            autoComplete="off"
            value={form.message}
            onChange={updateForm}
            required
          ></textarea>
          <ButtonWithIcon
            text="Send Message"
            icon={faPaperPlane}
            handleOnClick={sendEmail}
            className="form-submit"
            disabled={disableBtn}
          />
          {/* <input type="submit" value="Send" className="form-submit" /> */}
        </form>
      </div>
      <h3 className="h3-title white">Or visit my LinkedIn page</h3>
      <a
        href="https://www.linkedin.com/in/chhaianpin"
        target={"_blank"}
        className="text-center"
        rel="noreferrer"
      >
        <img
          src="./images/images-linkedin-logo-png-14.png"
          alt="Linked in"
          className="contact-logo"
        />
      </a>
    </div>
  );
};

export default Contact;
