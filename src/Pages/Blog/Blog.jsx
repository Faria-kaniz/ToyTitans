import React from 'react';
import useTitle from "../../components/Hooks/useTitle";

const Blog = () => {
    useTitle("Blog"); 
    return (
        <div>
            This is blog page
        </div>
    );
};

export default Blog;