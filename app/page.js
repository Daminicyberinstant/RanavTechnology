'use client';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Mousewheel } from 'swiper/modules';
import Link from 'next/link';
import TestimonialsSection from '@/components/TestimonialsSection';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BlogsSection from '@/components/BlogsSection';


import Image from 'next/image';


import React, { useState } from "react";


import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message should be at least 10 characters long")
    .required("Message is required"),
});

const Page = ({ requestQuote }) => {
  const [status, setStatus] = useState("");
   const [openIndex, setOpenIndex] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setStatus("Sending...");

      try {
        const response = await axios.post("/api/sendEmail", values);

        if (response.data.success) {
          setStatus("Email sent successfully!");
          resetForm();
        } else {
          setStatus("Failed to send email.");
        }
      } catch (error) {
        console.error(error);
        setStatus("An error occurred while sending the email.");
      }
    },
  });
  


const logos = [
  { src: "/Amazon_Web.png", alt: "Amazon" },
  { src: "/HTML5_logo.png", alt: "HTML5" },
  { src: "/python.png", alt: "Python" },
  { src: "/postgresql.png", alt: "PostgreSQL" },
  { src: "/Nodejs.png", alt: "Node.js" },
  { src: "/react-logo.png", alt: "React" },
  { src: "/Google.svg", alt: "Google" },
]


const settingss = {
  cssEase: "linear",
    centerMode: true,
    rtl: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const services = [
    {
      title: "Data Engineering",
      description:
        "Our data engineering services help you extract valuable insights, optimize operations, and make data-driven decisions.",
      image: "/services-slide1.jpg",
      bggredient:
        "linear-gradient(90deg, #014D57 0%, rgba(1, 110, 124, 0.6) 100%)",

      textDark: false,
    },
    {
      title: "Software Development",
      description:
        "We Build custom software solutions that drive business growth. Our development team creates efficient, scalable applications tailored to your specific needs.",
      image: "/services-slide2.jpeg",
      bggredient:
        "linear-gradient(90deg, #F9F9F9 0%, rgba(210, 210, 210, 0.6) 100%)",
      textDark: true,
    },
    {
      title: "Mobile App & Website Development",
      description:
        "We Build custom software solutions that drive business growth. Our development team creates efficient, scalable applications tailored to your specific needs.",
      image: " /services-slide3.jpeg",
      bggredient:
        "linear-gradient(90deg, #FEC286 0%, rgba(255, 255, 255, 0.6) 100%)",
      textDark: true,
    },
    {
      title: "API Development",
      description:
        "Integrate seamlessly and unlock new opportunities. Our API development services enable data sharing, system interoperability, and efficient business processes.",
      image: "/services-slide4.jpeg",
      bggredient:
        "linear-gradient(90deg, #B5D0D3 0%, rgba(181, 208, 211, 0.6) 100%)",
      textDark: true,
    },
    {
      title: "UIUX Design",
      description:
        "We Create exceptional user experiences that boost customer satisfaction and loyalty. Our design expertise enhances brand perception and drives conversions.",
      image: " /services-slide5.jpeg",
      bggredient:
        "linear-gradient(90deg, #FFE4CB 0%, rgba(255, 255, 255, 0.6) 100%)",
      textDark: true,
    },
    {
      title: "Software Testing",
      description:
        "We are focused on Mitigating risks and ensuring product quality. Our comprehensive testing services help you deliver reliable software that meets user expectations.",
      image: " /services-slide6.jpeg",
      bggredient:
        "linear-gradient(90deg, #225A77 0%, rgba(34, 90, 119, 0.6) 100%)",
      textDark: false,
    },
  ];



  const slidesData = [
    {

      bgGradient: "linear-gradient(135deg, #013b45, #05111d)",

      title: "Coding Seamless Custom Solutions for Your Business",
      description:
        "We deliver solutions that streamline operations, & drive measurable results, ensuring you stay ahead in a competitive landscape.",
      stats: [
        { value: "500+", label: "Hours of Innovation" },
        { value: "30+", label: "Technologies Used" },
        { value: "50+", label: "Industry Awards" },
        { value: "10+", label: "Years of Experience" },
      ],
      specialWords: ["Seamless", "Solutions"],
      blendMode: true,
    },
    {
      background: "/slide2-bg.jpg",
      bgGradient:
        "linear-gradient(52.91deg, rgba(0, 38, 58, 1) 1.12%, rgba(2, 113, 126, 0.9) 79.96%)",
      title: "Elevating Your Vision with Intuitive Mobile Apps",
      description:
        "From user-centered design to powerful functionality, we build mobile apps that engage users and drive your brand’s success.",
      stats: [
        { value: "120+", label: "Projects Delivered" },
        { value: "300+", label: "Happy Clients" },
        { value: "200+", label: "Successful Campaigns" },
        { value: "30+", label: "Industries Covered" },
      ],
      specialWords: ["Mobile", "Apps"],
      blendMode: false,
    },
    {
      background: "/slide3-bg.gif",
      bgGradient:
        "linear-gradient(52.91deg, rgba(0, 38, 58, 0.85) 1.12%, rgba(2, 113, 126, 0.9) 79.96%)",
      title: "Building Websites that Inspire & Perform",
      description:
        "Elevate your digital presence with a website that’s tailored to your brand and designed to connect, captivate, and convert users.",
      stats: [
        { value: "700+", label: "Hours of Innovation" },
        { value: "200+", label: "Websites Delivered" },
        { value: "150+", label: "Happy Clients" },
        { value: "10+", label: "Years of Experience" },
      ],
      specialWords: ["Websites"],
      blendMode: false,
    },
  ];

  const settings = {
    cssEase: "linear",
    centerMode: false,
    autoplay: true,
    speed: 800,
    arrows: false,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (<>
    <main >
      <section className="mb-10 sm:mb-20 container mx-auto  my-10">
        <Slider {...settings}>
          {slidesData.map((slide, index) => {
            return (
              <div className="slide-wrapper relative " key={slide.title}>
                <div
                  className="banner-slider h-[calc(100vh-130px)] bg-cover bg-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-12 !pb-6 sm:!pb-10 rounded-40 text-white flex justify-between flex-col rounded-[40px]"
                  style={{
                    backgroundImage: `${slide.bgGradient}, url(${slide.background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}

                >
                  <div className="border text-[10px] sm:text-sm md:text-xl opacity-80 leading-5 sm:leading-6 border-white text-white font-karla font-thin px-4 sm:px-6 py-1 rounded-full w-fit text-center">
                    Explore . Execute . Elevate
                  </div>
                  <h1 className="text-4xl md:text-7xl font-archivo font-semibold max-w-5xl">
                    {slide.title.split(" ").map((word, i) => {
                      const isSpecial = slide.specialWords.includes(word);
                      return (
                        <span
                          key={i}
                          className={isSpecial ? "text-gradient" : ""}
                        >
                          {word}{" "}
                        </span>
                      );
                    })}
                  </h1>
                  <div>
                    <div className="flex justify-between flex-col-reverse md:flex-row gap-10 sm:gap-20 md:gap-40 md:items-end mb-4 sm:mb-6">
                      <div className="flex gap-2 justify-between sm:gap-8">
                        {slide.stats.map((stat, index) => {
                          return (
                            <p
                              className="text-2xl md:text-4xl leading-none font-bold text-white font-archivo flex flex-col"
                              key={stat.value}
                            >
                              {stat.value}
                              <span className="text-[8px] sm:text-sm font-karla font-normal">
                                {stat.label}
                              </span>
                            </p>
                          );
                        })}
                      </div>
                      <p className="text-sm sm:text-base font-karla">
                        {slide.description}
                      </p>
                    </div>
                    <Link href="#about-section" passHref>
                      <div className="hidden md:block text-center border border-white max-w-32 cursor-pointer text-xs uppercase rounded-full m-auto p-2">
                        scroll
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>

      







   <section
      id="about-section"
      className="mx-auto container  relative mb-8 sm:mb-28 px-4 md:px-20 py-4 md:pt-24 pb-10 rounded-2xl scroll-mt-20"
      style={{
        background: "linear-gradient(180deg, #E7EAEB 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex justify-between flex-col md:flex-row pb-5 md:pb-10 items-start md:items-end gap-4">
        <h1 className="text-4xl md:text-6xl text-ranav-dark-teal font-bold">About us</h1>
        
        <Link href="/about">
          <button className="hover:text-white hover:bg-gray-800 px-4 py-2 border border-ranav-dark-teal rounded-full text-lg md:text-1xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            READ MORE
          </button>

        </Link>



      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-between z-10 relative">
        <div className="w-full md:w-3/5 relative hidden md:block">
          <Image
            src="/about-us-image-2.webp"
            alt="about us"
            width={600}
            height={400}
            className="w-full h-full rounded-[30px] object-cover"
          />

          {/* Feature cards overlay */}
          <div className="bg-white flex items-center px-5 justify-between gap-1 flex-row w-80 h-24 absolute -bottom-10 left-16 rounded-[10px] shadow-lg">
            <div className="group flex flex-col gap-1 items-center text-center cursor-pointer">
              <div className="relative w-8 h-8 flex items-center justify-center rounded-full">
                <div className="absolute inset-0 bg-orange-500 opacity-30 blur-lg rounded-full scale-0 transition-all duration-300 group-hover:scale-125"></div>
                <Image
                  src="/icon-smile.webp"
                  alt="satisfied clients icon"
                  width={32}
                  height={32}
                  className="relative z-10 transition-all duration-300 group-hover:scale-125"
                />
              </div>
              <p className="text-[8.5px] leading-[10px] font-karla transition-all duration-300 group-hover:text-orange-500">
                Satisfied <br /> Clients
              </p>
            </div>

            <div className="group flex flex-col gap-1 items-center text-center cursor-pointer">
              <div className="relative w-8 h-8 flex items-center justify-center rounded-full">
                <div className="absolute inset-0 bg-ranav-dark-teal opacity-30 blur-lg rounded-full scale-0 transition-all duration-300 group-hover:scale-125"></div>
                <Image
                  src="/icon-setting.png"
                  alt="industry skillset icon"
                  width={32}
                  height={32}
                  className="relative z-10 transition-all duration-300 group-hover:scale-125"
                />
              </div>
              <p className="text-[8.5px] leading-[10px] font-karla transition-all duration-300 group-hover:text-ranav-dark-teal">
                Industry&apos;s <br />
                best Skillset
              </p>
            </div>

            <div className="group flex flex-col gap-1 items-center text-center cursor-pointer">
              <div className="relative w-8 h-8 flex items-center justify-center rounded-full">
                <div className="absolute inset-0 bg-orange-500 opacity-30 blur-lg rounded-full scale-0 transition-all duration-300 group-hover:scale-125"></div>
                <Image
                  src="/icon-timeline.webp"
                  alt="timeless experience icon"
                  width={32}
                  height={32}
                  className="relative z-10 transition-all duration-300 group-hover:scale-125"
                />
              </div>
              <p className="text-[8.5px] leading-[10px] font-karla transition-all duration-300 group-hover:text-orange-500">
                Timeless <br />
                Experience
              </p>
            </div>

            <div className="group flex flex-col gap-1 items-center text-center cursor-pointer">
              <div className="relative w-8 h-8 flex items-center justify-center rounded-full">
                <div className="absolute inset-0 bg-ranav-dark-teal opacity-30 blur-lg rounded-full scale-0 transition-all duration-300 group-hover:scale-125"></div>
                <Image
                  src="/icon-code.png"
                  alt="best developers icon"
                  width={32}
                  height={32}
                  className="relative z-10 transition-all duration-300 group-hover:scale-125"
                />
              </div>
              <p className="text-[8.5px] leading-[10px] font-karla transition-all duration-300 group-hover:text-ranav-dark-teal">
                Best <br />
                Developers
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/5">
          <p className="text-sm leading-6 md:leading-8 md:text-xl font-normal font-karla text-justify text-black">
            At Ranav Technologies, we specialize in crafting innovative, custom tech solutions that empower businesses
            to thrive in a digital-first world. With a focus on efficiency and growth, we deliver cutting-edge
            technology designed to meet the unique challenges of modern enterprises.
            <br />
            <br />
            Our team combines technical expertise with a deep understanding of business needs, ensuring that every
            solution we create is reliable, scalable, and impactful. From startups to established corporations, we
            partner with our clients to drive success through technology.
          </p>
        </div>
      </div>

      {/* Background image */}
      {/* <Image
        src="/about-us-bg.webp"
        alt="abstract background pattern"
fill
         className="absolute top-0 right-0 w-full h-full "
      /> */}
    </section>

   


    <section className="teck-slider mb-10 sm:mb-28">
      <Slider {...settingss}>
        {logos.map((logo, idx) => (
          <div key={idx} className="flex items-center justify-center h-[100px] px-4">
            <div className="w-[90px] h-[90px] flex items-center justify-center">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={90} // Explicit width
                height={90} // Explicit height
                objectFit="contain" // Ensures image scales within bounds without cropping
                unoptimized={logo.src.endsWith(".svg") || logo.src.endsWith(".gif")} // Unoptimized for SVG/GIF
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>


      <section className="container mb-10 sm:mb-28 mx-auto">
        <div className="flex flex-col justify-center gap-3 items-center mb-5 md:mb-14 overflow-auto">
       
              <h2 className="text-[86px] leading-[104px] font-normal text-[#212121] font-archivo text-center">
Our Services
</h2>
          <p className="text-lg md:text-xl text-black font-karla py-2 md:py-5 font-normal">
            We deliver results. Our services are designed to simplify your
            business, improve efficiency, and keep you ahead
          </p>
        </div>
        
<div className="mt-6 flex flex-col-reverse md:flex-row justify-between gap-6">
  
  {/* Left Box */}
  <div className="w-full md:w-1/3 h-[502px] flex flex-col justify-center md:bg-white md:px-10 md:py-12 md:border border-[#00000033] rounded-[30px] overflow-hidden">

    <h4 className="text-2xl md:text-[2rem] text-black font-archivo mb-5 font-semibold">We Deliver Results</h4>
    <p className="text-sm md:text-xl leading-4 md:leading-8 text-black font-light font-karla mb-5">
      At Ranav Technologies, we don&apos;t just offer services—{" "}
      <span className="text-ranav-primary font-semibold">we deliver outcomes</span>. Whether it&apos;s boosting
      efficiency, enhancing security, or improving customer experiences, our solutions are designed to create{" "}
      <span className="text-ranav-primary font-semibold">measurable impact</span>. We help you achieve more with
      technology that works as hard as you do.
    </p>
    <Link href="/services#our-process">
      <button className="text-gray-700 border border-gray-700 px-5 py-2 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300">
        OUR PROCESS
      </button>
    </Link>
  </div>

  {/* Right Box with Swiper */}
  <div className="w-full md:w-2/3 h-[502px] relative rounded-[30px] overflow-hidden">
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      modules={[Mousewheel]}
      className="mySwiper h-full w-full"
    >
      {services.map((service, index) => (
        <SwiperSlide key={index}>
          <div
            className="stacking-slide relative px-8 md:px-14 py-10 md:py-20 text-white flex flex-col h-full gap-6"
            style={{
              background: `${service.bggredient}, url('${service.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "30px", // Directly apply here as fallback
            }}
          >
            <h2 className={`text-4xl font-bold z-10 font-archivo ${service.textDark ? "text-black" : "text-white"}`}>
              {service.title}
            </h2>
            <p
              className={`text-sm md:text-2xl z-10 font-light font-karla ${
                service.textDark ? "text-black" : "text-white"
              }`}
            >
              {service.description}
            </p>
                <Link
                      href="/services#our-process"
                     
                    >
            <button
              className={`w-fit z-10 border hover:border-ranav-dark-teal ${
                service.textDark ? "text-black border-black" : "text-white border-white"
              } rounded-full font-karla text-sm md:text-xl px-8 py-2 hover:bg-ranav-dark-teal hover:text-white transition-colors duration-300`}
            >
              EXPLORE MORE
            </button>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>


    </section>



     
      <section className="container mb-10 sm:mb-28 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-[86px] leading-[104px] font-normal text-[#016E7C] font-archivo text-center">
          Our Projects
          </h2>
        <p className="text-lg md:text-xl text-black font-karla py-2 md:py-5 font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Lorem Ipsum is simply
          </p>
        </div>

  <div className="flex flex-col md:flex-row items-stretch gap-10 md:gap-14 mb-12">
  {/* Image Container */}
  <div className="w-full md:w-[35%] h-[400px] md:h-[452px] bg-[#e9f1f1] rounded-[30px] p-6 flex items-center justify-center overflow-hidden">
    <Image
      src="/Rectangle 73.png"
      alt="SyncTime Main"
      className="h-full w-auto object-contain"
    />
  </div>

  {/* Text Content */}
  <div className="w-full md:w-[65%] md:h-[452px] bg-white rounded-2xl shadow p-8 flex flex-col justify-center">

    <h3 className="text-4xl font-semibold mb-6">Sync Time</h3>
    <p className="text-2xl mb-6 leading-relaxed">
      SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.
    </p>
    <Link
      href="/portfolio/sync-time"
      className="flex justify-between items-center font-semibold gap-4 bg-[#d3e9ed] hover:bg-[#01263b] hover:text-white text-2xl px-8 py-4 text-[#046d7a] rounded-full w-full transition-all"
    >
      <span>VIEW MORE</span> <span className="font-bold text-4xl">→</span>
    </Link>
  </div>
</div>



  <div className="flex flex-col md:flex-row items-stretch gap-10 md:gap-14 mb-12">
    

       
        <  div className="w-full md:w-[65%] md:h-[452px] bg-white rounded-2xl shadow p-8 flex flex-col justify-center">

            <h3 className="text-4xl font-semibold mb-6">Ultrasound MD</h3>
            <p className="text-2xl  mb-6 leading-relaxed my-4">
              We partnered with Ultrasound MD to design & develop a cutting-edge website that streamlines their patient experience. By simplifying scheduling and providing clear information, we helped them enhance their online presence and reach a wider audience of patients in need.
            </p>
            <Link
              href="/portfolio/ultrasound-md"
              className="flex justify-between items-center font-semibold   gap-4 bg-[#d3e9ed]  hover:bg-[#01263b] hover:text-white text-2xl px-8 text-[#046d7a] py-4 rounded-full w-full transition-all"
            >
              <span> VIEW MORE</span> <span className='font-bold text-4xl'> →</span>
            </Link>
          </div>
                
       <div className="w-full md:w-[35%] h-[400px] md:h-[452px] bg-[#e9f1f1] rounded-[30px] p-6 flex items-center justify-center overflow-hidden">
    <Image
      className="h-full w-auto object-contain"
    
              src="/Group 100.png"
              alt="Ultrasound MD"
    
            />
          </div>
        </div>

        
        <Link href={'/portfolio'}>
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#d3e9ed] rounded-full px-6 py-4 hover:bg-[#01263b] hover:text-white ">
          <span className="text-2xl font-medium  ">
            Explore more Projects
          </span>
          <span className="text-xl font-medium flex items-center text-[#016E7C] gap-2 underline">
            See All projects →
          </span>
        </div>
        </Link>
      </section>


      <section> <TestimonialsSection /></section>

      <section className="-mt-16">
        <BlogsSection />
      </section>

   <section className="bg-white px-10 py-16 max-w-[1750px] mx-auto -mb-10">
  <div className="bg-[#002138] rounded-4xl text-white py-16 px-6 flex justify-center items-center relative mx-10 my-10">
    
    {/* Image Positioned Bottom Left */}
   {/* <img
  src="/Group 174.png"
  alt="group 174"
  className="absolute bottom-12 left-0 w-[250px] sm:w-[300px] lg:w-[390px] xl:w-[400px] z-0 opacity-80"
/> */}


    <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10">
      
      {/* LEFT TEXT CONTENT */}
  <div className="md:w-1/2 pr-4 my-auto">
  <div className="text-[#F9F9F9] uppercase font-karla font-light text-[32px] sm:text-[44px] lg:text-[64px] leading-[1.1] space-y-2">
    <h1>LOOKING</h1>
    <h1>FOR A TECH</h1>
    <h1>PARTNER?</h1>
  </div>

  <p className="mt-8 text-[13px] sm:text-[15px] lg:text-[28px] leading-[1.5] font-karla font-light text-[#F9F9F9] max-w-[453px]">
    Get in touch with us today. Our team is ready to discuss how we can support your business with tailored solutions that meet your goals.
  </p>
</div>

      {/* RIGHT FORM */}
      <form onSubmit={formik.handleSubmit} className="md:w-1/2 bg-[#f8f9f9] text-black p-8 rounded-3xl space-y-5 shadow-lg">
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="text-sm font-semibold text-[#007084] block mb-1">*First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="w-full px-4 py-2 rounded-full border border-gray-300 text-sm"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500 text-xs">{formik.errors.firstName}</div>
            )}
          </div>

          <div className="w-1/2">
            <label className="text-sm font-semibold text-[#007084] block mb-1">*Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="w-full px-4 py-2 rounded-full border border-gray-300 text-sm"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500 text-xs">{formik.errors.lastName}</div>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-[#007084] block mb-1">*Email Address</label>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full px-4 py-2 rounded-full border border-gray-300 text-sm"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-xs">{formik.errors.email}</div>
          )}
        </div>

        <div>
          <textarea
            placeholder="Enter Message"
            rows="4"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 text-sm resize-none"
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <div className="text-red-500 text-xs">{formik.errors.message}</div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#f7931e] text-white py-3 rounded-full text-lg font-semibold hover:bg-[#e67e00] transition"
        >
          SUBMIT
        </button>
      </form>
    </div>
  </div>
</section>




    </main>

  </>
  );
}

export default Page;
