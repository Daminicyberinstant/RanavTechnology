'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const blogs = [
  {
    title: 'Title of Blog',
    date: '10 July 2024',
    category: 'Machine learning',
    image: '/286adcd6d2f16bc911229902681c99ef104bf302.jpg',
  },
  {
    title: 'Title of Blog',
    date: '10 July 2024',
    category: 'AI',
    image: '/c165cf52d16aa5036f9e02cc4a222afac7aab2c4.jpg',
  },
  {
    title: 'Title of Blog',
    date: '10 July 2024',
    category: 'Innovation',
    image: '/286adcd6d2f16bc911229902681c99ef104bf302.jpg',
  },
];

export default function BlogSwiper() {
  return (
    <div className="w-full py-12 bg-white overflow-hidden">
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        loop={true}
        grabCursor={true}
        allowTouchMove={true}
        className="pl-6"
      >
        {blogs.concat(blogs).map((blog, index) => (
          <SwiperSlide
            key={index}
            className="!w-[280px] md:!w-[450px] flex-shrink-0"
          >
            <div className="relative h-[320px] rounded-2xl overflow-hidden group shadow-lg">
              <Image
                src={blog.image}
                alt={blog.title}
               fill
                className="w-full h-full object-cover"
              />

              <div className=" absolute w-full h-full left-0 right-0 ">
                <Image
                  src={'/Rectangle 77.png'}
                  alt={blog.title}
                  fill
                  className=" w-full h-full object-cover "
                />
              </div>
              {/* Top-right arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <span className="text-orange-600 text-xl">&#8594;</span>
              </div>

              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 text-black left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-4 ">
                <p className="font-semibold text-2xl ">{blog.title}</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-sm">{blog.date}</p>
                  <span className="bg-white text-[#0D1B39] text-xs font-semibold px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
