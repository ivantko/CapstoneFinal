import { useState } from "react";
import { useNavigate } from "react-router-dom";
//api
import { useLoginMutation } from "../redux/api";


// if(props.token){
//     return <nav>
//     <NavLink to="/">Home</NavLink>
//     <NavLink to="/account">Account</NavLink>
//     <a onClick={login}>Logout</a>
//     </nav>
// }




function Login (props) {
    const [userInfo, setUserInfo] = useState({
        username: "", 
        password: "", 
       });
    const [errorMsg, setError] = useState(null);
    const [login] = useLoginMutation();
    const navigate = useNavigate();
  

    const eventHandler = async (event) => {
        event.preventDefault();
        const{data, error} = await login(userInfo);
        
        if(error){
        // handle the error
        setError(error.data)
            // console.log(`error`, error);
        } else {
        // Save the token and username after successful login
            props.setToken(data.token);
        // Replace 'userInfo.username' with the actual response username if different
            props.setUsername(userInfo.username);
          //TODO: change to plant list route later
            navigate("/account");
        }
    };

    const onUserInput = (e) => {
        if(errorMsg){
            setError(null);
        }

        setUserInfo({...userInfo, [e.target.name]: e.target.value });
    };


return (
    <div>
        <h2>Login</h2>
        {errorMsg ? <p>{errorMsg}</p> : <span />}
        <form onSubmit={eventHandler}>
            <label>
                Username
                <input type="text" placeholder="Username" name="username" value={userInfo.username} onChange={onUserInput} />
            </label>
            <label>
                Password
                <input type="password" placeholder="Password" name="password" value={userInfo.password} onChange={onUserInput}/>
            </label>

            <button type="submit">Submit</button>
        </form>
    </div>
    );

}

export default Login;
