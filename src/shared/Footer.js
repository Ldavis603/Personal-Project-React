import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";


function Footer() {
  return (
    <div className="Footer">
      <footer className="App-footer">
        <div className="footer-div">
          <h3>VISIT US</h3>
          <p>
            Fitness Connection
            <br />
            1234 Fitness Lane
            <br />
            Atlanta,GA 30228
          </p>
          <a className="footer__btn" href="mailto:example@gmail.com">
            Email Us
          </a>
        </div>
        <div>
          <h3>LINKS</h3>
          <Link to="/" className="class1">
            Home
          </Link>
          <br />
          <Link to="/account" className="class1">
            Account
          </Link>
          <br />
          <Link to="/exercise" className="class1">
            Exercise
          </Link>
          <br />
          <Link to="/contact" className="class1">
            Contact US
          </Link>
          <br />
        </div>

        <div>
          {/* <h3>CONNECT WITH US</h3> */}
          <i className="fa-brands fa-facebook"></i> 
          {/* <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>&nbsp; */}
          <i className="fa-brands fa-instagram"></i> &nbsp;
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div></div>
      </footer>
    </div>
  );
}

export default Footer;
