import { useState } from "react";
//api
import { useRegisterMutation } from "../redux/api";


//will need to change the parameters to match fakeapi ones for testing
function Register (props) {
    const [userInfo, setUserInfo] = useState({
             username: "", 
             password: "", 
             email: "", 
             first_name: "", 
             last_name: "" 
            });
    const [errorMsg, setError] = useState(null);
    const [register] = useRegisterMutation();

    console.log(props);

    const eventHandler = async (event) => {
        event.preventDefault();
        const{data, error} = await register(userInfo);
   
        if(error){
        //error.data.message --> error message
            setError(error.data.message)
            console.log(`error ${JSON.stringify(error.data.message)}`);
        } else {
             //data.id --> has id value    
            props.setid(data.id)
            console.log(`data ${JSON.stringify(data.id)}`);
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
        <h2>Register</h2>
        {/* error message  */}
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
            <label>
                Email
                <input type="text" placeholder="Email" name="email" value={userInfo.email} onChange={onUserInput} />
            </label>
            <label>
                First Name
                <input type="text" placeholder="First Name" name="first_name" value={userInfo.first_name} onChange={onUserInput} />
            </label>
            <label>
                Last Name
                <input type="text" placeholder="Last Name" name="last_name" value={userInfo.last_name} onChange={onUserInput} />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
   
}

export default Register;
