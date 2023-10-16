import classes from "./LandingPage.module.css";
import Typewriter from "typewriter-effect";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMafa = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wfalcvm",
        "template_ct1b0en",
        form.current,
        "JnWMxCBVw6O6pQjD3"
      )
      .then(
        (result) => {
          toast.success("message sent", { position: toast.POSITION.BOTTOM_CENTER, autoClose: 3000 });
        },
        (error) => {
          toast.error("message failed", {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000,
          });
        }
      );
  };

    return (
      <>
        <div className={classes.Section4}>
          <div className={classes.aboutHeadingText}> contact</div>
          <div className={classes.divider}></div>
          <div className={classes.formContainer}>
            <div className={classes.formSibling}>
              <div className={classes.glassEffect}>
                <div className={classes.textContainer}>
                  <div>
                    <Typewriter
                      options={{
                        strings: ["Get in touch with Mafa Maketela."],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <form ref={form} className={classes.Section4Form} onSubmit={sendEmail}>
              <div className={classes.info}>
                Please fill out the form on this section to contact with me. Or
                call between 9:00 a.m. and 4:00 p.m. Monday through Friday.
              </div>
              <input
                type={"text"}
                name={"user_name"}
                placeholder="Your name"
              ></input>
              <input
                type={"email"}
                name={"user_email"}
                 placeholder="Your email"
              ></input>
              <textarea placeholder="Type your message to Mafa Maketela here." name={"message"}></textarea>
              <div className={classes.formButton}>
                <button
                  type="submit"
                >
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
};

export default ContactMafa;
