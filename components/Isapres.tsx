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

const Isapres = () => {
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
          Isapres con convenio en Psicología
        </h3>
        <div className="slider-container my-10 ">
          <Slider {...settings}>
            <div className="p-2">
              <Image
                src="/isaplogo/isap1.png"
                alt="logo loica"
                width={133}
                height={32}
              />
            </div>
            <div className="p-2">
              <Image
                src="/isaplogo/isap2.png"
                alt="logo loica"
                width={133}
                height={32}
              />
            </div>
            <div className="p-2">
              <Image
                src="/isaplogo/isap3.png"
                alt="logo loica"
                width={133}
                height={32}
              />
            </div>
            <div className="p-2">
              <Image
                src="/isaplogo/isap4.png"
                alt="logo loica"
                width={133}
                height={32}
              />
            </div>
            <div className="p-2">
              <Image
                src="/isaplogo/isap5.png"
                alt="logo loica"
                width={133}
                height={32}
              />
            </div>
            <div className="p-2">
              <Image
                src="/isaplogo/isap6.png"
                alt="logo loica"
                width={133}
                height={32}
              />
            </div>
            <div className="p-2">
              <Image
                src="/isaplogo/isap7.png"
                alt="logo loica"
                width={133}
                height={32}
              />
            </div>
          </Slider>
        </div>
        <p
          className={`text-grey-font  font-light text-center  ${poppins.className}`}
        >
          *Debes consultar el arancel en tu Isapre, ya que es la Isapre la que dispone de esta información de acuerdo a tu plan de salud
        </p>
      </div>
    );
};
export default Isapres;
