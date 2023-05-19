import React from 'react';
import Swal from 'sweetalert2';

const AddToy = () => {
    const handleAddCoffe = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const suppllier = form.suppllier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo_url = form.photo_url.value;

        const newCoffee = {
            name,
            quantity,
            suppllier,
            taste,
            category,
            details,
            photo_url,
        };
        console.log(newCoffee);

        fetch("http://localhost:5000/coffee", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newCoffee),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Coffee Added successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            });
    };

    return (
        <div className="bg-[#ddd] p-24">
            <h1 className="text-3xl">Add Toy Information</h1>
            <form onSubmit={handleAddCoffe}>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Image URL</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Please provide toy image url"
                                name="toy_img_url"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Enter Toy name"
                                name="toy_name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Enter Seller Name"
                                name="seller_name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="email"
                                placeholder="Enter Seller Email"
                                name="seller_email"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Sub-category "
                                name="sub_category"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="number"
                                placeholder="Price"
                                name="price"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Rating"
                                name="rating"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">
                                Available quantity
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                type="number"
                                placeholder="Available quantity"
                                name="available_quantity"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">
                                Detail description
                            </span>
                        </label>
                        <label className="input-group">
                            <textarea
                                className="textarea textarea-accent"
                                placeholder="Detail description"
                                name="description"
                            ></textarea>
                        </label>
                    </div>
                </div>

                <input
                    type="submit"
                    value="Add Toy"
                    className="btn btn-block"
                />
            </form>
        </div>
    );
};

export default AddToy;