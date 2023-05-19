import React from 'react';
import { Link } from 'react-router-dom';
import './SingleToy.css';

const SingleToy = ({ toy, children }) => {
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
    } = toy;
    return (
        <>
            {/* <div className="card bg-base-100 shadow-xl p-0 border border-indigo-600">
                <figure className="border border-indigo-600">
                    <img src={picture} alt="toy" />
                </figure>
                <div className="card-body border border-indigo-600 p-2">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-sm">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div> */}

            <div className="custom-card mx-2">
                <div className="img">
                    <img src={picture} alt="toy" />
                </div>
                <span>About Me</span>
                <p className="info">{description}</p>
                <div className="share"></div>
                <Link to={"/toy/" + _id}>
                    <button className="btn btn-sm">View Details</button>
                </Link>
                <br />
                {children}
            </div>
        </>
    );
};

export default SingleToy;