import { useState } from "react";

function Login (props) {
    const [userInfo, setUserInfo] = useState({
        username: "", 
        password: "", 
       });
    const [errorMsg, setError] = useState(null);
    

    const eventHandler = async (event) => {
        event.preventDefault();
        // const{data, error} = await register(userInfo);
   
        // if(error){
        
        //     // setError(error.data.message)
        //     // console.log(`error ${JSON.stringify(error.data.message)}`);
        // } else {
             
        //     // props.setid(data.id)
        //     // console.log(`data ${JSON.stringify(data.id)}`);
        // }
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
