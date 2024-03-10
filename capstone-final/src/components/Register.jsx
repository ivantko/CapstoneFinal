import { useState } from "react";

function Register () {
        const [userInfo, setUserInfo] = useState({
             username: "", password: "", email: "", first_name: "", last_name: "" });

    const eventHandler = (event) => {
        event.preventDefault();
        console.log('in eventHandler', userInfo.username);

    };

 
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={eventHandler}>
                <label htmlFor="username">Username
                <input id="username" type="text" placeholder="Username" />
                </label>
                <label htmlFor="password">Password
                <input id="password" name="password" type="password" placeholder="Password" />
                </label>
                <label htmlFor="email">Email
                <input id="email" type="text" placeholder="Email" />
                </label>
                <label htmlFor="first_name">First Name
                <input id="first_name" name="first_name" type="text" placeholder="First Name" />
                </label>
                <label htmlFor="last_name">Last Name
                <input id="last_name" type="text" placeholder="Last Name" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Register;
