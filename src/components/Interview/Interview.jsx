import { Link, Outlet, Route, Routes } from "react-router-dom";
import InterviewTop from "./Navigations/InterviewTop";
function Interview() {
  return (
    <div className="content">
      {/* <!-- Start Content--> */}
      <div className="container-fluid">
        {/* <!-- start page title --> */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <h4 className="mt-4">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body">
                        <InterviewTop />
                      </div>
                    </div>
                  </div>
                </div>
              </h4>
            </div>
          </div>
        </div>
        {/* <!-- end page title --> */}
        <Outlet />
      </div>
      {/* <!-- container --> */}
    </div>
  );
}
export default Interview;
