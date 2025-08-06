import Image from "next/image";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profileImage from "../public/Photo.png";

// Sample Data
const slidesData = [
  {
    imagePath: profileImage,
    reviewwerName: "John Smith",
    reviewwerDesignation: "CEO",
    reviewDescription:
      "Ranav Technologies exceeded our expectations! Their team delivered a seamless and user-friendly mobile application that perfectly met our business needs. Highly recommended!",
  },
  {
    imagePath: profileImage,
    reviewwerName: "Emma Johnson",
    reviewwerDesignation: "Marketing Head",
    reviewDescription:
      "Working with Ranav Technologies has been a game-changer for our business. Their expertise in web development helped us launch a high-performing website that attracts more customers.",
  },
  {
    imagePath: profileImage,
    reviewwerName: "David Brown",
    reviewwerDesignation: "Founder",
    reviewDescription:
      "The Ranav Technologies team developed an intuitive and scalable mobile app for us. Their attention to detail and technical expertise truly stand out.",
  },
  {
    imagePath: profileImage,
    reviewwerName: "Sophia Martinez",
    reviewwerDesignation: "Product Manager",
    reviewDescription:
      "Their QA testing services ensured our software was bug-free and delivered on time. We appreciate their professionalism and commitment to quality.",
  },
];

const testimoialTwo = [
  {
    imagePath: profileImage,
    reviewwerName: "Michael Lee",
    reviewwerDesignation: "CEO",
    reviewDescription:
      "The team at Ranav Technologies is always responsive and ready to assist. Their support made our project smooth and stress-free.",
  },
  {
    imagePath: profileImage,
    reviewwerName: "Olivia Davis",
    reviewwerDesignation: "Project Lead",
    reviewDescription:
      "We were impressed with Ranav Technologies' ability to deliver our project ahead of schedule without compromising on quality. Their efficiency is commendable.",
  },
  {
    imagePath: profileImage,
    reviewwerName: "Daniel Wilson",
    reviewwerDesignation: "CTO",
    reviewDescription:
      "Ranav Technologies provided innovative solutions that enhanced our digital presence. Their expertise in Flutter and React Native helped us build a robust mobile application.",
  },
  {
    imagePath: profileImage,
    reviewwerName: "Liam Anderson",
    reviewwerDesignation: "Product Manager",
    reviewDescription:
      "Professional, skilled, and dedicated—Ranav Technologies truly stands out in the IT industry. Their commitment to excellence made our collaboration a success!",
  },
];

// Clamp logic
const clampText = (text, maxChars) => {
  return text.length > maxChars ? text.slice(0, maxChars).trim() + "..." : text;
};

const TestimonialOne = () => {
  const settings = {
    cssEase: "linear",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 20000,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    variableWidth: true,
  };

  const settings2 = {
    ...settings,
    rtl: true,
  };

  // Approx max chars for 3 lines across all devices
  const MAX_CHARS = 200;

  return (
    <section className="overflow-hidden mb-20 py-10 sm:py-20 bg-white">
      <Slider {...settings}>
        {slidesData.map((slide) => {
          const displayText = clampText(slide.reviewDescription, MAX_CHARS);
          return (
            <div className="slide-wrapper !w-auto px-3" key={slide.reviewwerName}>
              <div className="flex gap-3 md:gap-5 flex-col w-[280px] sm:w-[350px] md:w-[500px] justify-between bg-white px-4 md:px-8 py-5 md:py-8 border border-[#00000033] rounded-3xl shadow-sm h-[180px]  lg:h-[220px]">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src={slide.imagePath} alt="avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs md:text-lg font-extrabold text-gray-900">{slide.reviewwerName}</p>
                    <p className="text-xs md:text-lg text-[#F69331] font-medium">{slide.reviewwerDesignation}</p>
                  </div>
                </div>
                <p className="text-xs md:text-base text-gray-700 font-normal leading-relaxed">
                  {displayText}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className=" w-full h-6 "></div>
      <Slider {...settings2}>
        {testimoialTwo.map((slide) => {
          const displayText = clampText(slide.reviewDescription, MAX_CHARS);
          return (
            <div className="slide-wrapper !w-auto px-3" key={slide.reviewwerName}>
              <div className="flex gap-3 md:gap-5 flex-col w-[280px] sm:w-[350px] md:w-[500px] justify-between bg-white px-4 md:px-8 py-5 md:py-8 border border-[#00000033] rounded-3xl shadow-sm h-[180px]  lg:h-[220px]">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src={slide.imagePath} alt="avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs md:text-lg font-extrabold text-gray-900">{slide.reviewwerName}</p>
                    <p className="text-xs md:text-lg text-[#F69331] font-medium">{slide.reviewwerDesignation}</p>
                  </div>
                </div>
                <p className="text-xs md:text-base text-gray-700 font-normal leading-relaxed">
                  {displayText}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default TestimonialOne;
