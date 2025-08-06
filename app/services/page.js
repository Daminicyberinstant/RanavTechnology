'use client'
// app/services/page.tsx
import Image from 'next/image';
const processData = [
  {
    title: "Research",
    description:
      "We conduct in-depth research to understand your business challenges. Our modern approach combines data-driven insights with strategic thinking to identify opportunities for digital transformation.",
    imageUrl: "/vector.png",
    textColor: "",
  },
  {
    title: "Design",
    description:
      "We believe that exceptional user experiences are the cornerstone of successful software. Our design process blends aesthetics with usability, creating intuitive & visually appealing interfaces. With a mature understanding of user behavior, we craft digital solutions that resonate with your target audience.",
    imageUrl: "/vector1.png",
  },
  {
    title: "Development",
    description:
      "Our agile development methodology ensures rapid delivery of high-quality software. Our expert team leverages the latest technologies to build robust and scalable solutions. With a focus on efficiency and innovation, we deliver products that exceed expectations.",
    imageUrl: "/vector2.png",
  },
  {
    title: "Software Testing",
    description:
      "We are committed to delivering flawless software. Our rigorous testing processes guarantee optimal performance, security, and user satisfaction. Our expertise in quality assurance ensures that every aspect of your product meets the highest standards.",
    imageUrl: "/vector3.png",
  },
  {
    title: "Deployment",
    description:
      "Our seamless deployment process ensures a smooth transition to live environments. With meticulous planning and execution, we minimize disruptions and maximize user adoption. Our ongoing support and maintenance services provide peace of mind and ensure long-term success.",
    imageUrl: "/vector4.png",
  },
];

const services = [
  {
    title: "Data Engineering",
    description:
      "Our data engineering services help you extract valuable insights, optimize operations, and make data-driven decisions.",
    image: "/MagicPattern.design.png",
  },
  {
    title: "Software Development",
    description:
      "We build custom software solutions that drive business growth. Our development team creates efficient, scalable applications tailored to your specific needs.",
    image: "/MagicPattern.design2.png",
  },
  {
    title: "Mobile App & Website Development",
    description:
      "We develop mobile apps and websites tailored to your needs, ensuring efficiency, scalability, and a superior user experience.",
    image: "/MagicPattern.design3.png",
  },
  {
    title: "API Development",
    description:
      "Integrate seamlessly and unlock new opportunities. Our API development services enable data sharing, system interoperability, and efficient business processes.",
    image: "/MagicPattern.design4.png",
  },
  {
    title: "UI/UX Design",
    description:
      "We create exceptional user experiences that boost customer satisfaction and loyalty. Our design expertise enhances brand perception and drives conversions.",
    image: "/Rectangle 195.png",
  },
  {
    title: "Software Testing",
    description:
      "We mitigate risks and ensure product quality. Our comprehensive testing services help you deliver reliable software that meets user expectations.",
    image: "/MagicPattern.design6.png",
  },

];
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import dataEngineering from '../../public/MagicPattern.design.png';
import servicesSlide2 from '../../public/MagicPattern.design2.png';
import servicesSlide5 from '../../public/MagicPattern.design3.png';
import servicesSlide4 from '../../public/MagicPattern.design4.png';
import uiUxDesign from '../../public/Rectangle 195.png';
import servicesSlide6 from '../../public/MagicPattern.design6.png'
import CTOSection from '@/components/CTO';
const ExploreServices = [
  {
    title: "Data Engineering",
    description:
      "Our data engineering services help you extract valuable insights, optimize operations, and make data driven decisions.",
    imageUrl: dataEngineering,
  },
  {
    title: "Software Development",
    description:
      "We Build custom software solutions that drive business growth. Our development team creates efficient, scalable applications tailored to your specific needs.",
    imageUrl: servicesSlide2,
  },
  {
    title: "Mobile App & Website Development",
    description:
      "We Build custom software solutions that drive business growth. Our development team creates efficient, scalable applications tailored to your specific needs.",
    imageUrl: servicesSlide5,
  },
  {
    title: "API Development",
    description:
      "Integrate seamlessly and unlock new opportunities. Our API development services enable data sharing, system interoperability, and efficient business processes.",
    imageUrl: servicesSlide4,
  },
  {
    title: "UIUX Design",
    description:
      "We Create exceptional user experiences that boost customer satisfaction and loyalty. Our design expertise enhances brand perception and drives conversions.",
    imageUrl: uiUxDesign,
  },
  {
    title: "Software Testing",
    description:
      "We are focused on Mitigating risks and ensuring product quality. Our comprehensive testing services help you deliver reliable software that meets user expectations.",
    imageUrl: servicesSlide6,
  },
];


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


export default function ServicesPage() {

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

  return (
    <>
      <section className="bg-white lg:px-10 px-4 py-8 lg:py-16 max-w-[1600px] mx-auto">
        {/* Hero Image with Overlay Text */}
        <div
          className="relative h-[60vh] md:h-[70vh] w-full rounded-4xl bg-cover bg-center flex items-center justify-center text-center text-white"
          style={{
            backgroundImage: `url('/Group 163-3.png')`, // Replace with your image path
            backgroundBlendMode: 'overlay',
            backgroundColor: '#00000080',
          }}
        >
          <div className="w-full max-w-[1586px] px-4 mx-auto text-center">
            <h2 className="font-archivo font-semibold text-[32px] md:text-[50px] lg:text-[70.18px] leading-[45px] tracking-[-0.02em] text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="font-inter font-normal text-[16px] md:text-[20px] lg:text-[20px] mt-10 leading-[40px] text-white max-w-[1126px] mx-auto ">
              Explore our services designed to drive your success with reliable, innovative tech solutions tailored to your needs.
            </p>
          </div>
        </div>

        {/* Text Description */}

      </section>



      <section className="relative mt-[15px] mb-10 px-4">
        <div className="w-full max-w-[1403px] mx-auto text-black font-karla text-[18px] md:text-[17px] leading-[30px] md:leading-[35px] text-justify">
          <p className="mb-6">
            We’re committed to providing tailored solutions designed to empower businesses in today’s competitive digital landscape. Our expertise spans a diverse range of services that allow us to support every stage of your digital journey, from data engineering to custom software solutions. We focus on delivering innovative, scalable, and user-focused services that transform ideas into reality and ensure seamless operation and growth for your business.
          </p>
          <p>
            We combine technical expertise with industry knowledge to deliver services that help our clients stay ahead. Let us work with you to build the future of your business with technology that drives real results.
          </p>
        </div>
      </section>


      <section className="bg-white text-black px-4 md:px-10 py-16 max-w-[1600px] mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl md:text-6xl font-archivo text-center font-normal text-black-dark">
            Explore Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {ExploreServices.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[495px] h-auto md:h-[555.72px] bg-[#F9F9F9] border border-[rgba(0,0,0,0.1)] rounded-[40px] px-5 py-8 box-border mx-auto"
            >
              <div className="h-[250px] md:h-[355px] rounded-30 mb-5 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt="about us background"
                  className="w-full h-full object-cover rounded-30"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-archivo text-black-dark font-bold mt-2 mb-3">
                {item.title}
              </h2>
              <p className="text-black-dark font-karla font-light text-sm md:text-base leading-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="our-process">
        <div className="lg:mx-16 mt-24">
          <div className="mx-auto  w-full text-center mb-20">
            <h2 className="font-archivo  font-normal text-[36px] sm:text-[48px] md:text-[72px] lg:text-[96px] leading-tight text-[#01263B] text-center mb-10 md:mb-10">
              Our Process
            </h2>
            <p className="w-full lg:max-w-[70%] text-center mx-auto text-black font-karla text-[18px] md:text-[17px] leading-[30px] md:leading-[35px] ">
              Our streamlined process starts with understanding your goals, followed by precise design and agile development.
              After rigorous testing, we deploy smoothly, then provide ongoing support to keep your solution efficient and impactful.
            </p>
          </div>

        </div>
        <div>
          {processData.map((item, index) => {
            return (
              <div
                className={`flex ${index % 2 == 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
                  } my-20`}
                key={item.title}
              >
                <div className="w-full md:w-1/3"></div>
                <div
                  className={`w-full md:w-2/3 bg-[#EFEFEF] ${index % 2 == 0
                    ? "rounded-tl-0 md:rounded-tl-full rounded-bl-0 md:rounded-bl-full"
                    : "rounded-tr-0 md:rounded-tr-full rounded-br-0 md:rounded-br-full"
                    } px-10 py-9`}
                >
                  <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div>
                      <div
                        className={`w-36 h-36 flex items-center justify-center relative border-[2.1px] border-dashed border-black rounded-full`}
                      >
                        <div
                          className={`w-28 h-28 flex items-center justify-center border-[20px] ${index % 2 == 0
                            ? "border-[#026F7C]"
                            : "border-orange-500"
                            } rounded-full`}
                        >
                          <Image
                            src={item.imageUrl}
                            alt="about us background"
                            className="object-cover rounded-[30px]"
                            width={112} // 28 × 4 = 112px (match w-28)
                            height={112}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4
                        className={`text-4xl ${index % 2 == 0
                          ? "text-[#026F7C]"
                          : "text-orange-500"
                          }  font-archivo font-bold mb-6`}
                      >
                        {item.title}
                      </h4>
                      <p className=" font-karla text-[18px] md:text-[17px] leading-[30px] md:leading-[35px] text-[#222222]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      <CTOSection
        titleLines={['GET YOUR', 'CUSTOM', 'QUOTE']}
        description="Tell us what you’re looking for, and we’ll 
              craft a tailored solution just for you.
              Our team is ready to dive into your project needs,
              budget, and timeline to bring your vision to life.
              Fill out the form, and let’s make it happen together!"
        formik={formik}
      />



    </>
  );
}
