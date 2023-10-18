import "./Property.css";
import Button from "react-bootstrap/Button";
import Home from "../assets/image/bro.png"

const Property = () => {
  return (
    <>
      <div id="component" class="container-fluid py-3">
        <p class="text-center text-black fs-3 fw-bold font-family-Montserrat  m-0 px-3 py-2">
          Driving Property Inquiries to Conversions
        </p>
        <div id="component" class="container-fluid py-3">
          <p class="text-center text-dark fs-5 fw-normal font-family-Open Sans  m-0 px-3 py-2">
            Streamlined Strategies for Real Estate Success
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <p>
             
            <img src={Home} alt="" height="250px" width="350px" />

            </p>
          </div>
          <div className="col-8">
            <p className="text-black fs-3 fw-bold font-family-Montserrat  m-0 px-3 py-2">
              Optimized Path to Property Purchase
            </p>
            <p className="text-dark fs-5 fw-normal font-family-Open Sans  m-0 px-3 py-2">
              In the dynamic realm of real estate, the journey from a property
              inquiry to a successful conversion demands a well-crafted
              approach. At Osumare, we specialize in guiding potential buyers
              through this journey seamlessly, maximizing
              inquiries-turned-conversions with expert strategies.
            </p>
            <Button variant="primary my-4">Get Started</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
