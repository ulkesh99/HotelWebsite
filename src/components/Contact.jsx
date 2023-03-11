import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'


function Contact() {
    const position = [51.505, -0.09]

        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_jqwljtk', 'template_ibyjrj8', form.current, 'IIa79sOKB32Rn1CRQ')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        };
  return (
      <>
        <section style={{height: '100vh', textAlign: 'center', paddingTop: '10vh'}} id="contactUs" className='contactUs'>
          <div className="container">
            <div className="row">
                
              <h1 className='contactHeading' style={ {textDecoration:'underline'}}>Contact Us</h1>
                  <div className="col-md d-flex flex-row justify-content-center align-items-center contactFormSection">
              <form ref={form} onSubmit={sendEmail}>
  <div className="form-row">
    <div className="form-group col-md-6">
      {/* <label>Name</label> */}
      <input type="text" style={{width: '30vw', marginBottom: '20px'}} className="form-control" name='name' placeholder="Username"/>
    </div>
    <div className="form-group col-md-6">
      {/* <label>Mobile No.</label> */}
      <input type="number" style={{width: '30vw', marginBottom: '20px'}} className="form-control" name='number' placeholder="Mobile No."/>
    </div>
  </div>
  <div className="form-group">
    {/* <label>Email</label> */}
    <input type="email" style={{width: '30vw', marginBottom: '20px'}} className="form-control" name='email' placeholder="Email ID"/>
  </div>
  <div className="form-group">
    {/* <label>Message</label> */}
    <textarea type="text" style={{width: '30vw', marginBottom: '20px'}} className="form-control" name='message' placeholder="Message"></textarea>
  </div>
  
  <button type="submit" className="btn btn-primary">Sign in</button>
      {/* <input className='bn632-hover bn21 contactBtn' type="submit" value="Send" /> */}
      </form>       
        {/* <div className=" mapSection col-md d-flex flex-row justify-content-center align-items-center "> */}
                  
              <MapContainer className='mapss' center={position} zoom={15} style={{ width: '45vw', height: '60vh', paddingLeft:'20px', marginLeft: '40px'}} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
      Manori Village, Vai Lakanni Mata Nagar, Malad West, Mumbai - 400095 (Opp Kharadala Talao) <br />
      </Popup>
    </Marker>
  </MapContainer>
                </div>
        </div>
        </div>
            {/* </div> */}
            </section>
              
    </>
  )
}

export default Contact
