import "./Estate.css";
import Button from "react-bootstrap/Button";
import New from "../assets/image/directing-the-arrow-up-cuate.png"

// import lern from "../assets/image/69c6234b33868a4736d27770cd6c9dec.png";
const Estate = () => {
  return (
    <>
      <div id="component" className="container-fluid py-5">
        <p className="text-center text-black fs-3 fw-bold font-family-Montserrat  m-0 px-3 py-2">
          Real Estate-Focused Digital Mastery
        </p>
      </div>


      
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <img src={New} alt="" height="250px" width="350px" />
          </div>
          <div className="col-md-8">
            <p className="text-black fs-3 fw-bold font-family-Montserrat  m-0 px-3 py-2">
              Unlock the Potential of Digital Real Estate Excellence
            </p>
            <p className="text-dark fs-5 fw-normal font-family-Open Sans  m-0 px-3 py-2">
              At Osumare, we understand that the real estate landscape demands a
              digital presence that aligns with the intricacies of property
              marketing. Our range of specialized services is meticulously
              designed to catapult your brands success in the ever-evolving
              digital property market.
            </p>
            <Button variant="primary">Get Started</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Estate;
