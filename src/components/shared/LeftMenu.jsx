import { Link } from "react-router-dom";
function LeftMenu() {
  return (
    <>
      <div className=" leftside-menu leftside-menu-detached show">
        {/* LOGO */}
        <div className="leftbar-user">
          <Link to="/">
            <img
              src="/assets/images/users/avatar-2.png"
              alt="user"
              height={82}
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
            <Link to="zomato" className="side-nav-link">
              <i className="uil-restaurant" />
              <span> Json </span>
            </Link>
          </li>
          <li className="side-nav-item">
            <Link to="error" className="side-nav-link">
              <i className="uil-shield-exclamation" />
              <span> Error Page </span>
            </Link>
          </li>
        </ul>

        {/* Sidebar -left */}
      </div>
    </>
  );
}

export default LeftMenu;
