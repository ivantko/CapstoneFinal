import { useServiceDetailsQuery } from "../redux/api";
import { useParams } from "react-router-dom";

function ServiceDetails ({token}) {
    const {productId} =useParams();
    const {data, error, isLoading} = useServiceDetailsQuery(productId);

    if (isLoading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>Something went wrong!</p>
    }

    console.log(data);

    return (
        <section>
            <h2>Service Details</h2>
            <div key={data?.id}> 
                <h2>{data?.title}</h2>
                <img src={data?.image} alt={data?.title} />
                <p>Price: ${data?.price}</p>
                <p>Rating: {data?.rating.rate} ({data?.rating.count} Reviews)</p>
                <p>Description: {data?.description}</p>
            </div>

        </section>
    );
}

export default ServiceDetails;