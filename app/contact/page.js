"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import arrowRounded from "../../public/arrow-rounded-yellow.png";
import arrowRoundedDown from "../../public/arrow-rounded-yellow-down.png";
import Image from "next/image";
import ContactForm from "../contactUs/ContactForm";
import Link from "next/link";
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

const ContactFormm = ({ requestQuote }) => {
  const [status, setStatus] = useState("");

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
  


const faqs = [
  {
    question: "What services does your company offer?",
    answer:
      "At Ranav Technologies, we specialize in IT services, including custom software development, web and mobile application development, UI/UX design, digital transformation consulting, and IT support. Our team works closely with clients to deliver high-quality, scalable, and innovative solutions tailored to their business needs.",
  },
  {
    question: "How do you ensure the quality and reliability of your projects?",
    answer:
      "Quality is our top priority. We follow industry best practices, conduct rigorous testing, and implement agile development methodologies to ensure the reliability and performance of our projects. Our QA team performs multiple testing phases, including functional, usability, and security testing, to deliver error-free and high-performing applications.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "The timeline for each project depends on its complexity, features, and specific requirements. A simple website may take a few weeks, while a custom enterprise application can take several months. We provide a detailed project roadmap and regular updates to ensure transparency and on-time delivery.",
  },
  {
    question: "Can you develop responsive and mobile-first websites?",
    answer:
      "Yes, we build fully responsive and mobile-first websites to ensure seamless user experience across all devices. Our team uses modern frameworks like Bootstrap, Tailwind CSS, and media queries to ensure that websites look and perform optimally on smartphones, tablets, and desktops.",
  },
  {
    question: "How involved will I be during the development process?",
    answer:
      "We encourage client involvement throughout the development process. From the initial consultation and requirement gathering to UI/UX design, development, and testing, we keep you informed and seek your feedback to ensure the final product aligns with your vision and business goals.",
  },
  {
    question:
      "What front-end frameworks do you use, and how do you choose one for a project?",
    answer:
      "We use a variety of front-end frameworks, including React.js, Angular, and Vue.js, based on the project’s requirements, scalability needs, and performance considerations. Our team evaluates factors such as application complexity, interactivity, and future scalability before selecting the most suitable framework.",
  },
  {
    question: "How is pricing determined for a project?",
    answer:
      "Pricing depends on various factors such as project complexity, features, development time, and required technologies. We offer flexible pricing models, including fixed-price, hourly, and milestone-based payments, to cater to different business needs.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept multiple payment methods, including bank transfers, credit/debit cards, PayPal, and other digital payment options. We ensure secure transactions and provide detailed invoices for transparency.",
  },
  {
    question: "How do you handle security in your projects?",
    answer:
      "Security is a fundamental part of our development process. We follow best security practices, including data encryption, secure authentication methods, firewall protection, and regular security audits. Our team ensures that all applications comply with industry security standards to protect user data and prevent cyber threats.",
  },
];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  
  return (
    <main>
  


  <section className="bg-white px-10 py-16 max-w-[1600px] mx-auto">
  {/* Hero Image with Overlay Text */}
  <div
    className="relative h-[60vh] md:h-[70vh] w-full rounded-4xl bg-cover bg-center flex items-center justify-center text-center text-white"
    style={{
      backgroundImage: `url('/Group 163-2.png')`, // Replace with your image path
      backgroundBlendMode: 'overlay',
      backgroundColor: '#00000080',
    }}
  >
    <div className="w-full max-w-[1586px] px-4 mx-auto text-center">
  <h2 className="font-archivo font-semibold text-[32px] md:text-[50px] lg:text-[70.18px] leading-[88px] tracking-[-0.02em] text-white">
  Let&apos;s Connect
  </h2>
  <p className="font-inter font-normal text-[18px] md:text-[24px] lg:text-[29.24px] leading-[44px] text-white max-w-[1126px] mx-auto mt-4">
     Ready to discuss your project or need more information?
  </p>
</div>
  </div>

  {/* Text Description */}

</section>



      {/* Section 2: Contact Form */}
      <section className="bg-white px-10 py-16 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col md:items-start justify-between py-10">
          <div className="text-center md:text-left relative">
            <h3 className="text-4xl md:text-6xl text-left font-archivo font-bold text-[#0D0D0D]">
              We’d Love to <br className="block md:hidden"/>Hear from You
            </h3>
            <div className="w-48 h-40 md:w-64 md:h-52 mx-auto hidden md:block">
              <Image src={arrowRounded} alt="arrow right" className="mx-auto" />
            </div>
            <div className="block md:hidden absolute top-14 right-8">
              <Image
                src={arrowRoundedDown}
                alt="arrow right"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="mt-6 md:mt-0 hidden md:block">
            <Link
              href="mailto:support@ranavtechnologies.com"
              className="text-sm md:text-xl font-bold font-karla block text-center md:text-left"
            >
              support@ranavtechnologies.com
            </Link>
          </div>
        </div>



         <div className="col-span-1 md:col-span-2 bg-white rounded-[40px] px-6 py-8 md:px-8 md:py-12"
         style={{
    backgroundColor: '#F9F9F9',
    borderRadius: '40px'
  }}>
          <ContactForm requestQuote={true} />
        </div>

        <div className="mt-6 md:mt-0 block md:hidden">
          <Link
            href="mailto:support@ranavtechnologies.com"
            className="text-lg md:text-xl font-bold font-karla block text-center md:text-left"
          >
            support@ranavtechnologies.com
          </Link>
        </div>
      </div>
    </section>






      {/* Section 3: FAQ */}

  <section className="bg-white px-10 py-16 max-w-[1600px] mx-auto">
      <div className="grid"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
       <h3 className="text-3xl md:text-6xl font-archivo font-bold text-[#026C7A] leading-[77px] w-[481px] -mt-7">
  &nbsp;<br />
  Frequently Asked <br/>Questions
</h3>
<div className="col-span-1 md:col-span-2 rounded-[40px] px-4 md:px-8 pt-4 md:pt-12">

          {faqs.map((faq, index) => (
         <div
  key={index}
  className="w-full max-w-[986px] flex flex-col justify-center bg-[#FBFBFB] rounded-[14px] border border-[#dcdcdc] backdrop-blur-[5px] overflow-hidden mb-[15px] transition-all duration-300"
>
  <button
    className="w-full flex justify-between items-center px-4 py-4 text-left font-medium text-sm md:text-lg text-black"
    onClick={() => toggleAccordion(index)}
  >
    {faq.question}
  </button>

  {openIndex === index && (
    <div className="p-4 bg-white border-t border-gray-200 text-gray-700">
      {faq.answer}
    </div>
  )}
</div>


          ))}
        </div>
      </div>
    </section>
    </main>
  );
};

export default ContactFormm ;
