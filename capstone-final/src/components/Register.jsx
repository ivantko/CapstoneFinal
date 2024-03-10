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
                <label>
                    Username
                <input type="text" placeholder="Username" />
                </label>
                <label htmlFor="password">Password</label>
                <input name="password" type="password"
                placeholder="password" />
                <label>
                    Email
                <input type="text" placeholder="Email" />
                </label>
                <label htmlFor="first_name">First Name</label>
                <input name="first_name" type="text"
                placeholder="first_name" />
                <label>
                    Last Name
                <input type="text" placeholder="last_name" />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Register;
