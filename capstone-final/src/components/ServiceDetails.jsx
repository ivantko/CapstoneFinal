import { useServiceDetailsQuery } from "../redux/api";
import { useParams } from "react-router-dom";

function ServiceDetails ({}) {
    const {productId} = useParams();
    const {data, error, isLoading} = useServiceDetailsQuery(productId);

    if (isLoading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>Something went wrong!</p>
    }

    console.log('data', data);

    return (
        <section>
            <h2>Service Details</h2>
            <div key={data?.id}> 
                <h3>{data?.title}</h3>
                <img src={data?.image} alt={data?.title} />
                <h4>Price: ${data?.price}</h4>
                <p>Rating: {data?.rating.rate} ({data?.rating.count} Reviews)</p>
                <p>Description: {data?.description}</p>
                <p>Category: {data?.category}</p>

            </div>

        </section>
    );
}

export default ServiceDetails;