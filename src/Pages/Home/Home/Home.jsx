import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Gallery from '../../../components/Gallery/Gallery';
import TabSection from '../../../components/TabSection/TabSection';
import Banner from '../Banner/Banner';

const Home = () => {
    const toysList = useLoaderData();  
    return (
        <div>
            <Banner />
            <Gallery toysList={toysList} />
            <TabSection toysList={toysList} />
        </div>
    );
};

export default Home;