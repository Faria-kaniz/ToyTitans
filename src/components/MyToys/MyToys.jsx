import React, { useContext, useEffect, useState } from "react";
import { BsFillEyeFill, BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import "./MyToys.css";

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}toys?userId=${user.uid}`)
            .then((res) => res.json())
            .then((data) => setMyToys(data));
    }, []);

    const deleteToyHandler = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_BASE_URL}toy/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Toy has been deleted.",
                                "success"
                            );
                            const remaining = myToys.filter(
                                (toy) => toy._id !== id
                            );
                            setMyToys(remaining);
                        }
                    });
            }
        });
    };

    return (
        <>
            <h1 className="text-center">Available all toys</h1>
            <div className="custom-container mx-auto px-4 pt-4 overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToys.map((toy, index) => (
                            <tr key={toy._id}>
                                <th>{index + 1}</th>
                                <td>{toy.seller_name}</td>
                                <td>{toy.name}</td>
                                <td>{toy.sub_category}</td>
                                <td>{toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td>
                                    <div className="btn-group btn-group-horizontal lg:btn-group-horizontal">
                                        <Link to={"/toy/" + toy._id}>
                                            <button className="btn btn-sm mr-1">
                                                <BsFillEyeFill></BsFillEyeFill>
                                            </button>
                                        </Link>
                                        <Link to={"/toy/update/" + toy._id}>
                                            <button className="btn btn-sm mr-1">
                                                <FaEdit></FaEdit>
                                            </button>
                                        </Link>
                                        <button
                                            className="btn btn-sm"
                                            onClick={() =>
                                                deleteToyHandler(toy._id)
                                            }
                                        >
                                            <BsTrash></BsTrash>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyToys;
