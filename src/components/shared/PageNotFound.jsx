import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div className="content">
      {/* Start Content*/}
      <div className="container-fluid">
        {/* start page title */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/">Apps</Link>
                  </li>
                  <li className="breadcrumb-item active">404 Error</li>
                </ol>
              </div>
              <h4 className="page-title">404 Error</h4>
            </div>
          </div>
        </div>
        {/* end page title */}
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="text-center">
              <img
                src="/assets/images/file-searching.svg"
                height={90}
                alt="File not found "
              />
              <h1 className="text-error mt-4">404</h1>
              <h4 className="text-uppercase text-danger mt-3">
                Page Not Found
              </h4>
              <p className="text-muted mt-3">
                It's looking like you may have taken a wrong turn. Don't
                worry... it happens to the best of us. Here's a little tip that
                might help you get back on track.
              </p>
              <Link className="btn btn-info mt-3" to="/">
                <i className="mdi mdi-reply" /> Return Home
              </Link>
            </div>
            {/* end /.text-center*/}
          </div>
          {/* end col*/}
        </div>
        {/* end row */}
      </div>
    </div>
  );
}

export default PageNotFound;
