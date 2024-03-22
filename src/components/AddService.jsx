import { useState } from "react";

function AddService() {
    const [form, setForm] = useState()
    const [error, setError] = useState({title: "", price: "", description: "", image_url:"" });

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("here");
    };

    return (
        <section>
            <h2>Add Service</h2>
            <p>All items marked with * are required</p>
            <label htmlFor="title">Name</label>
            <input name="title" />
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