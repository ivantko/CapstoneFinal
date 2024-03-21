import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useServicesQuery } from "../redux/api";

function Services({ token }) {
    
    const {data, error, isLoading} = useServicesQuery(token);

    if (isLoading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>Something went wrong!</p>
    }

    console.log("DATA", data)

    //Product object example within data array:
    // {
    //     "id": 1,
    //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     "price": 109.95,
    //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     "category": "men's clothing",
    //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     "rating": {
    //       "rate": 3.9,
    //       "count": 120
    //     }

    // const details = () => {}

    return (
    <div>
    <h2>Services</h2> 
    {data.map((service) => {
        return (
        <div key={service.id}>
            <h2>{service.title}</h2>
            <img src={service.image} className="services-img"/>
            <p>Price: ${service.price}</p>
            <p>Rating: {service.rating.rate} ({service.rating.count} Reviews)</p>
            {/* <p>Description: {service.description}</p> */}
            <Link to={`/servicedetails/${service.id}`}>See More Details</Link>
            </div>
        );
    })}
    </div>
    )
}

export default Services;
