import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryItem from '../CategoryItem/CategoryItem';
import './TabSection.css';

const TabSection = ({ toysList }) => {
    const [dataList, setDataList] = useState([]);
    const loadData = (type) => {
        // console.log(type);
        const filterData = toysList.filter((ele) => ele.sub_category == type);
        setDataList(filterData);
    }

    useEffect(()=>{
        loadData("Marvel");
    },[])

    return (
        <div className="custom-container mt-4">
            <h1 className="text-center text-5xl font-bold my-8">
                Shop by Category
            </h1>
            <hr />
            <div className="mt-4">
                <Tabs>
                    <TabList>
                        <Tab onClick={() => loadData("Marvel")}>Marvel</Tab>
                        <Tab onClick={() => loadData("Avengers")}>Avengers</Tab>
                        <Tab onClick={() => loadData("Star Wars")}>
                            Star Wars
                        </Tab>
                        <Tab onClick={() => loadData("Transformers")}>
                            Transformers
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
                            {dataList.map((ele, index) => {
                                if (index < 4) {
                                    return (
                                        <CategoryItem key={index} ele={ele} />
                                    );
                                }
                            })}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
                            {dataList.map((ele, index) => {
                                if (index < 4) {
                                    return (
                                        <CategoryItem key={index} ele={ele} />
                                    );
                                }
                            })}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
                            {dataList.map((ele, index) => {
                                if (index < 4) {
                                    return (
                                        <CategoryItem key={index} ele={ele} />
                                    );
                                }
                            })}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
                            {dataList.map((ele, index) => {
                                if (index < 4) {
                                    return (
                                        <CategoryItem key={index} ele={ele} />
                                    );
                                }
                            })}
                        </div>
                    </TabPanel>
                </Tabs>

                <div className="mt-4 text-center">
                    <Link to={"/all-toys"}>
                        <a class="actionBtn2">
                            <span class="hover"></span>
                            <span>View All Toys</span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TabSection;