
import Button from "react-bootstrap/Button";

const Mind = () => {
  return (
    <>
       <div id="component" className="container-fluid py-3">
        <p className="text-center  m-0 px-5 py-3">
         
          <span className="text-black fs-1 fw-medium font-family-Montserrat">
            
            Your Peace Of Mind
          </span>
        </p>
      </div>
      <div id="component" className="container-fluid py-0">
        <p className="text-center text-dark fs-5 fw-normal font-family-Open Sans  m-0 px-3 py-0">
          Through Our conversation-Focused Startegies , We ensure that property <br/>
          seekers are not just visitors, but engaged prospects ready to make <br/>
          their next move in the real estate market
        </p>
      </div>
      <div id="component" className="container btn-1 py-3">
        <Button variant="primary">Get Started</Button>
      </div>
    
    
    
    </>
  )
}

export default Mind