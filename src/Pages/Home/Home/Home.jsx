import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Gallery from "../../../components/Gallery/Gallery";
import useTitle from "../../../components/Hooks/useTitle";
import TabSection from "../../../components/TabSection/TabSection";
import Banner from "../Banner/Banner";
import Recommendations from "../Recommendations/Recommendations";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
    useTitle("Home"); 
    const toysList = useLoaderData();
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 200,
        });
    }, []);
    return (
        <div>
            <Banner />
            <div className="divider"></div>
            <div data-aos="fade-up">
                <Gallery toysList={toysList} />
            </div>
            <div className="divider"></div>
            <div data-aos="fade-up">
                <TabSection toysList={toysList} />
            </div>

            <div className="divider"></div>
            <div data-aos="zoom-out">
                <Recommendations />
            </div>

            <div className="divider"></div>
            <div data-aos="zoom-out">
                <Subscribe/>
            </div>
        </div>
    );
};

export default Home;
