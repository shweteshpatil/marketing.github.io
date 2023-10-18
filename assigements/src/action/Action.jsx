import Weath from "../assets/image/weather_534564 2.png"
import Mass from "../assets/image/mass_9984040 2.png"
import Model from "../assets/image/3d-model_9040866 3.png"
import Medel from "../assets/image/medal_2439078 (1) 1.png"

const Action = () => {
  return (
   <>


<div id="component" className="container-fluid py-3">
        <p className="text-center text-black fs-3 fw-bold font-family-Montserrat  m-0 px-3 py-2">
          Our Experties in Action
        </p>
      </div>

      <div>
        <div className="containter section">
          <div className="row">
            <div className="col-lg-6">
              <div id="component" className="container-fluid py-3">
                <div className="px-1 py-1 bg-white rounded-3 shadow border border-1  row align-items-center">
                  <div className="col-11 row align-items-center d-flex">
                    <div className="position-relative">
                      <div className="left-0 top-0 position-absolute bg-light rounded-circle col-12"></div>
                      <div className="position-absolute col-6"></div>
                    </div>
                    <img
                    src={Weath}
                    alt=""
                    
                    style={{ borderRadius: "20px", height:"128px",
                    width:"128px", marginLeft:'45%' }}
                  />
                    <p className="text-center text-black fs-6 fw-bold font-family-Montserrat col-12 m-0 px-3 py-2">
                      Effective CTAs
                    </p>
                  </div>
                  <p className="text-center text-dark fs-6 fw-normal font-family-Open Sans col-11 m-0 px-3 py-2">
                    Our carefully crafted CTAs guide potential buyers through
                    the property journey, enhancing engagement and conversion
                    rates.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div id="component" className="container-fluid py-3">
                <div className="px-1 py-1 bg-white rounded-3 shadow border border-1  row align-items-center">
                  <div className="col-11 row align-items-center d-flex">
                    <div className="position-relative">
                      <div className="left-0 top-0 position-absolute bg-light rounded-circle col-12"></div>
                      <div className="position-absolute col-6"></div>
                    </div>
                    <img
                    src={Mass}
                    alt=""
                    
                    style={{ borderRadius: "20px", height:"128px",
                    width:"128px", marginLeft:'45%' }}
                  />
                    <p className="text-center text-black fs-6 fw-bold font-family-Montserrat col-12 m-0 px-3 py-2">
                      Conversion-Optimization Landing Pages
                    </p>
                  </div>
                  <p className="text-center text-dark fs-6 fw-normal font-family-Open Sans col-11 m-0 px-3 py-2">
                    Tailored landing pages are designed for maximum property
                    lead conversion. They provide seamless user experiences and
                    clear pathways for inquiry submission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="containter section">
          <div className="row">
            <div className="col-lg-6">
              <div id="component" className="container-fluid py-3">
                <div className="px-1 py-1 bg-white rounded-3 shadow border border-1  row align-items-center">
                  <div className="col-11 row align-items-center d-flex">
                    <div className="position-relative">
                      <div className="left-0 top-0 position-absolute bg-light rounded-circle col-12"></div>
                      <div className="position-absolute col-6"></div>
                    </div>
                    <img
                    src={Model}
                    alt=""
                    
                    style={{ borderRadius: "20px", height:"128px",
                    width:"128px", marginLeft:'45%' }}
                  />
                    <p className="text-center text-black fs-6 fw-bold font-family-Montserrat col-12 m-0 px-3 py-2">
                      Trust Building with Social Proof
                    </p>
                  </div>
                  <p className="text-center text-dark fs-6 fw-normal font-family-Open Sans col-11 m-0 px-3 py-2">
                    Leverage the power of testimonials and success stories from
                    satisfied buyers to build trust and credibility, encouraging
                    hesitant prospects to take action
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div id="component" className="container-fluid py-3">
                <div className="px-1 py-1 bg-white rounded-3 shadow border border-1  row align-items-center">
                  <div className="col-11 row align-items-center d-flex">
                    <div className="position-relative">
                      <div className="left-0 top-0 position-absolute bg-light rounded-circle col-12"></div>
                      <div className="position-absolute col-6"></div>
                    </div>
                    <img
                    src={Medel}
                    alt=""
                    
                    style={{ borderRadius: "20px", height:"128px",
                    width:"128px", marginLeft:'45%' }}
                  />
                    <p className="text-center text-black fs-6 fw-bold font-family-Montserrat col-12 m-0 px-3 py-2">
                      Mobil-First Succes:
                    </p>
                  </div>
                  <p className="text-center text-dark fs-6 fw-normal font-family-Open Sans col-11 m-0 px-3 py-2">
                    With a responsive design approach, our strategies ensure a
                    seamless browsing experience across all devices. This
                    responsiveness enhances engagement and conversions by
                    accommodating the preferences of on-the-go property seekers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
   </>
  )
}

export default Action