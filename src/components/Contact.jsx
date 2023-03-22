import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import contact from '../images/contact.svg'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Contact() {
  const position = [19.20970684086274, 72.7885903734282];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jqwljtk",
        "template_ibyjrj8",
        form.current,
        "IIa79sOKB32Rn1CRQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <section
        style={{height: "100vh", textAlign: "center", paddingTop: "10vh" }}
        id="contactUs"
        className="contactUs"
      >
        <div className="ContactPage container justify-content-center align-items-center d-flex flex-wrap" >
          <div className="row">
            <div className="col-md d-flex flex-row justify-content-center align-items-center contactFormSection">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-row">
                  <h1
                    className="contactHeading"
                    style={{ textDecoration: "underline" }}
                  >
                    Contact Us
                  </h1>
                  <div className="form-group">
                    {/* <label>Name</label> */}
                    <label id="contactlabels" htmlFor="name">Name :</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    {/* <label>Mobile No.</label> */}
                    <label id="contactlabels" htmlFor="number">Mob No.</label>
                    <input
                      type="number"
                      className="form-control"
                      name="number"
                      placeholder="Mobile No."
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label id="contactlabels">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email ID"
                  />
                </div>
                <div className="form-group">
                  <label id="contactlabels">Message</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-50">
                  SEND
                </button>
                {/* <input className='bn632-hover bn21 contactBtn' type="submit" value="Send" /> */}
              </form>
              
                
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
