import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <>
      <div id="component" className="container-fluid py-3">
        <p className="text-center text-black fs-3 fw-bold font-family-Montserrat  m-0 px-3 py-2">
          Connect With Our Digital Marketing Experts
        </p>
        <div id="component" className="container-fluid py-3">
          <p className="text-center text-dark fs-5 fw-normal font-family-Open Sans  m-0 px-3 py-2">
            Reach Out for Tailored Strategies and Results-Driven Solutions.
            Let's Elevate Your Online Presence Together
          </p>
        </div>
      </div>

{/* contatc info */}

<div id="component" class="container-fluid py-3">
    <div class="px-1 py-1 bg-white rounded-4 shadow border border-1 justify-content-center align-items-center">
        <div class="col-md-11 row justify-content-center align-items-center">
            <div class="col-md-12 row justify-content-center">
                <div class="col-md-6 row justify-content-center align-items-center">
                    <div class="col-12 row d-flex">
                        <p class="text-center text-black fs-6 fw-semibold font-family-Inter col-1 m-0 px-3 py-2">
                        Name
                        </p>
                        <div class="px-1 py-1 bg-white rounded-1 border border-1 border-success-subtle col-12">
                            <p class="text-success-subtle fs-6 fw-normal font-family-Inter col-11 m-0 px-3 py-2">
                            Enter your name
                            </p>
                        </div>
                    </div>
                    <div class="col-12 row d-flex">
                        <p class="text-center text-black fs-6 fw-semibold font-family-Inter col-2 m-0 px-3 py-2">
                        Phone
                        </p>
                        <div class="px-1 py-1 bg-white rounded-1 border border-1 border-success-subtle col-12">
                            <p class="text-success-subtle fs-6 fw-normal font-family-Inter col-11 m-0 px-3 py-2">
                            Enter your Number
                            </p>
                        </div>
                    </div>
                    <div class="col-12 row d-flex">
                        <p class="text-center text-black fs-6 fw-semibold font-family-Inter col-1 m-0 px-3 py-2">
                        Email
                        </p>
                        <div class="px-1 py-1 bg-white rounded-1 border border-1 border-success-subtle col-12">
                            <p class="text-success-subtle fs-6 fw-normal font-family-Inter col-11 m-0 px-3 py-2">
                            Enter your Total No of Vehicles:
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 justify-content-center align-items-center" height="200px">
                    <div class="rounded-3 col-12 row d-flex">
                        <p class="text-center text-black fs-6 fw-semibold font-family-Inter col-2 m-0 px-3 py-2">
                        Message
                        </p>
                        <div class="px-1 py-1 bg-white rounded-1 border border-1 border-success-subtle col-12">
                            <input type=" text" placeHolder="Enter your message"  border="none" width="100" height="100"/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="component" className="container btn-1 py-3" >
        <Button variant="primary" width="500px">Get Started</Button>
      </div>
    
        </div>
    </div>
</div>


    </>
  );
};

export default Contact;
