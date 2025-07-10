import React from "react";

import PropTypes from "prop-types";

import "./footer.css";

const Footer = (props) => {
  return (
    <footer className="footer-footer1 thq-section-padding">
      <div className="thq-divider-horizontal mb-5"></div>
      <div className="footer-max-width thq-section-max-width">
        <div className="footer-content">
          <div className="footer-links">
            <div className="footer-column2">
              <strong className="thq-body-large footer-column2-title">
                Contact
              </strong>
              <div className="footer-footer-links2">
                <div className="footer-link1">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <span className="thq-body-small">info@arysgarage.com</span>
                </div>
              </div>
              <div className="footer-footer-links2">
                <div className="footer-link1">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                  </svg>
                  <span className="thq-body-small">+91 7899216404</span>
                </div>
              </div>
              <div className="footer-footer-links2">
                <div className="footer-link1">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <span className="thq-body-small">
                    235, Binnamangala, 2nd Floor, 13th Cross Road, 2nd Stage,
                    Indira Nagar, Bengaluru - 560038
                  </span>
                </div>
              </div>
            </div>
            <div className="footer-column2">
              <strong className="thq-body-large footer-column2-title">
                {props.column2Title}
              </strong>
              <div className="footer-footer-links2">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {props.link7}
                </a>
              </div>
            </div>
            <div className="footer-newsletter">
              <span className="thq-body-small">
                Subscribe to our newsletter for the latest updates on new
                features and product releases.
              </span>
              <div className="footer-actions">
                <div className="footer-form">
                  <div className="footer-container">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="footer-text-input thq-input"
                    />
                  </div>
                  <button className="thq-button-outline footer-button">
                    <span className="thq-body-small">{props.action1}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer-row">
            <span className="thq-body-small">{props.content3}</span>
            <div className="footer-footer-links3"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  link7: "Careers",
  action1: "Subscribe to our newsletter",
  content3: "© 2022 Company. All rights reserved.",
  logoSrc: "https://presentation-website-assets.teleporthq.io/logos/logo.png",
  logoAlt: "Company Logo",
  socialLinkTitleCategory: "Follow Us",
};

Footer.propTypes = {
  link7: PropTypes.string,
  action1: PropTypes.string,
  content3: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  socialLinkTitleCategory: PropTypes.string,
};

export default Footer;
