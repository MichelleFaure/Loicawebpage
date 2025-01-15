"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { poppins } from "@/app/fonts/fonts";
import testimonials from "@/data/testimonials.json"


function Opinions() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container bg-coral w-full min-h-[550px] pt-12 ">
      <h2 className="text-6xl text-light-coral text-center mb-20">
        Testimonios
      </h2>
      <Slider {...settings} className="m-auto w-3/4">
        {testimonials.map((testimony, index: number) => {
          return (
            <div className="p-2" key={index}>
              <div className="bg-light-coral p-4 rounded-lg  ">
                <div className="flex flex-row gap-2 items-center ">
                  <Image
                    src="/layout/logoOpinion.png"
                    alt="logo loica"
                    width={35}
                    height={30}
                  />
                  <div className="font-medium">
                    {testimony.name}, {testimony.age}
                  </div>
                </div>
                <div className="mt-2">Terapeuta: {testimony.terapeuta}</div>
                <div className={`text-xs mt-4 ${poppins.className}`}>
                  {testimony.opinion}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
export default Opinions;
