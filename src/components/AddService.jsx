import { useState } from "react";
//api
import { useAddServiceMutation } from "../redux/api";

function AddService(props) {
    const [form, setForm] = useState({
        title: "", price: "", description: "", image_url:""
    });
    const [error, setError] = useState(null);
    const [addService] = useAddServiceMutation();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const{data, error} = await addService({token: props.token, body: form });
        setForm({
            title: "", price: "", description: "", image_url:""
        });
    };

    const handleChange = ({target}) => {
        setForm({...form, [target.name]: target.value});
    };

    return (
        <section>
            <h2>Add Service</h2>
            <p>All items marked with * are required</p>
            <form>
            <label htmlFor="title">Name</label>
            <input value={form.title} name="title" onChange={handleChange} />
            <label htmlFor="price">Price</label>
            <input value={form.price} name="price" onChange={handleChange} />
            <label htmlFor="description">Description</label>
            <input value={form.description} name="description" onChange={handleChange} />
            <label htmlFor="image_url">Image url</label>
            <input value={form.image_url} name="image_url" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
            </form>
        </section>
    )
}

export default AddService;
