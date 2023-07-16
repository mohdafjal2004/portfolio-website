import { useRef, useState } from "react";
import gh from "../assets/github.png";
import li from "../assets/linkedin.png";
import twt from "../assets/twitter.png";
import "../Styles/Contact.css";
import emailjs from "@emailjs/browser";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import address from "../assets/location.png";

const Contact = () => {
  const [res, setRes] = useState(false);
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const msgRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const send = emailjs.sendForm(
        "service_xer0sps",
        "template_bw229df",
        form.current,
        "DMj4GPEov6wgI8RJw"
      );

      setRes(true);

      setTimeout(() => {
        setRes(false);
      }, 3000);

      setTimeout(() => {
        nameRef.current.value = "";
        emailRef.current.value = "";
         msgRef.current.value = "";
      }, 3000);

     

      console.log(send);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact__body" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <div className="form_input">
            <span>Name</span>
            <input
              type="text"
              placeholder="Enter you name"
              name="from_name"
              ref={nameRef}
            />
          </div>
          <div className="form_input">
            <span>Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              ref={emailRef}
            />
          </div>
          <div className="form_input">
            <span>Message</span>
            <textarea
              name="message"
              placeholder="Type your message..."
              ref={msgRef}
            ></textarea>
          </div>
          <div className="form_button">
            <button type="submit">Send</button>
          </div>
          <span className="res_style">{res ? "Sent ✅" : ""}</span>
        </form>

        <div className="contact_socials">
          <div className="contact_details">
            <span>
              <img src={email} alt="email_icon" /> mohdafjalgci2018@gmail.com
            </span>
            <span>
              <img src={phone} alt="phone_icon" /> +91 8952989418
            </span>
            <span>
              <img src={address} alt="address_icon" /> Jaipur, Rajasthan
            </span>
          </div>
          <div>
            <div className="social_parent">
              <a href="https://github.com/mohdafjal2004">
                <img src={gh} alt="" className="socials" />
              </a>
              <a href="https://www.linkedin.com/in/mohd-afjal-9772941b8/">
                <img src={li} alt="" className="socials" />
              </a>
              <a href="https://twitter.com/afjal07071998">
                <img src={twt} alt="" className="socials" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
