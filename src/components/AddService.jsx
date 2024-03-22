import { useState } from "react";

function AddService() {
    const [form, setForm] = useState({
        title: "", price: "", description: "", image_url:""}
    )
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("here", form.title);
        console.log('************')
    };

    const handleChange = (event) => {
        console.log("target", event.target.target)
        console.log("value", event.target.value)
        console.log('************')
    }

    return (
        <section>
            <h2>Add Service</h2>
            <p>All items marked with * are required</p>
            <label htmlFor="title">Name</label>
            <input name="title" onChange={handleChange} />
            <label htmlFor="price">Price</label>
            <input name="price" />
            <label htmlFor="description">Description</label>
            <input name="description" />
            <label htmlFor="image_url">Image url</label>
            <input name="img_url" />
            <form></form>
            <button onClick={handleSubmit}>Submit</button>
        </section>
    )
}

export default AddService;