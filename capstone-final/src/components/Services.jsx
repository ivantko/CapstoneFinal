// import { isPlainObject } from "@reduxjs/toolkit";
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


    return (
    <div>
    <h2>Services</h2> 
    {data.map((service) => {
        return (
        <div key={service.id}>
            <h2>{service.title}</h2>
            <img src={service.image} />
            <p>Price: ${service.price}</p>
            <p>Rating: {service.rating.rate} ({service.rating.count} Reviews)</p>
            <p>Description: {service.description}</p>
            </div>
        );
    })}
    </div>
    )
}

export default Services;
