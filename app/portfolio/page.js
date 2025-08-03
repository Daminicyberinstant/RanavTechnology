"use client"
import React, { useState } from 'react'
import Link from 'next/link'

import Image from 'next/image'
import arrowRight from "../../public/arrow-right.png";

import arrowRightHover from "../../public/arrow-right-white.png";
export default function Portfolio() {
 const [hoveredSection, setHoveredSection] = useState(null);


  const [activeTab, setActiveTab] = useState('projects');
  return (
    <main className='font-sans text-white mx-auto min-h-screen'>

 <section className="bg-white px-10 py-16 max-w-[1600px] mx-auto">
  {/* Hero Image with Overlay Text */}
  <div
    className="relative h-[60vh] md:h-[70vh] w-full rounded-4xl bg-cover bg-center flex items-center justify-center text-center text-white"
    style={{
      backgroundImage: `url('/Group 163.png')`, // Replace with your image path
      backgroundBlendMode: 'overlay',
      backgroundColor: '#00000080',
    }}
  >
  
     <div className="w-full max-w-[1586px] px-4 mx-auto text-center">
  <h2 className="font-archivo font-semibold text-[32px] md:text-[50px] lg:text-[70.18px] leading-[88px] tracking-[-0.02em] text-white">
    Explore Our Projects
  </h2>
  <p className="font-inter font-normal text-[18px] md:text-[24px] lg:text-[29.24px] leading-[44px] text-white max-w-[1126px] mx-auto mt-4">
    We bring innovative technology to life, helping businesses achieve their goals through custom solutions. From software development to data engineering, our portfolio showcases the expertise and creativity we bring to every project.
  </p>
</div>
  </div>
</section>



  <section className="bg-white px-4 md:px-10 py-16 max-w-[1600px] mx-auto">
        {/* Toggle Tabs */}
        <div className="flex justify-end mb-8">
          <div className="flex gap-2 px-2 py-1 bg-gray-100 rounded-full font-semibold">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-6 py-2 rounded-full text-sm transition-colors duration-200 ${activeTab === "projects" ? "bg-teal-500 text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
            >
              PROJECTS
            </button>
            <button
              onClick={() => setActiveTab("caseStudies")}
              className={`px-6 py-2 rounded-full text-sm transition-colors duration-200 ${activeTab === "caseStudies" ? "bg-teal-500 text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
            >
              CASE STUDIES
            </button>
          </div>
        </div>

        <div className="bg-white px-4 md:px-10 py-16 max-w-[1600px] mx-auto">
          {activeTab === "projects" ? (
            <>
            <h1 className="font-archivo text-[64px] mb-10 md:text-[96px] leading-[70px] md:leading-[104px] font-normal text-[#212121]">
  Projects
</h1>



<div className="flex flex-col md:flex-row gap-6 mb-10">
  {/* Image Section */}
  <div className="w-full md:w-[619px] bg-[#F9F9F9] border border-[rgba(0,0,0,0.2)] rounded-[40px] flex items-center justify-center p-4 h-[300px] md:h-[500px]">
    <Image
      src="/Rectangle 73.png"
      alt="Sync Time Screenshot"
      width={619}
      height={612}
      className="w-full h-full object-contain rounded-[40px]"
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-[939px] bg-[#F9F9F9] border border-[rgba(0,0,0,0.2)] rounded-[40px] p-6 md:p-8 flex flex-col justify-between h-auto md:h-[500px] box-border z-[1]">
    <div>
      <h2 className="text-[36px] md:text-[64px] leading-[44px] md:leading-[70px] font-archivo font-normal text-[#212121] mb-4">
        Sync Time
      </h2>
      <p className="text-[18px] md:text-[32px] leading-[28px] md:leading-[50px] font-karla font-light text-[#212121]">
        SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations,
        and features for managing appointments, pricing, teams, and virtual meetings.
      </p>
    </div>

    <Link href={`/portfolio/sync-time`}>
      <button
        className="mt-6 w-full h-[60px] md:w-[841px] md:h-[77px] bg-[#B6D2D5] rounded-[40px] text-[20px] md:text-[32px] leading-[30px] md:leading-[45px] text-[#016E7C] font-archivo font-normal hover:text-white hover:bg-gray-800 transition duration-300 hover:opacity-90 flex items-center justify-between px-6 md:px-8"
        onMouseEnter={() => setHoveredSection("Sync Time")}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <span>VIEW MORE</span>
        <Image
          src={hoveredSection === "Sync Time" ? arrowRightHover : arrowRight}
          alt="arrow right"
          width={24}
          height={24}
        />
      </button>
    </Link>
  </div>
</div>



 



      <div className="flex flex-col md:flex-row-reverse gap-6 mb-10">
  {/* Image Right */}
  <div className="w-full md:w-[619px] h-[300px] md:h-[500px] bg-gray-100 rounded-[40px] flex items-center justify-center p-4">
    <Image
      src="/Group 100.png"
      alt="Ultrasound MD Screenshot"
      width={619}
      height={612}
      className="w-full h-full object-contain rounded-[40px]"
    />
  </div>

  {/* Text Left */}
  <div className="w-full md:w-[939px] bg-gray-50 p-6 md:p-8 rounded-[40px] border border-gray-200 flex flex-col justify-center">
    <h3 className="text-[32px] md:text-[64px] leading-[38px] md:leading-[70px] font-archivo font-normal text-[#212121] mb-4">
      Ultrasound MD
    </h3>
    <p className="text-[18px] md:text-[32px] leading-[30px] md:leading-[50px] font-karla font-light text-[#212121] mb-6">
      We partnered with Ultrasound MD to design & develop a cutting-edge website that streamlines their
      patient experience. we helped them
      enhance their online presence and reach a wider audience of patients in need.
    </p>
    <Link href={`/portfolio/ultrasound-md`}>
      <button
        className="mt-4 md:mt-6 w-full h-[60px] md:w-[841px] md:h-[77px] bg-[#B6D2D5] rounded-[40px] text-[20px] md:text-[32px] leading-[28px] md:leading-[45px] text-[#016E7C] font-archivo font-normal hover:text-white hover:bg-gray-800 transition duration-300 hover:opacity-90 flex items-center justify-between px-6 md:px-8"
        onMouseEnter={() => setHoveredSection("Sync Time")}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <span>VIEW MORE</span>
        <Image
          src={hoveredSection === "Sync Time" ? arrowRightHover : arrowRight}
          alt="arrow right"
          width={24}
          height={24}
        />
      </button>
    </Link>
  </div>
</div>






  
    


  <div className="flex flex-col md:flex-row gap-6 mb-10">
  {/* Image Section */}
  <div className="w-full md:w-[619px] h-[300px] md:h-[500px] bg-[#F9F9F9] border border-[rgba(0,0,0,0.2)] rounded-[40px] flex items-center justify-center p-4">
    <Image
      src="/Rectangle 73.png"
      alt="Another Project Screenshot"
      width={619}
      height={612}
      className="w-full h-full object-contain rounded-[40px]"
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-[939px] bg-[#F9F9F9] border border-[rgba(0,0,0,0.2)] rounded-[40px] p-6 md:p-8 box-border flex flex-col justify-between z-[1]">
    {/* Inner Content */}
    <div>
      <h2 className="text-[32px] md:text-[64px] leading-[40px] md:leading-[70px] font-archivo font-normal text-[#212121] mb-4">
        Sync Time
      </h2>
      <p className="text-[18px] md:text-[32px] leading-[28px] md:leading-[50px] font-karla font-light text-[#212121]">
      SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.
      </p>
    </div>

    {/* VIEW MORE Button */}
    <Link href={`/portfolio/sync-time`}>
      <button
        className="mt-6 w-full h-[60px] md:h-[77px] bg-[#B6D2D5] rounded-[40px] text-[20px] md:text-[32px] leading-[32px] md:leading-[45px] text-[#016E7C] font-archivo font-normal hover:text-white hover:bg-gray-800 transition duration-300 hover:opacity-90 flex items-center justify-between px-6 md:px-8"
        onMouseEnter={() => setHoveredSection("Sync Time")}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <span>VIEW MORE</span>
        <Image
          src={hoveredSection === "Sync Time" ? arrowRightHover : arrowRight}
          alt="arrow right"
          width={30}
          height={30}
        />
      </button>
    </Link>
  </div>
</div>


   
<div className="flex flex-col md:flex-row-reverse gap-6 mb-10">
  {/* Image Right */}
  <div className="w-full md:w-[619px] h-[300px] md:h-[500px] bg-gray-100 rounded-[40px] flex items-center justify-center p-4">
    <Image
      src="/Group 100.png"
      alt="Yet Another Project Screenshot"
      width={619}
      height={612}
      className="w-full h-full object-contain rounded-[40px]"
    />
  </div>

  {/* Text Left */}
  <div className="w-full md:w-[939px] bg-gray-50 p-6 md:p-8 rounded-[40px] border border-gray-200 flex flex-col justify-center">
    <h3 className="text-[32px] md:text-[64px] leading-[40px] md:leading-[70px] font-archivo font-normal text-[#212121] mb-4">
      Ultrasound MD
    </h3>
    <p className="text-[18px] md:text-[32px] leading-[30px] md:leading-[50px] font-karla font-light text-[#212121] mb-6">
      We partnered with Ultrasound MD to design & develop a cutting-edge website that streamlines their patient experience.
      By simplifying scheduling and providing clear information.
    </p>
    <Link href={`/portfolio/ultrasound-md`}>
      <button
        className="mt-6 w-full h-[60px] md:w-[841px] md:h-[77px] bg-[#B6D2D5] rounded-[40px] text-[20px] md:text-[32px] leading-[30px] md:leading-[45px] text-[#016E7C] font-archivo font-normal hover:text-white hover:bg-gray-800 transition duration-300 hover:opacity-90 flex items-center justify-between px-6 md:px-8"
        onMouseEnter={() => setHoveredSection("Sync Time")}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <span>VIEW MORE</span>
        <Image
          src={hoveredSection === "Sync Time" ? arrowRightHover : arrowRight}
          alt="arrow right"
          width={30}
          height={30}
        />
      </button>
    </Link>
  </div>
</div>


 <div className="flex flex-col md:flex-row gap-6 mb-10">
  {/* Image Section */}
  <div className="w-full md:w-[619px] h-[300px] md:h-[500px] bg-[#F9F9F9] border border-[rgba(0,0,0,0.2)] rounded-[40px] flex items-center justify-center p-4">
    <Image
      src="/Rectangle 73.png"
      alt="Another Project Screenshot"
      width={619}
      height={612}
      className="w-full h-full object-contain rounded-[40px]"
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-[939px] bg-[#F9F9F9] border border-[rgba(0,0,0,0.2)] rounded-[40px] p-6 md:p-8 box-border flex flex-col justify-between z-[1]">
    {/* Inner Content */}
    <div>
      <h2 className="text-[32px] md:text-[64px] leading-[40px] md:leading-[70px] font-archivo font-normal text-[#212121] mb-4">
        Sync Time
      </h2>
      <p className="text-[18px] md:text-[32px] leading-[28px] md:leading-[50px] font-karla font-light text-[#212121]">
      SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.
      </p>
    </div>

    {/* VIEW MORE Button */}
    <Link href={`/portfolio/sync-time`}>
      <button
        className="mt-6 w-full h-[60px] md:h-[77px] bg-[#B6D2D5] rounded-[40px] text-[20px] md:text-[32px] leading-[32px] md:leading-[45px] text-[#016E7C] font-archivo font-normal hover:text-white hover:bg-gray-800 transition duration-300 hover:opacity-90 flex items-center justify-between px-6 md:px-8"
        onMouseEnter={() => setHoveredSection("Sync Time")}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <span>VIEW MORE</span>
        <Image
          src={hoveredSection === "Sync Time" ? arrowRightHover : arrowRight}
          alt="arrow right"
          width={30}
          height={30}
        />
      </button>
    </Link>
  </div>
  </div>




            </>
          ) : (
            <>
              <h1 className="font-archivo text-[64px] md:text-[96px] leading-[70px]  mb-10 md:leading-[104px] font-normal text-[#212121]">Case Studies</h1>
            
            
<div className="flex flex-col md:flex-row gap-6 mb-10">
  {/* Image Section */}
  <div className="w-full md:w-[619px] bg-[#F9F9F9] border border-[rgba(0,0,0,0.2)] rounded-[40px] flex items-center justify-center p-4 h-[300px] md:h-[500px]">
    <Image
      src="/Rectangle 73.png"
      alt="Sync Time Screenshot"
      width={619}
      height={612}
      className="w-full h-full object-contain rounded-[40px]"
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-[939px] bg-[#F9F9F9] border border-[rgba(0,0,0,0.2)] rounded-[40px] p-6 md:p-8 flex flex-col justify-between h-auto md:h-[500px] box-border z-[1]">
    <div>
      <h2 className="text-[36px] md:text-[64px] leading-[44px] md:leading-[70px] font-archivo font-normal text-[#212121] mb-4">
        Sync Time
      </h2>
      <p className="text-[18px] md:text-[32px] leading-[28px] md:leading-[50px] font-karla font-light text-[#212121]">
        SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations,
        and features for managing appointments, pricing, teams, and virtual meetings.
      </p>
    </div>

    <Link href={`/portfolio/sync-time`}>
      <button
        className="mt-6 w-full h-[60px] md:w-[841px] md:h-[77px] bg-[#B6D2D5] rounded-[40px] text-[20px] md:text-[32px] leading-[30px] md:leading-[45px] text-[#016E7C] font-archivo font-normal hover:text-white hover:bg-gray-800 transition duration-300 hover:opacity-90 flex items-center justify-between px-6 md:px-8"
        onMouseEnter={() => setHoveredSection("Sync Time")}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <span>VIEW MORE</span>
        <Image
          src={hoveredSection === "Sync Time" ? arrowRightHover : arrowRight}
          alt="arrow right"
          width={24}
          height={24}
        />
      </button>
    </Link>
  </div>
</div>



 



      <div className="flex flex-col md:flex-row-reverse gap-6 mb-10">
  {/* Image Right */}
  <div className="w-full md:w-[619px] h-[300px] md:h-[500px] bg-gray-100 rounded-[40px] flex items-center justify-center p-4">
    <Image
      src="/Group 100.png"
      alt="Ultrasound MD Screenshot"
      width={619}
      height={612}
      className="w-full h-full object-contain rounded-[40px]"
    />
  </div>

  {/* Text Left */}
  <div className="w-full md:w-[939px] bg-gray-50 p-6 md:p-8 rounded-[40px] border border-gray-200 flex flex-col justify-center">
    <h3 className="text-[32px] md:text-[64px] leading-[38px] md:leading-[70px] font-archivo font-normal text-[#212121] mb-4">
      Ultrasound MD
    </h3>
    <p className="text-[18px] md:text-[32px] leading-[30px] md:leading-[50px] font-karla font-light text-[#212121] mb-6">
      We partnered with Ultrasound MD to design & develop a cutting-edge website that streamlines their
      patient experience. we helped them
      enhance their online presence and reach a wider audience of patients in need.
    </p>
    <Link href={`/portfolio/ultrasound-md`}>
      <button
        className="mt-4 md:mt-6 w-full h-[60px] md:w-[841px] md:h-[77px] bg-[#B6D2D5] rounded-[40px] text-[20px] md:text-[32px] leading-[28px] md:leading-[45px] text-[#016E7C] font-archivo font-normal hover:text-white hover:bg-gray-800 transition duration-300 hover:opacity-90 flex items-center justify-between px-6 md:px-8"
        onMouseEnter={() => setHoveredSection("Sync Time")}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <span>VIEW MORE</span>
        <Image
          src={hoveredSection === "Sync Time" ? arrowRightHover : arrowRight}
          alt="arrow right"
          width={24}
          height={24}
        />
      </button>
    </Link>
  </div>
</div>






  
    


  <div className="flex flex-col md:flex-row gap-6 mb-10">
  {/* Image Section */}
  <div className="w-full md:w-[619px] h-[300px] md:h-[500px] bg-[#F9F9F9] border border-[rgba(0,0,0,0.2)] rounded-[40px] flex items-center justify-center p-4">
    <Image
      src="/Rectangle 73.png"
      alt="Another Project Screenshot"
      width={619}
      height={612}
      className="w-full h-full object-contain rounded-[40px]"
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-[939px] bg-[#F9F9F9] border border-[rgba(0,0,0,0.2)] rounded-[40px] p-6 md:p-8 box-border flex flex-col justify-between z-[1]">
    {/* Inner Content */}
    <div>
      <h2 className="text-[32px] md:text-[64px] leading-[40px] md:leading-[70px] font-archivo font-normal text-[#212121] mb-4">
        Sync Time
      </h2>
      <p className="text-[18px] md:text-[32px] leading-[28px] md:leading-[50px] font-karla font-light text-[#212121]">
      SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.
      </p>
    </div>

    {/* VIEW MORE Button */}
    <Link href={`/portfolio/sync-time`}>
      <button
        className="mt-6 w-full h-[60px] md:h-[77px] bg-[#B6D2D5] rounded-[40px] text-[20px] md:text-[32px] leading-[32px] md:leading-[45px] text-[#016E7C] font-archivo font-normal hover:text-white hover:bg-gray-800 transition duration-300 hover:opacity-90 flex items-center justify-between px-6 md:px-8"
        onMouseEnter={() => setHoveredSection("Sync Time")}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <span>VIEW MORE</span>
        <Image
          src={hoveredSection === "Sync Time" ? arrowRightHover : arrowRight}
          alt="arrow right"
          width={30}
          height={30}
        />
      </button>
    </Link>
  </div>
</div>


   
<div className="flex flex-col md:flex-row-reverse gap-6 mb-10">
  {/* Image Right */}
  <div className="w-full md:w-[619px] h-[300px] md:h-[500px] bg-gray-100 rounded-[40px] flex items-center justify-center p-4">
    <Image
      src="/Group 100.png"
      alt="Yet Another Project Screenshot"
      width={619}
      height={612}
      className="w-full h-full object-contain rounded-[40px]"
    />
  </div>

  {/* Text Left */}
  <div className="w-full md:w-[939px] bg-gray-50 p-6 md:p-8 rounded-[40px] border border-gray-200 flex flex-col justify-center">
    <h3 className="text-[32px] md:text-[64px] leading-[40px] md:leading-[70px] font-archivo font-normal text-[#212121] mb-4">
      Ultrasound MD
    </h3>
    <p className="text-[18px] md:text-[32px] leading-[30px] md:leading-[50px] font-karla font-light text-[#212121] mb-6">
      We partnered with Ultrasound MD to design & develop a cutting-edge website that streamlines their patient experience.
      By simplifying scheduling and providing clear information.
    </p>
    <Link href={`/portfolio/ultrasound-md`}>
      <button
        className="mt-6 w-full h-[60px] md:w-[841px] md:h-[77px] bg-[#B6D2D5] rounded-[40px] text-[20px] md:text-[32px] leading-[30px] md:leading-[45px] text-[#016E7C] font-archivo font-normal hover:text-white hover:bg-gray-800 transition duration-300 hover:opacity-90 flex items-center justify-between px-6 md:px-8"
        onMouseEnter={() => setHoveredSection("Sync Time")}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <span>VIEW MORE</span>
        <Image
          src={hoveredSection === "Sync Time" ? arrowRightHover : arrowRight}
          alt="arrow right"
          width={30}
          height={30}
        />
      </button>
    </Link>
  </div>
</div>


 <div className="flex flex-col md:flex-row gap-6 mb-10">
  {/* Image Section */}
  <div className="w-full md:w-[619px] h-[300px] md:h-[500px] bg-[#F9F9F9] border border-[rgba(0,0,0,0.2)] rounded-[40px] flex items-center justify-center p-4">
    <Image
      src="/Rectangle 73.png"
      alt="Another Project Screenshot"
      width={619}
      height={612}
      className="w-full h-full object-contain rounded-[40px]"
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-[939px] bg-[#F9F9F9] border border-[rgba(0,0,0,0.2)] rounded-[40px] p-6 md:p-8 box-border flex flex-col justify-between z-[1]">
    {/* Inner Content */}
    <div>
      <h2 className="text-[32px] md:text-[64px] leading-[40px] md:leading-[70px] font-archivo font-normal text-[#212121] mb-4">
        Sync Time
      </h2>
      <p className="text-[18px] md:text-[32px] leading-[28px] md:leading-[50px] font-karla font-light text-[#212121]">
      SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.
      </p>
    </div>

    {/* VIEW MORE Button */}
    <Link href={`/portfolio/sync-time`}>
      <button
        className="mt-6 w-full h-[60px] md:h-[77px] bg-[#B6D2D5] rounded-[40px] text-[20px] md:text-[32px] leading-[32px] md:leading-[45px] text-[#016E7C] font-archivo font-normal hover:text-white hover:bg-gray-800 transition duration-300 hover:opacity-90 flex items-center justify-between px-6 md:px-8"
        onMouseEnter={() => setHoveredSection("Sync Time")}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <span>VIEW MORE</span>
        <Image
          src={hoveredSection === "Sync Time" ? arrowRightHover : arrowRight}
          alt="arrow right"
          width={30}
          height={30}
        />
      </button>
    </Link>
  </div>
  </div>


            </>
          )}
        </div>
      </section>
 </main>
    

  )
}
