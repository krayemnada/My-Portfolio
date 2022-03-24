// import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_aci0aoi",
            "template_6xp73to",
            form.current,
            "zidFMmZS5GWp7m2Mu"
        );
        e.target.reset();
    };
    return (
        <div>
            <section id="contact">
                <h5>Get In Touch</h5>
                <h2>Contact Me </h2>
                <div className="container contact_container">
                    <div className="contact_options">
                        <article className="contact_option">
                            <MdOutlineEmail className="contact_option-icon" />
                            <h4>Email</h4>
                            <h5>nadakrayem41@gmail.com</h5>
                            <a
                                href="mailto:nadakrayem41@gmail.com"
                                target="_blank"
                            >
                                Send a message
                            </a>
                        </article>
                        <article className="contact_option">
                            <RiMessengerLine className="contact_option-icon" />
                            <h4>Messenger</h4>
                            <h5>Naadaa krayem</h5>
                            <a
                                href="https://m.me/nada.krayem.52"
                                target="_blank"
                            >
                                Send a message{" "}
                            </a>
                        </article>
                        <article className="contact_option">
                            <BsWhatsapp className="contact_option-icon" />
                            <h4>WhatsApp</h4>
                            <h5>+21628105262</h5>
                            <a
                                href="https://api.whatsapp.com/send?phone+21628105262"
                                target="_blank"
                            >
                                {" "}
                                Send a message
                            </a>
                        </article>
                    </div>

                    {/* END OF CONTACT option */}
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Full Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="7"
                            required
                        ></textarea>
                        <button type="submit" className="btn btn-primary">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
