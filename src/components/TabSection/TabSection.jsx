import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import './TabSection.css';

const TabSection = ({ toysList }) => {
    const [dataList, setDataList] = useState([]);
    const loadData = (type) => {
        // console.log(type);
        const filterData = toysList.filter((ele) => ele.sub_category == type);
        setDataList(filterData);
        console.log(filterData);
    }

    useEffect(()=>{
        loadData("Marvel");
    },[])

    return (
        <div className="custom-container mt-4">
            <h1 className="text-center text-5xl font-bold my-8">
                Shop by category
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
                        <h2>Marvel {dataList.length}</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Avengers {dataList.length}</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Star Wars {dataList.length}</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Transformers {dataList.length}</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TabSection;