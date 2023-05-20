import React, { useEffect, useRef, useState } from 'react';
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './Toys.css';
import useTitle from '../Hooks/useTitle';

const Toys = () => {
    useTitle("All Toys"); 

    const [toysList, setToysList] = useState([]);
    const [page, setPage]= useState(1);
    const [limit, setLimit] = useState(20);
    const ref = useRef(null);

    useEffect(() => {
        fetch(
            `${
                import.meta.env.VITE_API_BASE_URL
            }toys?page=${page}&limit=${limit}`
        )
            .then((res) => res.json())
            .then((data) => setToysList(data));
    }, [limit, page]);

    const srchHandler =(event)=>{
        event.preventDefault();
        const form = event.target;
        const srchText = form.srchText.value;
        if (srchText != "") {
            fetch(`${import.meta.env.VITE_API_BASE_URL}toy/search/${srchText}`)
                .then((res) => res.json())
                .then((data) => setToysList(data));
        }
        
    }

    const resetHandler = () => {
        fetch(
            `${
                import.meta.env.VITE_API_BASE_URL
            }toys?page=${page}&limit=${limit}`
        )
            .then((res) => res.json())
            .then((data) => {
                setToysList(data);
                ref.current.value = "";
            });
    }

    return (
        <div className="custom-container mx-auto px-4 pt-4 overflow-x-auto">
            <h1 className="text-center text-3xl font-bold">
                Available all toys
            </h1>
            <div className="flex">
                <form
                    className="form-control mb-4 text-right mr-2"
                    onSubmit={srchHandler}
                >
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Search…"
                            name="srchText"
                            ref={ref}
                            className="input input-bordered input-sm"
                        />
                        <button type="submit" className="btn btn-square btn-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
                <button className="btn btn-sm" onClick={resetHandler}>
                    Reset
                </button>
            </div>
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
                            <th>
                                {page === 1
                                    ? index + 1
                                    : Math.round((page-1) * limit + index + 1)}
                            </th>
                            <td>{toy.seller_name}</td>
                            <td>{toy.name}</td>
                            <td>{toy.sub_category}</td>
                            <td>{toy.price}</td>
                            <td>{toy.quantity}</td>
                            <td>
                                <Link to={"/toy/" + toy._id}>
                                    <button className="btn btn-sm">
                                        <BsFillEyeFill></BsFillEyeFill>
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-center my-6">
                <div className="btn-group">
                    <button
                        className="btn btn-sm"
                        onClick={() => {
                            page === 1 ? setPage(1) : setPage(page - 1);
                        }}
                        disabled={page === 1}
                    >
                        «
                    </button>
                    <button className="btn btn-sm">Page {page}</button>
                    <button
                        className="btn btn-sm"
                        onClick={() => {
                            page === Math.round(10000 / limit)
                                ? setPage(Math.round(10000 / limit))
                                : setPage(page + 1);
                        }}
                        disabled={page === Math.round(10000 / limit)}
                    >
                        »
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Toys;