import { useState } from "react";

function Register () {
        const [userInfo, setUserInfo] = useState({
             username: "", password: "", email: "", first_name: "", last_name: "" });

    const eventHandler = (event) => {
        event.preventDefault();
        console.log('in eventHandler', `USERINFO${userInfo.username}`);

    };

    const onUserInput = (e) => {
        console.log(JSON.stringify(userInfo));
        setUserInfo({...userInfo, [e.target.name]: e.target.value });
    };

// onChange={setUserInfo(e.target.value)}    
return (
    <div>
        <h2>Register</h2>
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
