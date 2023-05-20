import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import useTitle from "../Hooks/useTitle";

const AddToy = () => {
    useTitle("Add Toy"); 
    const { user } = useContext(AuthContext);
    const handleAddToy = (event) => {
        event.preventDefault();

        const form = event.target;
        const toy_img_url = form.toy_img_url.value;
        const toy_name = form.toy_name.value;
        const toy_sub_cat = form.toy_sub_cat.value;
        const toy_price = form.toy_price.value;
        const toy_rating = form.toy_rating.value;
        const toy_quantity = form.toy_quantity.value;
        const toy_description = form.toy_description.value;


        if (!toy_img_url || !toy_name || !toy_sub_cat || !toy_price || !toy_rating || !toy_quantity || !toy_description) {
            Swal.fire({
                title: "Warning!",
                text: "Fields cannot be empty",
                icon: "error",
                confirmButtonText: "Ok",
            });
            return false;
        }

        const newToy = {
            picture: toy_img_url,
            name: toy_name,
            seller_name: user.displayName,
            seller_email: user.email,
            sub_category: toy_sub_cat,
            price: toy_price,
            rating: toy_rating,

            quantity: toy_quantity,
            description: toy_description,
            created_by: user.uid,
        };

        fetch(`${import.meta.env.VITE_API_BASE_URL}toy/add`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newToy),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Toy Added successfully",
                        icon: "success",
                        confirmButtonText: "Ok",
                    });
                    form.reset();
                }
            });
    };

    return (
        <div className="bg-[#ddd] p-24">
            <h1 className="text-3xl">Add Toy Information</h1>
            <form onSubmit={handleAddToy}>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Image URL</span>
                        </label>
                        <label className="input-group input-group-sm">
                            <input
                                type="text"
                                placeholder="Please provide toy image url"
                                name="toy_img_url"
                                className="input input-bordered w-full input-sm"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group input-group-sm">
                            <input
                                type="text"
                                placeholder="Enter Toy name"
                                name="toy_name"
                                className="input input-bordered w-full input-sm"
                            />
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/4">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <label className="input-group input-group-sm">
                            <select
                                className="select select-bordered w-full select-sm"
                                name="toy_sub_cat"
                            >
                                <option value="">
                                    -- Select One --
                                </option>
                                <option>Marvel</option>
                                <option>Avengers</option>
                                <option>Star Wars</option>
                                <option>Transformers</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group input-group-sm">
                            <input
                                type="number"
                                placeholder="Price"
                                name="toy_price"
                                className="input input-bordered w-full input-sm"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group input-group-sm">
                            <input
                                type="number"
                                placeholder="Rating"
                                name="toy_rating"
                                className="input input-bordered w-full input-sm"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/4">
                        <label className="label">
                            <span className="label-text">
                                Available quantity
                            </span>
                        </label>
                        <label className="input-group input-group-sm">
                            <input
                                type="number"
                                placeholder="Available quantity"
                                name="toy_quantity"
                                className="input input-bordered w-full input-sm"
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
                        <label className="input-group input-group-sm">
                            <textarea
                                className="textarea textarea-accent w-full input-sm"
                                placeholder="Detail description"
                                name="toy_description"
                            ></textarea>
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-4 mt-3">
                    <input
                        type="submit"
                        value="Add Toy"
                        className="btn btn-block"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddToy;
