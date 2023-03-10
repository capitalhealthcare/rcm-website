import React, { useState, useEffect } from "react";

const AppointmentPopup = ({ message, isActive, onClose }) => {
  const [isOpen, setIsOpen] = useState(isActive);

  useEffect(() => {
    setIsOpen(isActive);
  }, [isActive]);



  return (
    <div className={`animated-popup ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
        {/* <div className="message">{message}</div>
        <button className="close-btn" onClick={onClose}>
          Close
        </button> */}
        <section className="appointment-section section-gap">
        <div className="container container-1500">
          <div className="appointment-form-two style-two">
           
            <div className="form-wrap">
              <div className="section-heading mb-50">
                <span className="tagline">Make an Appointment</span>
                <h2 className="title">
                  Fill-up The From to Get Our Medical Services{" "}
                </h2>
              </div>
              <form onSubmit={(e) => e.preventDefault()} action="#">
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-field">
                      <input type="text" placeholder="Your Full Name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field">
                      <input type="email" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field">
                      <select>
                        <option value="1" selected disabled>
                          Choose Doctors
                        </option>
                        <option value="2">Doctor One</option>
                        <option value="3">Doctor Two</option>
                        <option value="4">Doctor Three</option>
                        <option value="5">Doctor Four</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field">
                      <input type="date" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field">
                      <select>
                        <option value="1" selected disabled>
                          Services Category
                        </option>
                        <option value="2">Service One</option>
                        <option value="3">Service Two</option>
                        <option value="4">Service Three</option>
                        <option value="5">Service Four</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field">
                      <button type="submit" className="template-btn">
                        Make an Appointment <i className="far fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>

     
    </div>
  );
};

export default AppointmentPopup;
