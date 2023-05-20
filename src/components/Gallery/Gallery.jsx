import React from "react";
import "./Gallery.css";

const Gallery = ({ toysList }) => {
    return (
        <div className="custom-container mt-4">
            <h1 className="text-center text-5xl font-bold my-8">Gallery</h1>
            <hr />
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
                {toysList.map((ele, index) => {
                    if (index < 12) {
                        return (
                            <div
                                key={ele._id}
                                className="custom-card w-full h-40"
                            >
                                <img src={ele.picture} alt={ele.name} />
                                <div class="hover">
                                    <div class="line1"></div>
                                    <div class="line2"></div>
                                    <div class="sub_tit">{ele.name}</div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Gallery;
