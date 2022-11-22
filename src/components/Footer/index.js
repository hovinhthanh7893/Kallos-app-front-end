// import "./styles.scss";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-container-links">
        <div className="footer-container-links-about">
          <Link className="footer-container-links-about-logo" to="/" />
          <p className="footer-container-links-about-para">
            The <b>COMPANY</b> was founded in 2022 by Ynte and Thanh, two
            students of class 62 of Codaisseur Academy in the Netherlands. This
            webshop was made as an exercise in week 4 for students to practice
            about front-end and back-end developing.
          </p>
        </div>
        <div className="footer-container-links-right">
          <div className="footer-container-links-right-events">
            <p className="group-title">EVENTS</p>
            <Link className="links" to="/">
              Christmas
            </Link>
            <Link className="links" to="/">
              Birthday
            </Link>
            <Link className="links" to="/">
              Wedding
            </Link>
            <Link className="links" to="/">
              Party
            </Link>
          </div>
          <div className="footer-container-links-right-support">
            <p className="group-title">SUPPORT</p>
            <Link className="links" to="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="links" to="/terms-and-conditions">
              Terms and Conditions
            </Link>
            <Link className="links" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-container-line"></div>
      <div className="footer-container-media">
        <div className="footer-container-media-copyright">
          <p>Copyright &copy; 2022 All Rights Reserved by Ynte & Thanh</p>
        </div>
        <div className="footer-container-media-icons">
          <a
            className="footer-container-media-icons-twitter"
            href="https://twitter.com/codaisseur"
            target="_blank"
          />
          <a
            className="footer-container-media-icons-youtube"
            href="https://www.youtube.com/channel/UC_V7gP14DNtAhAeL3c4G8Yg"
            target="_blank"
          />
          <a
            className="footer-container-media-icons-linkedin"
            href="https://www.linkedin.com/school/development-bootcamp/"
            target="_blank"
          />
          <a
            className="footer-container-media-icons-insta"
            href="https://www.instagram.com/codaisseur/"
            target="_blank"
          />
          <a
            className="footer-container-media-icons-facebook"
            href="https://www.facebook.com/codaisseur"
            target="_blank"
          />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
