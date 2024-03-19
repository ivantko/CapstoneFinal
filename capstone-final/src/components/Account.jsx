import { useAccountQuery } from "../redux/api";

function Account (props) {

/**
 user body from API:
 * {
        "address": {
            "geolocation": {
                "lat": "-37.3159",
                "long": "81.1496"
            },
            "city": "kilcoole",
            "street": "new road",
            "number": 7682,
            "zipcode": "12926-3874"
        },
        "id": 1,
        "email": "john@gmail.com",
        "username": "johnd",
        "password": "m38rmF$",
        "name": {
            "firstname": "john",
            "lastname": "doe"
        },
        "phone": "1-570-236-7033",
        "__v": 0
    }
 */

const {data, error, isLoading} = useAccountQuery(props.token);



const loggedInUser = data?.find(user => user.username === props.username);
// console.log(props);
// console.log(props.token);
console.log('Username from props:', props.username);

// console.log('DATA from API', data);
// if (data) {
//   data.forEach((user, index) => {
//     console.log(`User ${index + 1}:`, user);
//   });
// }
// console.log('Error from API',error);


// if (error || !loggedInUser) {
//     return <p>Something went wrong!</p>;
// }

if (isLoading) {
    return <p>Loading...</p>;
}


if (error || !loggedInUser) {
    return <p>Something went wrong!</p>;
}


console.log('isLoading', isLoading);

return (
            <section>
                <h2>Account</h2>
                {isLoading && <p>Loading...</p>}
            {loggedInUser && (
                <ul>
                    <li>Username: {loggedInUser.username}</li>
                    <li>Email: {loggedInUser.email}</li>
                    <li>First Name: {loggedInUser.name?.firstname}</li>
                    <li>Last Name: {loggedInUser.name?.lastname}</li>
                    <li>City: {loggedInUser.address?.city}</li>
                    <li>Street: {loggedInUser.address?.street}</li>

                </ul>
            )}
            {!isLoading && !loggedInUser && <p>No user data available or not logged in.</p>}
        </section>
    );
}

export default Account;

