import { NavLink, useNavigate } from "react-router-dom";

function NavBar(props){
    const navigate = useNavigate();

    const logoutUser = () => {
        props.setToken(null);
        navigate("/");
    }

    if(props.token){
        return <nav>
        <div className="nav-group left">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/account">Account</NavLink>
            <NavLink to="/addservice"> Add Service</NavLink>
            <NavLink to="/cart">Cart</NavLink> 
        </div>
        <h2 className="nav-title">Binary Bulwark</h2>
        <div className="nav-group right">
            <a onClick={logoutUser}>Logout</a>
        </div>
        </nav>
    }


    return <nav>
        <div className="nav-group left">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
        </div>
        <h2 className="nav-title">Binary Bulwark</h2>
        <div className="nav-group right">
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
        </nav>;
    }

export default NavBar;
