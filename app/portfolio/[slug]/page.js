"use client"

import React from 'react';


import Link from 'next/link'
const projects = [
  {
    slug: 'sync-time',
    name: 'Sync Time',
    image: '/Rectangle 73.png',
    details: 'SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.',
    section1para1: " SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings. SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations",
    para1Img:"/Sync Time.png",
    para2:" SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings. SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations",
    sec2para2:"SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings. SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations",
    sec2Img1:"/Sync Time1.png",
    sec2Img2:"/Sync Time2.png",
    sec3Img:"/Rectangle 731.png"
    
},
  {
    slug: 'ultrasound-md',
    name: 'Ultrasound MD',
    image: '/Group 100.png',
    details: 'We partnered with Ultrasound MD to design & develop a cutting-edge website that streamlines their patient experience. By simplifying scheduling and providing clear information, we helped them enhance their online presence and reach a wider audience of patients in need.',
    section1para1: "We partnered with Ultrasound MD to design & develop a cutting-edge website that streamlines their patient experience. By simplifying scheduling and providing clear information, we helped them enhance their online presence and reach a wider audience of patients in need.",
     para1Img:"/Sync Time.png"
    ,para2:"We partnered with Ultrasound MD to design & develop a cutting-edge website that streamlines their patient experience. By simplifying scheduling and providing clear information, we helped them enhance their online presence and reach a wider audience of patients in need.",

   sec2para2: "Ultrasound MD is a medical software platform designed to streamline ultrasound reporting and patient management. It provides tools for scheduling, secure data handling, image integration, and generating structured diagnostic reports. The system helps clinics improve workflow efficiency and accuracy in patient care.",

                                            

     sec2Img1:"/Sync Time1.png",
    sec2Img2:"/Sync Time2.png",
      sec3Img:"/Rectangle 731.png"
},
];

export default function ProjectDetail({ params }) {
    const { slug } = React.use(params); // ✅ unwraps the params
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-8 text-red-600">Project not found</div>;
  }

  return (
     <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
  


  <section className="bg-white px-10 py-16 max-w-[1600px] mx-auto">
  {/* Hero Image with Overlay Text */}
  <div className="absolute top-[183px]  left-[210px] z-20">
  <button
    onClick={() => window.history.back()}
    className="flex items-center gap-2 bg-[#F9F9F9] px-[20px] py-[16px] rounded-[100px] shadow-sm"
  >
    {/* Circle arrow (left-pointing) */}
 <div className="w-[28px] h-[28px] bg-[#014D57] rounded-full flex items-center justify-center">
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="28"
      y="28"
      width="28"
      height="28"
      rx="14"
      transform="rotate(-180 28 28)"
      fill="#014D57"
    />
    <path
      d="M10.5253 14.8846L15.2983 19.6302L14.0399 20.8813L7.11867 13.9999L14.0399 7.11864L15.2983 8.36978L10.5253 13.1152L21.356 13.1152L21.356 14.8846L10.5253 14.8846Z"
      fill="#F9F9F9"
    />
  </svg>
</div>


    {/* Text */}
    <span className="text-[#014D57] text-[24px] leading-[26px] font-archivo font-normal">
      Back
    </span>
  </button>
</div>

  <div
    className="relative h-[60vh] md:h-[70vh] w-full rounded-4xl bg-cover bg-center flex items-center justify-center text-center text-white"
    style={{
      backgroundImage: `url('/Preview.png')`, // Replace with your image path
      backgroundBlendMode: 'overlay',
      backgroundColor: '#00000080',
    }}
  >
    <div className="w-full max-w-[1586px] px-4 mx-auto text-center">
  <h2 className="font-archivo font-semibold text-[32px] md:text-[50px] lg:text-[70.18px] leading-[88px] tracking-[-0.02em] text-white">
   {project.name}
  </h2>
  <p className="font-inter font-normal text-[18px] md:text-[24px] lg:text-[29.24px] leading-[44px] text-white max-w-[1126px] mx-auto mt-4">
      {project.details}
  </p>
</div>
  </div>

  {/* Text Description */}

</section>






   
  <section className="bg-white px-10 py-16 max-w-[1600px] mx-auto">
  {/* Section Title */}
 <div className="mb-15">
  <h2 className="font-archivo font-normal text-[96px] leading-[104px] text-[#212121]">
    Projects
  </h2>
  <p className="font-karla font-light text-[32px] leading-[50px] text-[#212121]">
    {project.section1para1}
  </p>
</div>


  {/* Project Preview */}
<div
  className="overflow-hidden p-6 mb-6 rounded-[56px]"
  style={{
    background: 'linear-gradient(179.78deg, #5E9399 -33.64%, #FFFFFF 63.57%)',
  }}
>
  {/* Full-width Image */}
  <div className="w-full h-[600px] rounded-xl overflow-hidden mb-4">
 <Image
      src={project.para1Img}
      alt="project image"
      className="w-full h-full object-cover"
    />
  </div>
</div>


    <p className="font-karla font-light text-[32px] leading-[50px] text-[#212121]">
    
      {project.para2}
    </p>
</section>


  <section className="bg-white px-10 py-16 max-w-[1600px] mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    {/* Card 1 */}
  <div
  className="w-full max-w-[765px] h-[658px] rounded-[40px] overflow-hidden p-6"
  style={{
    background: 'linear-gradient(359.78deg, #5E9399 36.43%, #FFFFFF 133.64%)',
  }}
>
  <div className="w-full h-[100%] rounded-xl overflow-hidden flex items-center justify-center">
    <Image
      src={project.sec2Img1} // or project.sec2Img2
      alt="Project 1"
      className="w-full h-full object-contain"
    />
  </div>

</div>


    {/* Card 2 */}
  
<div
  className="w-full max-w-[765px] h-[658px] rounded-[40px] overflow-hidden p-6"
  style={{
    background: 'linear-gradient(359.78deg, #5E9399 36.43%, #FFFFFF 133.64%)',
  }}
>
  <div className="w-full h-[100%] rounded-xl overflow-hidden flex items-center justify-center">
 <Image
    src={project.sec2Img2} alt="Project 2"
      className="w-full h-full object-contain"
    />
  </div>
</div>

</div>


  {/* Description */}

    <p className="font-karla font-light text-[32px] leading-[50px] text-[#212121] mt-15">
    
   {project.sec2para2}
  </p>
</section>


  <section className="bg-white px-10 py-16 max-w-[1600px] mx-auto">
  {/* Section Title */}
   <h2 className="font-archivo font-normal text-[96px] leading-[104px] text-[#212121]">Explore more projects</h2>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Project Card 1 */}
    <div className="bg-white rounded-2xl shadow-md overflow-hidden p-4">
      <div className="w-full h-[200px] bg-gray-300 flex items-center justify-center rounded-xl mb-4">

        <Image src={project.sec3Img} alt="Project 1" className="w-full h-auto rounded-xl object-contain" /> 
      </div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Project name</h3>
        <button className="text-sm px-3 py-1 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition">
          VIEW
        </button>
      </div>
      <p className="text-sm text-white">
        SyncTime is a scheduling software for service-based businesses. It offers online booking, pa...
      </p>
    </div>

    {/* Project Card 2 */}
    <div className="bg-white rounded-2xl shadow-md overflow-hidden p-4">
      <div className="w-full h-[200px] bg-gray-300 flex items-center justify-center rounded-xl mb-4">
      
        <Image src={project.sec3Img} alt="Project 1" className="w-full h-auto rounded-xl object-contain" /> 
      </div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Project name</h3>
        <button className="text-sm px-3 py-1 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition">
          VIEW
        </button>
      </div>
      <p className="text-sm text-white">
        SyncTime is a scheduling software for service-based businesses. It offers online booking, pa...
      </p>
    </div>
  </div>
</section>


    </main>
  );
}
