import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <script>document.write(new Date().getFullYear())</script>
            Made with <span style={{ color: "red" }}>❤</span> by Sarthak
          </div>
          <div className="col-md-6">
            <div className="text-md-end footer-links d-none d-md-block">
              <Link to="/">About</Link>
              <Link to="/">Support</Link>
              <Link to="/">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
