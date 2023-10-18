import React from "react";
import logo2 from '../assets/image/69c6234b33868a4736d27770cd6c9dec.png'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <section id="contact" className="footer_wrapper mt-3 mt-md-0 pb-0">
        <div className="container pb-3">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <img src={logo2} alt="" height={54} width={54} />
              <p className="ps-0">
                The best digital marketing agency in Pune with a proven track
                record of consistently delivering quality service.
              </p>
              <div className="contact-info">
                <ul className="list-unstyled">
                  <h4>Address</h4>
                  <li>
                    <a href="#">
                      <i className="fa fa-home me-3"></i>Survey No. 43, Pathare
                      Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharastra,
                      India.
                    </a>
                  </li>

                  <h4>Contacts</h4>
                  <li>
                    <a href="#">
                      <i class="bi bi-telephone-fill "></i> +918459876226
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="bi bi-envelope-arrow-down-fill "></i>
                      hello@Osumare.in
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa fa-envelop me-3"></i>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 ">
              <h5 className="mx-5">Menu </h5>
              <ul className="link-widget p-0 mx-5">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">work</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6"></div>
            <div className="col-lg-3 col-md-6">
              <h5>Social</h5>
           
              {/* <button
                  type="submit"
                  className="main-btn rounded-2 mt-3 border-white text-white"
                >
                  Subscribe
                </button>
              <h5>Stay Connected</h5> */}
              <ul className="social-network d-flex align-item-center p-0 ">
                <li>
                  <a href="#">
                    <i className="bi bi-facebook fs-3"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-youtube fs-3 mx-4"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bi bi-pinterest fs-3"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="bi bi-instagram fs-3 mx-3"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bi bi-whatsapp fs-3"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/shweteshpatil">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="container copyright-section">
        <p className="text-center">
          ©️ 2023 Osumare. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
