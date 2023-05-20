import React from "react";
import "./Gallery.css";

const Gallery = ({ toysList }) => {
    return (
        <div className="custom-container">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {toysList.map((ele, index) => {
                    if (index < 12) {
                        return (
                            <div key={ele._id} className="card w-full h-40">
                                <figure>
                                    <img src={ele.picture} alt={ele.name} />
                                </figure>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Gallery;
