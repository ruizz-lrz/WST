import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <nav>
            <NavLink
                to="/"
                style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                })}
            >
                Home
            </NavLink>

            <NavLink
                to="/about"
                style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                })}
            >
                About
            </NavLink>


            <NavLink
                to="/contact"
                style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                })}
            >
                Contact
            </NavLink>

            <NavLink
                to="/dashboard"
                style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                })}
            >
                Dashboard
            </NavLink>
        </nav>
    );
}


export default Navbar;