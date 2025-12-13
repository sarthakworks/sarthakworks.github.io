 
import { Link } from "react-router-dom";
import Right from "./Right";
import Left from "./Left";

function Homepage() {
  return (
    <div className="content">
      {/* <!-- Start Content--> */}
      <div className="container-fluid">
        {/* <!-- start page title --> */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <form className="d-flex">
                  <Link to="/" className="btn btn-primary ms-2">
                    <i className="mdi mdi-autorenew"></i>
                  </Link>
                </form>
              </div>
              <h4 className="page-title">Dashboard</h4>
            </div>
          </div>
        </div>
        {/* <!-- end page title --> */}
        <div className="row">
          <div className="col-xxl-8 col-lg-6">
            <Right />
          </div>
          <div className="col-lg-6 col-xxl-4">
            <Left />
          </div>
        </div>
      </div>
      {/* <!-- container --> */}
    </div>
  );
}

export default Homepage;
