import React from 'react';
import './Recommendations.css';

const Recommendations = () => {
    return (
        <div className="custom-container">
            <h1 className="text-center text-5xl font-bold my-8">
                Top Recommendations
            </h1>
            <div className="grid gap-8 mt-4">
                <div className="rec_view reqBox">
                    <span className="txt_move txt1">
                        Introducing the Super Adventure Playset
                    </span>
                    <br />
                    <span className="txt_move txt2">
                        Let your child's imagination soar with the Super
                        Adventure Playset!
                    </span>
                    <br />
                    <span className="txt_move txt3">
                        The Ultimate Fun for Kids!
                    </span>
                    <div className="line Lright"></div>
                    <div className="line Lleft"></div>
                    <div className="line Ltop"></div>
                    <div className="line Lbottom"></div>
                </div>

                <div className="rec_view reqBox text-right">
                    <span className="txt_move txt1">
                        Discover the Magic Kingdom Castle
                    </span>
                    <br />
                    <span className="txt_move txt2">
                        Make your child's dreams come true with the Magic
                        Kingdom Castle!
                    </span>
                    <br />
                    <span className="txt_move txt3">
                        {" "}
                        Order now and let the magic begin!
                    </span>
                    <div className="line Lright"></div>
                    <div className="line Lleft"></div>
                    <div className="line Ltop"></div>
                    <div className="line Lbottom"></div>
                </div>
            </div>
        </div>
    );
};

export default Recommendations;