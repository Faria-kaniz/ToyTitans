import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Toys = ({children}) => {
    const toysList = useLoaderData();    
    console.log(toysList);

    return (
        <>
            <h1 className="text-center">Available all toys</h1>
            <div className="container mx-auto px-4 pt-4 overflow-x-auto">
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
                        {toysList.map((toy, index) => (
                            <tr key={toy._id}>
                                <th>{index + 1}</th>
                                <td>{toy.seller_name}</td>
                                <td>{toy.name}</td>
                                <td>{toy.sub_category}</td>
                                <td>{toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td>
                                    <Link to={"/toy/" + toy._id}>
                                        <button className="btn btn-sm">
                                            View Details
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Toys;