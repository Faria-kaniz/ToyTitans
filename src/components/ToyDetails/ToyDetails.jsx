import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

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
        <div className="card mx-2">
            <div className="img">
                <img src={picture} alt="toy" />
            </div>
            <span>{name}</span>
            <p className="info">{description}</p>
            <div className="share"></div>
            <Link to="">
                <button className="btn btn-sm">View Details</button>
            </Link>
        </div>
    );
};

export default ToyDetails;