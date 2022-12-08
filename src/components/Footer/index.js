import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="pageLine"></div>
      <div className="footerSupport">
        <Link className="footerLink" to="/privacy-policy">
          Privacy Policy
        </Link>
        <Link className="footerLink" to="/terms-and-conditions">
          Terms and Conditions
        </Link>
        <Link className="footerLink" to="/contact">
          Contact
        </Link>
      </div>
      <div className="footerIcons">
        <Link className="twitter" to="https://twitter.com/codaisseur" />
        <Link
          className="youtube"
          to="https://www.youtube.com/channel/UC_V7gP14DNtAhAeL3c4G8Yg"
        />
        <Link
          className="linkedin"
          to="https://www.linkedin.com/school/development-bootcamp/"
        />
        <Link className="insta" to="https://www.instagram.com/codaisseur/" />
        <Link className="facebook" to="https://www.facebook.com/codaisseur" />
      </div>
      <div className="copyright">
        Copyright &copy; 2022 All Rights Reserved by KALLOS
      </div>
    </footer>
  );
};

export { Footer };
