import { Link } from "react-router-dom";
// import { Link from "react-router-dom";
import { useServicesQuery } from "../redux/api";
import React, { useState } from 'react';

function Services({ token, cart, setCart }) {
    
    const {data, error, isLoading} = useServicesQuery(token);
    const [sortKey, setSortKey] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState(Infinity);

    if (isLoading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>Something went wrong!</p>
    }

    console.log("DATA", data)

    let filteredData = data;

    // Filter by category
    if (filterCategory) {
        filteredData = filteredData.filter(item => item.category === filterCategory);
    }

    // Filter by price range
    filteredData = filteredData.filter(item => item.price >= (minPrice ? Number(minPrice) : 0) && item.price <= maxPrice);

    // Sort by key
    if (sortKey === 'name') {
        filteredData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortKey === 'price') {
        filteredData.sort((a, b) => a.price - b.price);
    }

    const addToCart = (service) => {
        // Assuming each service object doesn't initially have a 'quantity' key
        const serviceWithQuantity = { ...service, quantity: 1 };
        setCart(currentCart => {
            const updatedCart = [...currentCart, serviceWithQuantity];
            console.log("Updated Cart:", updatedCart); // Add this line
            return updatedCart;
        });
    };

    return (
    <div>
    <h2>Services</h2>
    <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
        <option value="">Select sort type</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
    </select>
    <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
        <option value="">Select category</option>
        {Array.from(new Set(data.map(item => item.category))).map(category => (
            <option key={category} value={category}>{category}</option>
        ))}
    </select>
    <input type="number" value={minPrice > 0 ? minPrice : ''} onChange={(e) => setMinPrice(Number(e.target.value))} placeholder="Min price" />
    <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} placeholder="Max price" />
    {filteredData.map((service) => {
        return (
        <div key={service.id}>
            <h2>{service.title}</h2>
            <img src={service.image} className="services-img"/>
            <p>Price: ${service.price}</p>
            <p>Rating: {service.rating.rate} ({service.rating.count} Reviews)</p>
            {/* <p>Description: {service.description}</p> */}
            <Link to={`/servicedetails/${service.id}`}>See More Details</Link>
            <button onClick={() => addToCart(service)}>Add to Cart</button>
            </div>
        );
    })}
    </div>
    )
}

export default Services;
