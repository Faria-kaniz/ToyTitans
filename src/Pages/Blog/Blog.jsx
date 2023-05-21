import React from 'react';
import useTitle from "../../components/Hooks/useTitle";
import './Blog.css';

const Blog = () => {
    useTitle("Blog"); 
    return (
        <div className="custom-container mx-auto px-4 pt-4 overflow-x-auto">
            <div
                tabIndex={0}
                className="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-3"
            >
                <div className="collapse-title text-xl font-medium border-0 border-b-2">
                    What is an access token and refresh token? How do they work
                    and where should we store them on the client-side?
                </div>

                <div className="collapse-content mt-3">
                    <p>
                        An access token is a credential that represents the
                        authorization granted to a client. On the other hand
                        refresh token is a credential that is used to obtain a
                        new access token when the current access token
                        expires.To mitigate these risks, we can use techniques
                        like setting secure and HTTP-only flags for cookies, or
                        encrypting and obfuscating access tokens when stored in
                        local storage.
                    </p>
                </div>
            </div>

            <div
                tabIndex={0}
                className="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-3"
            >
                <div className="collapse-title text-xl font-medium border-0 border-b-2">
                    Compare SQL and NoSQL databases?
                </div>

                <div className="collapse-content mt-3">
                    <p>
                        SQL databases generally scale vertically by increasing
                        the hardware resources of a single server. While some
                        SQL databases support horizontal scaling, it can be more
                        challenging due to the need to maintain data consistency
                        across multiple servers.
                        <br />
                        <br />
                        NoSQL databases are designed for horizontal scalability.
                        They can distribute data across multiple servers and
                        handle large amounts of data and high traffic loads
                        efficiently.
                    </p>
                </div>
            </div>
            <div
                tabIndex={0}
                className="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-3"
            >
                <div className="collapse-title text-xl font-medium border-0 border-b-2">
                    What is express js? What is Nest JS?
                </div>

                <div className="collapse-content mt-3">
                    <p>
                        Express.js is a minimalist web application framework for
                        Node.js, while NestJS is a progressive framework built
                        with TypeScript that provides a powerful architecture
                        for building scalable server-side applications
                    </p>
                </div>
            </div>
            <div
                tabIndex={0}
                className="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-3"
            >
                <div className="collapse-title text-xl font-medium border-0 border-b-2">
                    What is MongoDB aggregate and how does it work?
                </div>

                <div className="collapse-content mt-3">
                    <p>
                        MongoDB's aggregation framework is a powerful feature
                        that allows for advanced data processing and analysis
                        within the database. It provides a way to perform
                        complex queries, transformations, and aggregations on
                        MongoDB collections.
                        <br />
                        <br />
                        Aggregation functions like $sum, $avg, $min, $max, and
                        $count can be used in the $group stage to calculate
                        aggregated values based on specific criteria. The
                        aggregation framework is highly flexible and can handle
                        complex queries and aggregations efficiently within the
                        database. It allows you to perform tasks like data
                        summarization, statistical analysis, grouping, joining,
                        and more, making it a powerful tool for data processing
                        and analytics in MongoDB.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;