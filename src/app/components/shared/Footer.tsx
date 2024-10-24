import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__wrapper container">
        <div className="footer__flex-wrapper">
          <div className="footer__contacts-wrapper">
            <a href="./index.html" className="logo logo--footer-modificator">
              <span className="logo--pre-color">Web</span>Studio
            </a>
            <address className="address">
              <p className="address__street">Kiev, Lesia Ukrainka Ave, 26</p>
              <ul className="address__contact-list">
                <li className="address__contact-item">
                  <a className="address__link" href="mailto:info@devstudio.com">
                    info@devstudio.com
                  </a>
                </li>
                <li className="address__contact-item">
                  <a className="address__link" href="tel:+380961111111">
                    +38 096 111 11 11
                  </a>
                </li>
              </ul>
            </address>
          </div>
          <div className="footer__social-wrapper">
            <p className="footer__social-title">Find us here</p>
            <ul className="social">
              <li className="social__item">
                <a
                  className="social__link footer--social-modificator"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FaInstagram size={20} aria-label="instagram" fill="white" />
                </a>
              </li>
              <li className="social__item">
                <a
                  className="social__link footer--social-modificator"
                  href="https://twitter.com/?lang=ru"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FaTwitter size={20} aria-label="Twitter" fill="white" />
                </a>
              </li>
              <li className="social__item">
                <a
                  className="social__link footer--social-modificator"
                  href="https://www.facebook.com//"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FaFacebookF size={20} aria-label="FaFacebook" fill="white" />
                </a>
              </li>
              <li className="social__item">
                <a
                  className="social__link footer--social-modificator"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FaLinkedinIn
                    size={20}
                    aria-label="LinkedinIn"
                    fill="white"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="subscribe">
          <form className="subscribe__form">
            <label className="subscribe__form-label" htmlFor="email">
              Subscribe to newsletter
            </label>
            <div className="subscribe__form-wrapper">
              <input
                className="subscribe__form-email-input"
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
              <button className="subscribe__form-email-button" type="submit">
                Subscribe
                <FaTelegramPlane
                  size={24}
                  className="subscribe__form-button-icon"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
