import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ToyDetails.css'

const ToyDetails = () => {
    const detailsData = useLoaderData();
    const {
        _id,
        name,
        picture,
        price,
        quantity,
        rating,
        seller_email,
        seller_name,
        description,
        sub_category,
    } = detailsData;
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse w-3/5 border">
                <img
                    src={picture}
                    className="max-w-sm rounded-lg shadow-2xl w-1/3 itemImg"
                />
                <div className="w-2/3">
                    <h1 className="lg:text-5xl font-bold">{name}</h1>
                    <div className="flex justify-between">
                        <div className="w-1/2">Seller: {seller_name}</div>
                        <div className="w-1/2">Email: {seller_email}</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-1/2">Price: {price}</div>
                        <div className="w-1/2">Rating: {rating}</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-1/2">Available: {quantity}</div>
                    </div>
                    <p className="py-6">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;