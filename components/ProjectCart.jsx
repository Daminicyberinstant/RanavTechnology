'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const ProjectCard = ({
  title,
  description,
  imageUrl,
  viewMoreLink,
  isReversed = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-stretch gap-5 md:gap-8 mb-8 ${
        isReversed ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Image Section */}
      <div className="relative w-full md:w-[35%] h-[400px] md:h-[402px] bg-[#e9f1f1] rounded-[30px] flex items-center justify-center overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="h-full w-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-[65%] md:h-[402px] border border-2 bg-gray-50 rounded-2xl p-8 flex flex-col justify-center">
        <h3 className="text-4xl font-normal mb-10 text-black">{title}</h3>
        <p className="text-[15px] lg:w-[80%] w-full mb-8 sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] md:leading-[1.7] font-normal font-karla text-gray-800">
          {description}
        </p>
        <Link
          href={viewMoreLink}
          className="flex justify-between items-center font-normal gap-4 bg-[#d3e9ed] hover:bg-[#01263b] hover:text-white text-md lg:text-2xl px-8 py-4 text-[#046d7a] rounded-full w-full transition-all"
        >
          <span>VIEW MORE</span>
          <span className="font-normal text-4xl">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
