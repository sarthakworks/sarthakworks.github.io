import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <i className="uil-copyright"></i> {new Date().getFullYear()}
          </div>
          <div className="col-md-6">
            <div className="text-md-end footer-links d-none d-md-block">
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
