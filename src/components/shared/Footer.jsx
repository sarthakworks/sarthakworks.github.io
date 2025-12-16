import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12 d-none d-md-block">
            <i className="uil-copyright"></i> {new Date().getFullYear()}
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="text-md-end footer-links">
              <Link to="/Interview">Content</Link>
              <Link to="/Random">Mini Projects</Link>
              <Link to="/">
                {" "}
                Made with <span style={{ color: "red" }}>❤</span> by Sarthak
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
