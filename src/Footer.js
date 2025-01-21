import "./Footer.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        <FaPhoneAlt className="icon" />
        <a href="tel:0706983838" className="footer-link">
          070-698 38 38
        </a>
      </p>
      <p>
        <FaEnvelope className="icon" />
        <a href="mailto:peterengstrom@telia.com" className="footer-link">
          peterengstrom@telia.com
        </a>
      </p>
      <p>© 2024 Peter Engström Rörtjänst AB</p>
    </div>
  );
};

export default Footer;
