import { NavLink, useNavigate } from "react-router-dom";

function NavBar(props){
    const navigate = useNavigate();

    const logoutUser = () => {
        props.setToken(null);
        navigate("/");
    }

    if(props.token){
        return <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/account">Account</NavLink>
        <NavLink to="/addservice"> Add Service</NavLink>
        <a onClick={logoutUser}>Logout</a>
        </nav>
    }


    return <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/services">Services</NavLink>
        </nav>;
    }

export default NavBar;
