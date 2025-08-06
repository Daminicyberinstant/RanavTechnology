'use client';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProjectCard from '@/components/ProjectCart';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Mousewheel } from 'swiper/modules';
import Link from 'next/link';
import TestimonialsSection from '@/components/TestimonialsSection';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BlogsSection from '@/components/BlogsSection';
import ContactSection from '@/components/CTO';


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
    centerMode: false,
    rtl: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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
      title: "Coding Seamless Custom\nSolutions for Your Business",
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
      title: "Elevating Your Vision with\nIntuitive Mobile Apps",
      description:
        "From user-centered design to powerful functionality, we build mobile apps that engage users and drive your brand's success.",
      stats: [
        { value: "120+", label: "Projects Delivered" },
        { value: "15+", label: "Mobile Apps" },
        { value: "25+", label: "Happy Clients" },
        { value: "5+", label: "Years Experience" },
      ],
      specialWords: ["Mobile", "Apps"],
      blendMode: false,
    },
    {
      background: "/slide3-bg.gif",
      bgGradient:
        "linear-gradient(52.91deg, rgba(0, 38, 58, 0.85) 1.12%, rgba(2, 113, 126, 0.9) 79.96%)",
      title: "Building Websites that Inspire\n& Perform",
      description:
        "Elevate your digital presence with a website that's tailored to your brand and designed to connect, captivate, and convert users.",
      stats: [
        { value: "200+", label: "Websites Built" },
        { value: "40+", label: "Technologies" },
        { value: "35+", label: "Happy Clients" },
        { value: "8+", label: "Years Experience" },
      ],
      specialWords: ["Websites"],
      blendMode: false,
    },
  ];

  const settings = {
    cssEase: "linear",
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    arrows: false,
    pauseOnHover: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        }
      }
    ]
  };

  return (<>
    <main >
      <section className="mb-5 wrapper sm:mb-20 w-full  lg:my-10 md:my-10 my-5">
        <style jsx>{`
          .slider-with-gaps .slick-slide {
            padding: 0 20px;
          }
          .slider-with-gaps .slick-track {
            margin-left: -20px;
            margin-right: -20px;
          }
          .slider-with-gaps .slick-list {
            overflow: visible;
          }
          
        `}</style>
        <Slider {...settings} className="slider-with-gaps !w-full ">
          {slidesData.map((slide, index) => {
            return (
              <div className="slide-wrapper relative" key={slide.title}>
                <div
                  className="banner-slider h-[calc(80vh-130px)] md:h-[calc(100vh-130px)] lg:h-[calc(100vh-130px)] bg-cover bg-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 !pb-6 sm:!pb-10 rounded-40 !px-[50px] sm:!px-[75px] md:!px-[100px] text-white flex justify-between flex-col rounded-[40px] mx-2"
                  style={{
                    backgroundImage: `${slide.bgGradient}, url(${slide.background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}

                >
                  <div className="border text-[13px] lg:mx-0 md:mx-0 mx-auto lg:mt-0 mt-5 sm:text-[13px] md:text-[15px] opacity-80 leading-5 sm:leading-6 border-white text-white font-karla font-thin px-4 sm:px-6 py-1 rounded-full w-fit text-center">
                    Explore . Execute . Elevate
                  </div>
                  <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-archivo font-semibold max-w-3xl leading-tight whitespace-pre-line">
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
                              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-none font-bold text-white font-archivo flex flex-col"
                              key={stat.value}
                            >
                              {stat.value}
                              <span className="text-[8px] sm:text-[10px] md:text-[12px] font-karla font-normal opacity-80">
                                {stat.label}
                              </span>
                            </p>
                          );
                        })}
                      </div>
                      <p className="text-xs sm:text-sm md:text-base font-karla max-w-md leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                    <Link href="#about-section" passHref>
                      <div className="hidden md:block text-center border border-white max-w-32 cursor-pointer text-xs uppercase rounded-full m-auto p-2 hover:bg-white hover:text-black transition-colors duration-300">
                        SCROLL
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
        className="mx-auto wrapper2 relative mb-8  sm:mb-28 px-4 md:px-20 py-4 pt-9 md:pt-24 lg:pt-24 mt-12 md:mt-0 lg:mt-0 pb-10 rounded-2xl scroll-mt-20"
        style={{
          background: "linear-gradient(180deg, #eff1f2 0%, #FFFFFF 100%)",
        }}
      >
        {/* Background Pattern */}
        <div className="w-[50%] lg:h-full md:h-[70%] h-[70%] absolute right-0 lg:bottom-0 md:bottom-0 bottom-[-100px]">
          <Image
            src="/8628ae037f249989323eeee20868f8a1bca9d52d.png"
            alt="about us"
            fill
            className="w-full rotate-180 opacity-15 h-full object-cover"
          />
        </div>

        {/* Header Section */}
        <div className="flex justify-between pb-5 md:pb-10 items-start md:items-end gap-4 relative z-10">
          <h1 className="text-4xl sm:text-[3rem] md:text-6xl text-[#014D57] font-archivo font-normal leading-tight">
            About us
          </h1>

          <Link href="/about">
            <button className="text-gray-700 lg:text-[13px] md:text-[12px] text-[11px] relative z-10 cursor-pointer border border-gray-700 px-5 py-2 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300 font-karla">
              READ MORE
            </button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10 justify-between relative z-10">
          {/* Image Section */}
          <div className="w-full lg:w-[60%] relative">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src="/about-us-image-2.webp"
                alt="about us"
                fill
                className="w-full h-full rounded-[30px] object-cover"
              />
            </div>

            {/* Feature Cards Overlay */}
            <div className="bg-white flex items-center px-3 sm:px-4 justify-between gap-2 pb-3 flex-nowrap w-full sm:w-72 lg:w-80 h-auto sm:h-20 lg:h-24 absolute -bottom-8 sm:-bottom-10 right-0 sm:right-4 lg:right-8 rounded-[15px] shadow-xl border border-gray-100">
              {[
                {
                  img: "/icon-smile.webp",
                  text: "Satisfied<br />Clients",
                  color: "orange-500",
                  bgColor: "bg-orange-100"
                },
                {
                  img: "/icon-setting.png",
                  text: "Industry&apos;s<br />Best Skillset",
                  color: "ranav-dark-teal",
                  bgColor: "bg-teal-100"
                },
                {
                  img: "/icon-timeline.webp",
                  text: "Timeless<br />Experience",
                  color: "orange-500",
                  bgColor: "bg-orange-100"
                },
                {
                  img: "/icon-code.png",
                  text: "Solutions<br />that Deliver",
                  color: "ranav-dark-teal",
                  bgColor: "bg-teal-100"
                },
              ].map((item, idx) => (
                <div key={idx} className="group flex flex-col gap-1 items-center text-center cursor-pointer w-1/4 sm:w-auto px-1">
                  <div className="relative w-8 h-8 flex items-center justify-center rounded-full">
                    <div className={`absolute inset-0 bg-${item.color} opacity-20 blur-md rounded-full scale-0 transition-all duration-300 group-hover:scale-110`} />
                    <div className={`relative w-full h-full flex items-center justify-center rounded-full  transition-all duration-300 group-hover:scale-110`}>
                      <Image
                        src={item.img}
                        alt="icon"
                        width={16}
                        height={16}
                        className="transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <p className="text-[8px] sm:text-[9px] leading-[10px] text-gray-700 mt-1 font-karla font-medium transition-all duration-300 group-hover:text-gray-900">
                    <span dangerouslySetInnerHTML={{ __html: item.text }} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-[40%] lg:mt-0 md:mt-0 mt-6 flex flex-col justify-center">
            <div className="space-y-6">
              <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] md:leading-[1.7] font-normal font-karla text-gray-800">
                At Ranav Technologies, we specialize in crafting innovative, custom tech solutions that empower businesses
                to thrive in a digital-first world. With a focus on efficiency and growth, we deliver cutting-edge
                technology designed to meet the unique challenges of modern enterprises.
              </p>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] md:leading-[1.7] font-normal font-karla text-gray-800">
                Our team combines technical expertise with a deep understanding of business needs, ensuring that every
                solution we create is reliable, scalable, and impactful. From startups to established corporations, we
                partner with our clients to drive success through technology.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="teck-slider mb-10 sm:mb-28 px-4 sm:px-6 md:px-8 lg:px-10">
        <Slider {...settingss}>
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center h-[80px] sm:h-[90px] md:h-[100px] px-1 sm:px-1 md:px-2">
              <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] flex items-center justify-center">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={90}
                  height={90}
                  className="w-full h-full object-contain"
                  unoptimized={logo.src.endsWith(".svg") || logo.src.endsWith(".gif")}
                />
              </div>
            </div>
          ))}
        </Slider>
      </section>


      <section className="  mb-10 sm:mb-28 mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col justify-center gap-3 items-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 overflow-auto">
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[86px] leading-[1.2] md:leading-[1.2] lg:leading-[104px] font-normal text-[#212121] font-archivo text-center px-2">
            Our Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-karla py-2 md:py-5 font-normal text-center max-w-4xl px-4">
            We deliver results. Our services are designed to simplify your
            business, improve efficiency, and keep you ahead
          </p>
        </div>

        <div className="mt-4 sm:mt-6 flex flex-col lg:flex-row justify-between gap-4 sm:gap-6 lg:gap-8">
          {/* Left Box - We Deliver Results */}
          <div className="w-full md:w-[35%] h-auto min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:h-[502px] flex flex-col justify-center bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 border border-[#00000033] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]">
            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-[2rem] text-black font-archivo mb-3 sm:mb-4 md:mb-5 font-semibold">We Deliver Results</h4>
            <p className="text-sm sm:text-sm md:text-base lg:text-xl leading-5 sm:leading-6 md:leading-7 lg:leading-8 text-black font-light font-karla mb-4 sm:mb-6 md:mb-8">
              At Ranav Technologies, we don&apos;t just offer services—{" "}
              <span className="text-[#016E7C] font-semibold">we deliver outcomes</span>. Whether it&apos;s boosting
              efficiency, enhancing security, or improving customer experiences, our solutions are designed to create{" "}
              <span className="text-[#016E7C] font-semibold">measurable impact</span>. We help you achieve more with
              technology that works as hard as you do.
            </p>
            <Link href="/services#our-process">
              <button className="text-gray-700 border border-gray-700 px-3 sm:px-4 md:px-5 py-2 md:py-3 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base font-karla">
                OUR PROCESS
              </button>
            </Link>
          </div>

          {/* Right Box with Swiper */}
          <div className="w-full md:w-[65%] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[502px] relative rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] overflow-hidden">
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
                    className="relative px-4 sm:px-6 md:px-8 lg:px-14 py-6 sm:py-8 md:py-10 lg:py-20 text-white flex flex-col h-full gap-3 sm:gap-4 md:gap-6"
                    style={{
                      background: `${service.bggredient}, url('${service.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "20px",
                    }}
                  >
                    <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold z-10 font-archivo ${service.textDark ? "text-black" : "text-white"}`}>
                      {service.title}
                    </h2>
                    <p className={`text-sm sm:text-sm md:text-base lg:text-xl z-10 font-light font-karla ${service.textDark ? "text-black" : "text-white"} leading-5 sm:leading-6 md:leading-7 lg:leading-8`}>
                      {service.description}
                    </p>
                    <Link href="/services#our-process">
                      <button className={`w-fit z-10 border ${service.textDark ? "text-black border-black hover:bg-black hover:text-white" : "text-white border-white hover:bg-white hover:text-[#014D57]"} rounded-full font-karla text-xs sm:text-sm md:text-base lg:text-xl px-3 sm:px-4 md:px-6 lg:px-8 py-2 md:py-3 transition-colors duration-300`}>
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

      <section className=" w-[94%] mb-10 sm:mb-28 mx-auto">
        <ProjectCard
          title="Sync Time"
          description="SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings."
          imageUrl="/Rectangle 73.png"
          viewMoreLink="/portfolio/sync-time"
        />

        <ProjectCard
          title="Ultrasound MD"
          description="We partnered with Ultrasound MD to design & develop a cutting-edge website that streamlines their patient experience. By simplifying scheduling and providing clear information, we helped them enhance their online presence and reach a wider audience of patients in need."
          imageUrl="/Group 100.png"
          viewMoreLink="/portfolio/sync-time"
          isReversed
        />
      </section>


      <section> <TestimonialsSection /></section>

      <section className="">
        <h2 className="font-archivo  font-normal text-[36px] sm:text-[48px] md:text-[72px] lg:text-[96px] leading-tight text-[#01263B] text-center md:mb-10">
          Our Blogs
        </h2>
        <BlogsSection />
      </section>

    
    {/* Contact Section  */}
    <ContactSection
      titleLines={['LOOKING', 'FOR A TECH', 'PARTNER?']}
      description="Get in touch with us today. Our team is ready to discuss how we can support your business with tailored solutions that meet your goals."
      formik={formik}
    />

    </main>

  </>
  );
}

export default Page;
