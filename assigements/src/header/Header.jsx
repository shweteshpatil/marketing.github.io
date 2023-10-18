import "./Header.css";
import logo from "../assets/image/69c6234b33868a4736d27770cd6c9dec.png";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <>
      <header className="navbar">
        <div>
          <img src={logo} alt="" className="logo-Img" />
        </div>
        <button className="btn">Contact us</button>
      </header>
      <div id="component" className="container-fluid py-3">
        <p className="text-center  m-0 px-5 py-3">
          <span className="text-black fs-1 fw-medium font-family-Montserrat">
            Elevate
          </span>
          <span className="text-primary fs-1 fw-bold font-family-Montserrat">
            Real Estate Success
          </span>
          <span className="text-black fs-1 fw-medium font-family-Montserrat">
            with
            <br />
            Osumare Digital Expertise
          </span>
        </p>
      </div>
      <div id="component" className="container-fluid py-0">
        <p className="text-center text-dark fs-5 fw-normal font-family-Open Sans  m-0 px-3 py-2">
          Tailored Solutions for Thriving in the Digital Real Estate Landscape
        </p>
      </div>
      <div id="component" className="container btn-1 py-3">
        <Button variant="primary">Get Started</Button>
      </div>
    </>
  );
};

export default Header;
