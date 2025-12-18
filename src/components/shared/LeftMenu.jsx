import { Link } from "react-router-dom";
import usersAvatar2Png from "../assets/images/users/avatar-2.png";
function LeftMenu() {
  return (
    <>
      <div className="card leftside-menu leftside-menu-detached show">
        {/* LOGO */}
        <div className="leftbar-user">
          <Link to="/">
            <img
              src={usersAvatar2Png}
              alt="user"
              height={150}
              className="rounded-circle shadow-sm"
            />
            <span className="leftbar-user-name">Sarthak Bansal</span>
          </Link>
          <p className="text-muted mb-0 font-13">sarthak.workplace@gmail.com</p>
          <p className="text-muted mb-1 font-13">Delhi, India</p>
        </div>
        <ul className="side-nav">
          <li className="side-nav-title side-nav-item">Apps</li>

          <li className="side-nav-item">
            <Link to="/image-tools" className="side-nav-link">
              <i className="uil-image-check" />
              <span> Image Tools </span>
            </Link>
          </li>
          <li className="side-nav-item">
            <Link to="/pdf-tools" className="side-nav-link">
              <i className="uil-file-alt" />
              <span> PDF Tools </span>
            </Link>
          </li>
          <li className="side-nav-item">
            <Link to="/agile-tools" className="side-nav-link">
              <i className="uil-clipboard-alt" />
              <span> Agile Tools </span>
            </Link>
          </li>
          <li className="side-nav-item">
            <Link to="/aes-tool" className="side-nav-link">
              <i className="uil-padlock" />
              <span> AES Encryption </span>
            </Link>
          </li>
        </ul>

        {/* Sidebar -left */}
      </div>
    </>
  );
}

export default LeftMenu;
