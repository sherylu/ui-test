import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";

const Footer = () => {
  return (
    <>
      <hr role="separator" />
      <footer className="footer">
        <div className="footer__links">
          <ul>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <span>Follow us</span>
          <ul>
            <li>
              <a href="#">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
