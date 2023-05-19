import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleToy from "../SingleToy/SingleToy";

const Toys = ({children}) => {
    const toysList = useLoaderData();    
    console.log(toysList);

    return (
        <div className="container flex">
            {toysList.map((toy) => (
                <SingleToy key={toy._id} toy={toy} >{children}</SingleToy>
            ))}
        </div>
    );
};

export default Toys;