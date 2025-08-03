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

import dataEngineering from '../../public/MagicPattern.design.png';
import servicesSlide2 from '../../public/MagicPattern.design2.png';
import servicesSlide5 from '../../public/MagicPattern.design3.png';
import servicesSlide4 from '../../public/MagicPattern.design4.png';
import uiUxDesign from '../../public/Rectangle 195.png';
import servicesSlide6 from '../../public/MagicPattern.design6.png'
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


export default function ServicesPage() {
  return (
<>
    <section className="bg-white px-10 py-16 max-w-[1600px] mx-auto">
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
  <h2 className="font-archivo font-semibold text-[32px] md:text-[50px] lg:text-[70.18px] leading-[88px] tracking-[-0.02em] text-white">
    Ready to Transform Your Business?
  </h2>
  <p className="font-inter font-normal text-[18px] md:text-[24px] lg:text-[29.24px] leading-[44px] text-white max-w-[1126px] mx-auto mt-4">
    Explore our services designed to drive your success with reliable, innovative tech solutions tailored to your needs.
  </p>
</div>
  </div>

  {/* Text Description */}

</section>



  <section className="relative mt-[15px] mb-10 px-4">
  <div className="w-full max-w-[1403px] mx-auto text-black font-karla text-[18px] md:text-[24px] leading-[30px] md:leading-[50px] text-justify">
    <p className="mb-6">
      We’re committed to providing tailored solutions designed to empower businesses in today’s competitive digital landscape. Our expertise spans a diverse range of services that allow us to support every stage of your digital journey, from data engineering to custom software solutions. We focus on delivering innovative, scalable, and user-focused services that transform ideas into reality and ensure seamless operation and growth for your business.
    </p>
    <p>
      We combine technical expertise with industry knowledge to deliver services that help our clients stay ahead. Let us work with you to build the future of your business with technology that drives real results.
    </p>
  </div>
</section>


 <section className="bg-white px-4 md:px-10 py-16 max-w-[1600px] mx-auto">
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
      <div className="mx-16 mt-24">
     <div className="mx-auto max-w-[1298px] text-center mb-20">
  <h2 className="font-archivo font-normal text-[96px] leading-[104px] text-[#212121] mb-6">
    Our Process
  </h2>
  <p className="font-karla font-normal text-[24px] leading-[43px] text-[#212121]">
    Our streamlined process starts with understanding your goals, followed by precise design and agile development. 
    After rigorous testing, we deploy smoothly, then provide ongoing support to keep your solution efficient and impactful.
  </p>
</div>

      </div>
      <div>
        {processData.map((item, index) => {
          return (
            <div
              className={`flex ${
                index % 2 == 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
              } my-20`}
              key={item.title}
            >
              <div className="w-full md:w-1/3"></div>
              <div
                className={`w-full md:w-2/3 bg-[#EFEFEF] ${
                  index % 2 == 0
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
                        className={`w-28 h-28 flex items-center justify-center border-[20px] ${
                          index % 2 == 0
                            ? "border-[#026F7C]"
                            : "border-orange-500"
                        } rounded-full`}
                      >
                        <Image
                          src={item.imageUrl}
                          alt="about us background"
                          className="object-cover rounded-[30px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4
                      className={`text-4xl ${
                        index % 2 == 0
                          ? "text-[#026F7C]"
                          : "text-orange-500"
                      }  font-archivo font-bold mb-6`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-xl font-karla font-light text-[#222222]">
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
{/* 
Pending not yet implement Pending */}
<section
  className="relative overflow-hidden w-full md:w-[1749px] h-auto md:h-[664px]"
  style={{
    backgroundColor: '#014D57',
    borderRadius: '80px 0px 0px 80px',
    transform: 'rotate(-180deg)',
  }}
>
  <div
    className="flex flex-col md:flex-row items-start px-6 md:px-12 py-12 gap-10 w-full h-full"
    style={{ transform: 'rotate(180deg)' }}
  >
    {/* Left Text Content */}
    <div className="flex-1 text-left ml-[70px]">
      <h2
        className="uppercase text-white font-light text-[36px] leading-[42px] md:text-[85px] md:leading-[91px]"
        style={{ fontFamily: 'Karla, sans-serif' }}
      >
        GET YOUR<br />CUSTOM <br />QUOTE
      </h2>

      <p
        className="mt-6 md:mt-8 text-white font-light text-[16px] leading-[28px] md:text-[23px] md:leading-[45px] text-justify"
        style={{ fontFamily: 'Karla, sans-serif' }}
      >
        Tell us what you’re looking for, and we’ll <br className="hidden md:block" />
        craft a tailored solution just for you.<br className="hidden md:block" />
        Our team is ready to dive into your project needs,<br className="hidden md:block" />
        budget, and timeline to bring your vision to life.<br className="hidden md:block" />
        Fill out the form, and let’s make it happen together!
      </p>
    </div>

    {/* Right Form Box */}
    <div
      className="bg-[#F8F8F8] rounded-[20px] p-4 md:p-6 text-black shadow w-full md:w-[711px] md:h-[513px] mr-[40px]"
    >
      <form className="space-y-4 text-sm text-[#333]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <p className="mb-1 font-medium">First Name</p>
            <input
              type="text"
              placeholder="*First name"
              className="w-full border border-[#999] px-4 py-2 rounded-full text-sm"
            />
          </div>
          <div className="flex-1">
            <p className="mb-1 font-medium">Last Name</p>
            <input
              type="text"
              placeholder="*Last name"
              className="w-full border border-[#999] px-4 py-2 rounded-full text-sm"
            />
          </div>
        </div>

        <div>
          <p className="mb-1 font-medium">Email Address</p>
          <input
            type="email"
            placeholder="*Email Address"
            className="w-full border border-[#999] px-4 py-2 rounded-full text-sm"
          />
        </div>

        <div>
          <p className="mb-1 font-medium">Message</p>
          <textarea
            placeholder="Your message here"
            className="w-full border border-[#999] px-4 py-2 rounded-xl text-sm min-h-[100px]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#F7941D] hover:bg-[#e58310] text-white font-semibold py-3 rounded-full text-sm tracking-wide"
        >
          REQUEST A QUOTE
        </button>
      </form>
    </div>
  </div>
</section>




    
    </>
  );
}
