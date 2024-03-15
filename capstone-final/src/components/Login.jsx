import { useState } from "react";
import { useLoginMutation } from "../redux/api";

function Login (props) {
    const [userInfo, setUserInfo] = useState({
        username: "", 
        password: "", 
       });
    const [errorMsg, setError] = useState(null);
    const [login] = useLoginMutation();
    
  

    const eventHandler = async (event) => {
        event.preventDefault();
        const{data, error} = await login(userInfo);
        
        if(error){
        // error.data.error
        setError(error.data)
            console.log(`error`, error);
        } else {
        // data.token
            props.setToken(data.token);
            console.log(`data ${JSON.stringify(data.token)}`);
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
