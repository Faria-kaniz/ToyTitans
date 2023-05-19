import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const EditToy = () => {
    const { user } = useContext(AuthContext);
    const toydata = useLoaderData();
    const {
        _id,
        picture,
        name,
        sub_category,
        price,
        rating,
        quantity,
        description,
    } = toydata;

    const handleEditToy = (event) => {
        event.preventDefault();

        const form = event.target;
        const toy_img_url_inp = form.toy_img_url.value;
        const toy_name_inp = form.toy_name.value;
        const toy_sub_cat_inp = form.toy_sub_cat.value;
        const toy_price_inp = form.toy_price.value;
        const toy_rating_inp = form.toy_rating.value;
        const toy_quantity_inp = form.toy_quantity.value;
        const toy_description_inp = form.toy_description.value;

        const newToy = {
            picture: toy_img_url_inp,
            name: toy_name_inp,
            seller_name: user.displayName,
            seller_email: user.email,
            sub_category: toy_sub_cat_inp,
            price: toy_price_inp,
            rating: toy_rating_inp,

            quantity: toy_quantity_inp,
            description: toy_description_inp,
            created_by: user.uid,
        };
        console.log(newToy);

        fetch(`${import.meta.env.VITE_API_BASE_URL}toy/update/${_id}`, {
            method: "PUT",
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
                        text: "Toy Updated successfully",
                        icon: "success",
                        confirmButtonText: "Ok",
                    });
                }
            });
    };

    return (
        <div className="bg-[#ddd] p-24">
            <h1 className="text-3xl">Add Toy Information</h1>
            <form onSubmit={handleEditToy}>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Image URL</span>
                        </label>
                        <label className="input-group input-group-sm">
                            <input
                                type="text"
                                placeholder="Please provide toy image url"
                                defaultValue={picture}
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
                                defaultValue={name}
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
                                defaultValue={sub_category}
                            >
                                <option value="">-- Select One --</option>
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
                                defaultValue={price}
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
                                defaultValue={rating}
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
                                defaultValue={quantity}
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
                                defaultValue={description}
                            ></textarea>
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-4 mt-3">
                    <input
                        type="submit"
                        value="Update"
                        className="btn btn-block"
                    />
                </div>
            </form>
        </div>
    );
};

export default EditToy;
