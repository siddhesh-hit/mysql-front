import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-homeBack">
      <div className="footer-copyright text-center">
        <p className="footer">
          {" "}
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="#">
            {" "}
            All Rights Reserved. Design & Developed by DIY Strategies
          </a>
        </p>
        <Link to="/Privacypolicy">Privacy Policy</Link>
        <Link to="/Termscondition">Terms & Condition</Link>
      </div>
    </footer>
  );
};

export default Footer;
