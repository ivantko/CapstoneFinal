//api
import { useState, useEffect } from "react";
import { useEditServiceMutation, useServiceDetailsQuery } from "../redux/api";
import { useParams } from "react-router-dom";

function EditService({token}) {
let {productId} = useParams();



const [editService] = useEditServiceMutation();
const [form, setForm] = useState({
    title: "", price: "", description: "", image_url:""
});
const [errorMsg, setError] = useState(null);

const { data, error, isLoading } = 
useServiceDetailsQuery(productId);

useEffect(() => {
    if (data) {
        setForm({
            title: data.title || "",
            price: data.price || "",
            description: data.description || "",
            image_url: data.image || ""
        });
    }
}, [data]);


const handleChange = ({ target }) => {
    setError(null);
    setForm({ ...form, [target.name]: target.value });
};

const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await editService({ productId, token, body: form });

    if (error) {
        setError('Something went wrong! Please try again');
    } else {
        setForm({
            title: "", price: "", description: "", image_url: ""
        });
    }
};

if (isLoading){
    return <p>Loading...</p>
}

if(error){
    return <p>Something went wrong!</p>;
}


if (data) {
    console.log(data);
    // setForm(data.service);
}


    return (
        <section>
            <h2>Edit Service</h2>
            <form>
                <label htmlFor="title">Name</label>
                <input value={form.title} name="title" onChange={handleChange} />
                <label htmlFor="price">Price</label>
                <input value={form.price} type="number" name="price" onChange={handleChange} />
                <label htmlFor="description">Description</label>
                <input value={form.description} name="description" onChange={handleChange} />
                <label htmlFor="image_url">Image url</label>
                <input value={form.image_url} name="image_url" onChange={handleChange} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </section>
    );

}

export default EditService;