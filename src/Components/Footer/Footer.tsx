import React from "react";
import './Footer.scss';
import { AddressDetails, SocialMedia } from "../../Constants/Constant";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="address-container">
          <h3 className="col-heading">Get in Touch</h3>
          <div className="address-content">
            {AddressDetails.map((addressDetail: any) => {
              return (
                <div className="details-container">
                  <span className="details">{addressDetail.heading}</span>
                  <span>{addressDetail.content}</span>
                </div>
              )
            })}
          </div>
          <div className="social-media">
            {SocialMedia.map((handle: any) => {
              return (
                <div className="social-media-handle">{handle.icon}</div>
              )
            })}
          </div>
        </div>
        <div className="tax-exemption-container">
          <h3 className="col-heading">Income Tax Exemption</h3>
          <p>Contributions to Mahima Charitable Trust are eligible for Income Tax exemption under section 80G (5)(vi) of the Income Tax Act 1961 vide order No.DIT (E) BLR/80G/403/AADTM2051Q/ ITO(E)-2/Vol2012-2013 dt.14-02-2013 of the DIT (E) Bangalore.</p>
        </div>
        <div className="quick-links-container">
          <h3 className="col-heading">Quick Links</h3>
          <div>
            <p>Home</p>
            <p>About</p>
            <p>Causes</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div className="copyright">© Mahima Charitable Trust 2024</div>
    </div>
  );
};

export default Footer;
