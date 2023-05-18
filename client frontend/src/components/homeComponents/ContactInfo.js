import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Contact Us</h5>
            <p>+63 927 348 9543</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Main Branch</h5>
            <p>Iba, Zambales</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>Locations</h5>
            <p>Iba, Zambales
            </p>
            <p>Boni Ave., Mandaluyong</p>
            <p>Rosario, Pasig</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
