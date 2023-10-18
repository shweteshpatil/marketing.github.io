import "./Digital.css";
import Back from "../assets/image/Frame 892.png";
import market from "../assets/image/flashlight-fill.svg";

const Digital = () => {
  return (
    <>
      <div id="component" className="container-fluid py-3">
        <p className="text-center text-black fs-3 fw-bold font-family-Montserrat  m-0 px-3 py-2">
          Navigating Real Estates Digital Landscape
        </p>
      </div>
      <div id="component" className="container-fluid py-2">
        <p className="text-center text-dark fs-5 fw-normal font-family-Open Sans  m-0 px-3 py-2">
          Insights for Real Estate Marketing Advantage
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="market">
              <img src={market} alt="" />
              <h1>Market Trends Analysis</h1>
              <br />
              <div>
                {" "}
                <p>Predictive insights to guide real estate strategies.</p>
              </div>
            </div>
            <div className="market">
              <img src={market} alt="" />
              <h1>    Visual Content Appeal</h1>
              <br />
              <div>
                {" "}
                <p> Captivate buyers with appealing visuals and immersive
                    experiences.</p>
              </div>
            </div>
            <div className="market">
              <img src={market} alt="" />
              <h1>Targeted Buyer Persona</h1>
              <br />
              <div>
                {" "}
                <p>Understand and connect with your ideal property buyers.</p>
              </div>
            </div>
            <div className="market">
              <img src={market} alt="" />
              <h1> Competitor Insights</h1>
              <br />
              <div>
                {" "}
                <p> Stand out in the property market with informed strategies.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <img src={Back} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Digital;
