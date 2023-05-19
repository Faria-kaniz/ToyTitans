import React, { Component } from "react";
import Slider from "react-slick";

export default class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
        <div>
            <h2>Auto Play</h2>
            <Slider {...settings}>
                <div>
                    <img src="https://i.ibb.co/2vTfXQ5/1.png" alt="" />
                </div>
                <div>
                    <h3>
                        <img src="https://i.ibb.co/2vTfXQ5/1.png" alt="" />
                    </h3>
                </div>
                <div>
                    <h3>
                        <img src="https://i.ibb.co/2vTfXQ5/1.png" alt="" />
                    </h3>
                </div>
                <div>
                    <h3>
                        <img src="https://i.ibb.co/2vTfXQ5/1.png" alt="" />
                    </h3>
                </div>
                <div>
                    <h3>
                        <img src="https://i.ibb.co/2vTfXQ5/1.png" alt="" />
                    </h3>
                </div>
                <div>
                    <h3>
                        <img src="https://i.ibb.co/2vTfXQ5/1.png" alt="" />
                    </h3>
                </div>
            </Slider>
        </div>
    );
  }
}