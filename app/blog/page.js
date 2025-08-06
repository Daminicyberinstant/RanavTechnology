'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import arrowRightYellow from '../../public/arrow-right-yellow.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const blogs = [
  {
    id: 'future-of-ai',
    title: 'The Future of AI in Business',
    date: '22 July 2025',
    tags: ['Tech'],
    creator: 'Tom',
    image: '/future-of-AI-feature1.jpg',
  },
  {
    id: 'unlocking-business-potential-with-tailored-software-solutions',
    title: 'Unlocking Business Potential with Tailored Software Solutions',
    date: '21 May 2025',
    tags: ['Design'],
    creator: 'Jane',
    image: '/unlocking-business-feature.jpg',
  },
  {
    id: 'choosing-the-right-technology-stack-for-your-business-website',
    title: 'Choosing the Right Technology Stack for Your Business Website',
    date: '20 May 2025',
    tags: ['Tech'],
    creator: 'Tom',
    image: '/right-technology-stack-feature.jpg',
  },
  {
    id: 'digital-transformation-for-startups-where-to-begin',
    title: 'Digital Transformation for Startups: Where to Begin?',
    date: '19 May 2025',
    tags: ['Design'],
    creator: 'Jane',
    image: '/digital-transformation-feature.webp',
  }
];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All Blogs');
  const [sortOrder, setSortOrder] = useState('Recent');
  const [creatorFilter, setCreatorFilter] = useState('All Creators');
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  const scrollRef = useRef(null);
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


useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  let animationFrameId;

  const scrollSpeed = 0.5;

  const scroll = () => {
    if (!container) return;

    container.scrollLeft += scrollSpeed;

    // Reset to start once halfway (since list is duplicated)
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }

    animationFrameId = requestAnimationFrame(scroll);
  };

  animationFrameId = requestAnimationFrame(scroll);

  return () => cancelAnimationFrame(animationFrameId);
}, []);




  
  useEffect(() => {
    let updated = blogs;

    if (searchQuery) {
      updated = updated.filter((b) =>
        b.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedTag !== 'All Blogs') {
      updated = updated.filter((b) => b.tags.includes(selectedTag));
    }

    if (creatorFilter !== 'All Creators') {
      updated = updated.filter((b) => b.creator === creatorFilter);
    }

    if (sortOrder === 'Recent') {
      updated = [...updated].sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOrder === 'Oldest') {
      updated = [...updated].sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setFilteredBlogs(updated);
  }, [searchQuery, selectedTag, sortOrder, creatorFilter]);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
     


  <section className="bg-white px-10 py-16 max-w-[1600px] mx-auto">
  {/* Hero Image with Overlay Text */}
  <div
    className="relative h-[60vh] md:h-[70vh] w-full rounded-4xl bg-cover bg-center flex items-center justify-center text-center text-white"
    style={{
      backgroundImage: `url('/blog-bg-img.png')`, // Replace with your image path
      backgroundBlendMode: 'overlay',
      backgroundColor: '#00000080',
    }}
  >
    <div className="w-full max-w-[1586px] px-4 mx-auto text-center">
  <h2 className="font-archivo font-semibold text-[32px] md:text-[50px] lg:text-[70.18px] leading-[88px] tracking-[-0.02em] text-white">
   Blogs and Resources
  </h2>
  <p className="font-inter font-normal text-[18px] md:text-[24px] lg:text-[29.24px] leading-[44px] text-white max-w-[1126px] mx-auto mt-4">
     The latest industry news, interviews, technologies, and resources.
  </p>
</div>
  </div>

  {/* Text Description */}

</section>

<section className="bg-white px-4 md:px-10 py-6 md:py-10 max-w-[1550px] mx-auto -mt-10 -mb-15">
  {/* Filters */}
  <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    {/* Search */}
    <div className="relative flex flex-col items-start gap-[5.58px] w-[297.4px] h-[45.31px]">
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full h-full pl-9 pr-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
      />
    </div>

    {/* Dropdowns */}
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full sm:w-auto">
  {/* Custom Select - Tag */}
  <div className="relative w-fit">
    <select
      value={selectedTag}
      onChange={(e) => setSelectedTag(e.target.value)}
      className="appearance-none bg-transparent text-[#212121] font-archivo font-normal text-[18.6px] leading-[20px] pr-6 focus:outline-none"
    >
      <option>All Blogs</option>
      <option>Tech</option>
      <option>Design</option>
    </select>
    <svg
      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#212121] pointer-events-none"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>

  {/* Custom Select - Sort Order */}
  <div className="relative w-fit">
    <select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      className="appearance-none bg-transparent text-[#212121] font-archivo font-normal text-[18.6px] leading-[20px] pr-6 focus:outline-none"
    >
      <option>Recent</option>
      <option>Oldest</option>
    </select>
    <svg
      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#212121] pointer-events-none"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>

  {/* Custom Select - Creator */}
  <div className="relative w-fit">
    <select
      value={creatorFilter}
      onChange={(e) => setCreatorFilter(e.target.value)}
      className="appearance-none bg-transparent text-[#212121] font-archivo font-normal text-[18.6px] leading-[20px] pr-6 focus:outline-none"
    >
      <option>All Creators</option>
      <option>Tom</option>
      <option>Jane</option>
    </select>
    <svg
      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#212121] pointer-events-none"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>

  </div>
</section>






<section className="bg-white px-10 py-16 max-w-[1600px] mx-auto">
  <div className="grid md:grid-cols-2 gap-6">
    {filteredBlogs.map((blog) => (
      <div className="slide-wrapper" key={blog.id}>
        <div className="group relative w-full mx-3 p-4 md:p-8 rounded-3xl text-white flex justify-between flex-col h-48 md:h-96 overflow-hidden">

          {/* Background image only (no white gradient now) */}
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{
              background: `url('${blog.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          {/* No hover overlay now */}

          <div className="relative z-10 flex justify-between flex-col h-full">
            {/* Hover button turns orange, icon turns white */}
            <div className="self-end bg-white group-hover:bg-[#F69331] p-4 w-10 md:w-20 h-10 md:h-20 flex justify-center items-center rounded-full transition-colors duration-300">
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

            <div className="flex flex-col justify-between">
              <Link href={`/blog/${blog.id}`}>
               <h4 className="font-plusjakarta font-bold text-[40.39px] leading-[51px] text-white line-clamp-2">
          {blog.title}
             </h4>

              </Link>
              <div className="flex flex-row justify-between items-center">
                <p className=" font-plusjakarta font-medium text-[17.95px] leading-[23px] text-white">
                  {blog.date}
                </p>
                

                <div className="flex gap-3">
                  {blog.tags.map((tag, index) => (
                    <p
                      key={index}
                      className="bg-[#225A77] px-2 md:px-4 leading-none py-1 md:py-2 text-white-light rounded-[13px] text-[7px] md:text-sm"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


<section className="bg-white px-4 md:px-10 py-10 max-w-[1500px] mx-auto">
  <h2 className="font-archivo font-normal text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[44px] text-black">
    Must read/Trending
  </h2>
</section>


      {/* Auto-scrolling Row  */}
<section className="bg-white px-4 md:px-10 py-10 max-w-[1600px] mx-auto">

      {/* <h2 className="font-archivo font-normal text-[48px] sm:text-[72px] lg:text-[96px] leading-[104px] text-[#01263B] text-center mb-10">
        Our Blogs
      </h2> */}

      <Slider {...sliderSettings}>
        {blogs.map((blog) => (
          <div key={blog.id}>
            
                   <div
       
        className="relative group w-[280px] sm:w-[450px] md:w-[560px] lg:w-[620px] h-[469px] rounded-[40px] overflow-hidden flex-shrink-0 px-1"
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


    </main>
  );
};

export default BlogPage;

