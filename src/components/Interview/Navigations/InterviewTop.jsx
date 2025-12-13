// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function InterviewTop() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <>
      <div className="flex-space-evenly">
        <NavLink
          to="html"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          HTML / CSS
        </NavLink>
        <NavLink
          to="javascript"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          JAVASCRIPT
        </NavLink>

        <NavLink
          to="code"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          JS CODING
        </NavLink>
        <NavLink
          to="react"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          REACT
        </NavLink>
        <NavLink
          to="Misc"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          MISC
        </NavLink>
      </div>
    </>
  );
}
export default InterviewTop;
