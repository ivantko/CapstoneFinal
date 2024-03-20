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
    console.log(data[3])

    return <h2>Services</h2>; 
}

export default Services;
