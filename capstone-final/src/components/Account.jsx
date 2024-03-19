import { useAccountQuery } from "../redux/api";

function Account (props) {

/**
 * user body from API:
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
 * 
 */

const {data, error, isLoading} = useAccountQuery(props.token);

console.log(props);
console.log(props.token);

// console.log('DATA from API',data);
console.log('DATA from API', data);
if (data) {
  data.forEach((user, index) => {
    console.log(`User ${index + 1}:`, user);
  });
}


console.log('Error from API',error);
console.log('isLoading', isLoading);
return (
            <section>
                <h2>Account</h2>
                {isLoading && <p>Loading...</p>}
                <ul>
                    <li>Username: </li>
                    <li>Email: </li>
                    <li>First Name: </li>
                    <li>Last Name: </li>
                </ul>
            </section>
        );

}

export default Account;

