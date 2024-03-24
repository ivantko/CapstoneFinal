import { useServiceDetailsQuery } from "../redux/api";
import { useParams, useNavigate } from "react-router-dom";

function ServiceDetails ({}) {
    const {productId} = useParams();
    const {data, error, isLoading} = useServiceDetailsQuery(productId);
    const navigate = useNavigate();

    const goToEditForm = () => {
        navigate(`/editservice/${productId}`);
    }


    if (isLoading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>Something went wrong!</p>
    }

    return (
        <section>
            <h2>Details</h2>
            <div key={data?.id}> 
                <h3>{data?.title}</h3>
                <img src={data?.image} alt={data?.title} />
                <h4>Price: ${data?.price}</h4>
                <p>Rating: {data?.rating.rate} ({data?.rating.count} Reviews)</p>
                <p>Description: {data?.description}</p>
                <p>Category: {data?.category}</p>
                <button onClick={goToEditForm}> Edit Service</button>
            </div>
        </section>
    );
}

export default ServiceDetails;