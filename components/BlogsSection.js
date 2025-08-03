'use client';
import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const blogs = [
  {
    id: 'future-of-ai',
    title: 'The Future of AI in Business',
    date: '2025-03-22',
    tags: ['Machine Learning'],
    image: '/future-of-AI-feature1.jpg',
  },
  {
    id: 'unlocking-business-potential-with-tailored-software-solutions',
    title: 'Unlocking Business Potential with Tailored Software Solutions',
    date: '2025-03-22',
    tags: ['Machine Learning'],
    image: '/unlocking-business-feature.jpg',
  },
  {
    id: 'choosing-the-right-technology-stack-for-your-business-website',
    title: 'Choosing the Right Technology Stack for Your Business Website',
    date: '2025-03-22',
    tags: ['Machine Learning'],
    image: '/right-technology-stack-feature.jpg',
  },
  {
    id: 'digital-transformation-for-startups-where-to-begin',
    title: 'Digital Transformation for Startups: Where to Begin?',
    date: '2025-03-22',
    tags: ['Machine Learning'],
    image: '/digital-transformation-feature.webp',
  },
];

const sliderSettings = {
  infinite: true,
  speed: 8000,
  autoplay: true,
  autoplaySpeed: 0, // keeps it seamless
  cssEase: 'linear',
  slidesToShow: 2.3,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: true,
  rtl: false, // 👈 this ensures left-to-right scroll
  centerMode: true,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1.5,
        centerMode: true,
        centerPadding: '0px',
        rtl: false, // also set in breakpoints if needed
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.2,
        centerMode: true,
        centerPadding: '0px',
        rtl: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '0px',
        rtl: false,
      },
    },
  ],
};



const BlogsSection = () => {
  return (
    <section className="bg-white px-4 md:px-10 py-10 mx-w-[1900px]  mx-auto">
      <h2 className="font-archivo font-normal text-[48px] sm:text-[72px] lg:text-[96px] leading-[104px] text-[#01263B] text-center mb-10">
        Our Blogs
      </h2>

      <Slider {...sliderSettings}>
        {blogs.map((blog) => (
          <div key={blog.id}>
            
                   <div
       
        className="relative group w-[350px] sm:w-[550px] md:w-[650px] lg:w-[750px] h-[469px] rounded-[40px] overflow-hidden flex-shrink-0 px-1"
      >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${blog.image}')`,
                }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full px-5 py-6">
                {/* Arrow Button */}
                <div className="self-end bg-white group-hover:bg-[#F69331] p-3 w-12 h-12 flex justify-center items-center rounded-full transition-colors duration-300">
                  <Link href={`/blog/${blog.id}`}>
                    <Image
                      src="/arrow-right-yellow.png"
                      alt="arrow"
                      width={20}
                      height={20}
                      className="transition-all duration-500 group-hover:brightness-0 group-hover:invert group-hover:contrast-100 group-hover:rotate-[-45deg]"
                    />
                  </Link>
                </div>

                {/* Title and Metadata */}
                <div>
                  <Link href={`/blog/${blog.id}`}>
                    <h4 className="font-plusjakarta font-bold text-[20px] sm:text-[24px] leading-tight text-[#212121] line-clamp-2">
                      {blog.title}
                    </h4>
                  </Link>
                  <div className="flex justify-between items-center mt-3 flex-wrap">
                    <p className="font-plusjakarta font-medium text-[14px] sm:text-[15px] text-[#212121]">
                      {blog.date}
                    </p>
                    <div className="flex gap-2 mt-2 sm:mt-0">
                      {blog.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-[#225A77] text-white text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BlogsSection;
