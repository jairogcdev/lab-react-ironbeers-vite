import { NavLink } from "react-router-dom";

function Navbar() {
  const navStyles = {
    backgroundColor: "lightblue",
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div>
      <nav style={navStyles}>
        <NavLink to={"/"}>
          <img src="../src/assets/home-icon.png" alt="Home" />
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
