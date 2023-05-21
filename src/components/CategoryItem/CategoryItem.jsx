import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryItem.css';

const CategoryItem = ({ ele }) => {
    return (
        <div className="box actionImg10">
            <div className="lm_img">
                <img src={ele.picture} alt={ele.name} />
            </div>
            <div className="lm_txt">
                <span className="sub_tit">{ele.name}</span>
                <span className="desc">
                    Price: {ele.price}
                    <br />
                    Rating: {ele.rating}
                    <br />
                    <br />
                    <Link to={"/toy/" + ele._id}>
                        <a className="actionBtn1">
                            <span className="hover"></span>
                            <span>Details</span>
                        </a>
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default CategoryItem;