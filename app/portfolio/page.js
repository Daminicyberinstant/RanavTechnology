"use client"
import React, { useState } from 'react'
import Link from 'next/link'

import Image from 'next/image'
import arrowRight from "../../public/arrow-right.png";

import arrowRightHover from "../../public/arrow-right-white.png";
import ProjectCard from '../../components/ProjectCart.jsx';
export default function Portfolio() {
  const [hoveredSection, setHoveredSection] = useState(null);
  const projectsData = [
    {
      title: "Sync Time",
      description: "SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.",
      imageUrl: "/Rectangle 73.png",
      viewMoreLink: "/portfolio/sync-time",
      isReversed: false
    },
    {
      title: "Ultrasound MD",
      description: "We partnered with Ultrasound MD to design & develop a cutting-edge website that streamlines their patient experience. we helped them enhance their online presence and reach a wider audience of patients in need.",
      imageUrl: "/Group 100.png",
      viewMoreLink: "/portfolio/ultrasound-md",
      isReversed: true
    },
    {
      title: "Sync Time",
      description: "SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.",
      imageUrl: "/Rectangle 73.png",
      viewMoreLink: "/portfolio/sync-time",
      isReversed: false
    },
    {
      title: "Ultrasound MD",
      description: "We partnered with Ultrasound MD to design & develop a cutting-edge website that streamlines their patient experience. By simplifying scheduling and providing clear information.",
      imageUrl: "/Group 100.png",
      viewMoreLink: "/portfolio/ultrasound-md",
      isReversed: true
    },
    {
      title: "Sync Time",
      description: "SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.",
      imageUrl: "/Rectangle 73.png",
      viewMoreLink: "/portfolio/sync-time",
      isReversed: false
    }
  ];

  // Data for case studies (same data for now, you can modify as needed)
  const caseStudiesData = [
    {
      title: "Sync Time",
      description: "SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.",
      imageUrl: "/Rectangle 73.png",
      viewMoreLink: "/portfolio/sync-time",
      isReversed: false
    },
    {
      title: "Ultrasound MD",
      description: "We partnered with Ultrasound MD to design & develop a cutting-edge website that streamlines their patient experience. we helped them enhance their online presence and reach a wider audience of patients in need.",
      imageUrl: "/Group 100.png",
      viewMoreLink: "/portfolio/ultrasound-md",
      isReversed: true
    },
    {
      title: "Sync Time",
      description: "SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.",
      imageUrl: "/Rectangle 73.png",
      viewMoreLink: "/portfolio/sync-time",
      isReversed: false
    },
    {
      title: "Ultrasound MD",
      description: "We partnered with Ultrasound MD to design & develop a cutting-edge website that streamlines their patient experience. By simplifying scheduling and providing clear information.",
      imageUrl: "/Group 100.png",
      viewMoreLink: "/portfolio/ultrasound-md",
      isReversed: true
    },
    {
      title: "Sync Time",
      description: "SyncTime is a scheduling software for service-based businesses. It offers online booking, payment integrations, and features for managing appointments, pricing, teams, and virtual meetings.",
      imageUrl: "/Rectangle 73.png",
      viewMoreLink: "/portfolio/sync-time",
      isReversed: false
    }
  ];


  const [activeTab, setActiveTab] = useState('projects');
  return (
    <main className='font-sans text-white mx-auto min-h-screen'>

    <section className="bg-white lg:px-10 px-4 py-16 max-w-[1600px] mx-auto">
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
          <h2 className="font-archivo font-semibold text-[32px] md:text-[50px] lg:text-[70.18px] leading-[45px] tracking-[-0.02em] text-white">
            Explore Our Projects
          </h2>
          <p className="font-inter font-normal text-[16px] md:text-[20px] lg:text-[20px] mt-10 leading-[30px] text-white max-w-[1126px] mx-auto">
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

            {/* Render projects using ProjectCard component */}
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                viewMoreLink={project.viewMoreLink}
                isReversed={project.isReversed}
              />
            ))}
          </>
        ) : (
          <>
            <h1 className="font-archivo bg text-[64px] md:text-[96px] leading-[70px]  mb-10 md:leading-[104px] font-normal text-[#212121]">Case Studies</h1>

            {/* Render case studies using ProjectCard component */}
            {caseStudiesData.map((caseStudy, index) => (
              <ProjectCard
                key={index}
                title={caseStudy.title}
                description={caseStudy.description}
                imageUrl={caseStudy.imageUrl}
                viewMoreLink={caseStudy.viewMoreLink}
                isReversed={caseStudy.isReversed}
              />
            ))}
          </>
        )}
      </div>
    </section>
  </main>


  )
}
