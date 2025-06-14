"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { poppins } from "@/app/fonts/fonts";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const Company = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };
  return (
    <div className="max-w-screen-lg mx-auto px-4 my-32">
      <h3
        className={`text-grey-font md:text-3xl text-center ${poppins.className}`}
      >
        QUIENES HAN CONFIADO EN LOICA
      </h3>
      <div className="slider-container my-10 ">
        <Slider {...settings}>
          <div className="p-2">
            <Image
              src="/companias/comp1.png"
              alt="logo loica"
              width={133}
              height={32}
            />
          </div>
          <div className="p-2">
            <Image
              src="/companias/comp2.png"
              alt="logo loica"
              width={133}
              height={32}
            />
          </div>
          <div className="p-2">
            <Image
              src="/companias/comp3.png"
              alt="logo loica"
              width={133}
              height={32}
            />
          </div>
          <div className="p-2">
            <Image
              src="/companias/comp4.png"
              alt="logo loica"
              width={133}
              height={32}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default Company;
