import Link from 'next/link'
import React from 'react'
import collaborationIcon from "../../public/collaboration-icon.png";
import personalIcon from "../../public/personal-icon.png";
import futureReadyIcon from "../../public/future-ready-icon.png";
import tailoredIcon from "../../public/tailored-icon.png";
import Image from "next/image";

const workWithUsData = [
  {
    title: "Tailored Solutions",
    description:
      "We don’t believe in one-size-fits-all. Every project is custom-built to fit your unique business needs.",
    imageUrl: tailoredIcon,
  },
  {
    title: "Future-Ready Technology",
    description:
      "We deliver scalable solutions that grow with your business and adapt to the future.",
    imageUrl: futureReadyIcon,
  },
  {
    title: "Collaboration at the Core",
    description:
      "We work with you, not for you. Your input shapes everything we do.",
    imageUrl: collaborationIcon,
  },
  {
    title: "Personal Commitment",
    description:
      "Our team is here for you at every step of the way, from the first meeting to long after the project is complete.",
    imageUrl: personalIcon,
  },
];
export default function About() {
  return (
    <main className="font-sans ">
  

 <section className="bg-white px-10 py-16 max-w-[1600px] mx-auto">
  {/* Hero Image with Overlay Text */}
  <div
    className="relative h-[60vh] md:h-[70vh] w-full rounded-4xl bg-cover bg-center flex items-center justify-center text-center text-white"
    style={{
      backgroundImage: `url('/Rectangle 67.png')`, // Replace with your image path
      backgroundBlendMode: 'overlay',
      backgroundColor: '#00000080',
    }}
  >
    <div className="max-w-2xl px-4">
      <p className="text-base md:text-lg px-2 py-2 border border-gray-400 mt-10 mb-10 text-gray-400 rounded-full">
        Explore · Execute · Elevate
      </p>
      <h2 className="text-4xl md:text-4xl font-semibold mb-4 py-15">
        ABOUT US
      </h2>
    </div>
  </div>


</section>
      {/* Intro Paragraph */}
    

<section className="relative mt-[15px] mb-10 px-4">
  <div className="w-full max-w-[1403px] mx-auto text-black font-karla text-[18px] md:text-[24px] leading-[30px] md:leading-[50px] text-justify">
    <p className="mb-6">
      At Ranav Technologies, we believe that technology should work for people, not the other way around. We exist to make the complex simple—using innovative solutions to solve your biggest challenges. Our passion lies in creating custom technology that not only meets your business needs but helps you unlock new opportunities for growth.
    </p>
    <p>
      Behind every line of code, every design, and every solution we create is a dedicated team of professionals who care about your success. We partner with businesses to develop tailored solutions—from powerful apps to seamless integrations—that push the boundaries of what’s possible. Our clients trust us because we take the time to understand their vision and work hand-in-hand to turn that vision into reality.
    </p>
  </div>
</section>



      {/* Why Work With Us Section */}
        <section className="bg-[#f4f4f4] rounded-3xl px-10 py-16 max-w-[1600px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Title Block */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#007084] leading-tight">WHY</h2>
            <h3 className="text-4xl md:text-5xl font-normal text-black leading-tight">work with us?</h3>
          </div>
          {/* Description Paragraph */}
          <div>
            <p className="text-xl font-normal text-black leading-relaxed">
              When you choose Ranav Technologies, you’re choosing more than just a technology provider — you’re choosing
              a partner who’s invested in your long-term success. We bring years of experience, technical expertise, and
              a genuine commitment to helping your business thrive. Here’s why clients love working with us:
            </p>
          </div>
    

        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <Image
              src={tailoredIcon}
              alt="Tailored Solutions"
              className="w-12 h-12 flex-shrink-0"
              width={48}
              height={48}
            />
            <div>
              <h4 className="font-semibold text-lg text-black">Tailored Solutions:</h4>
              <p className="text-base text-gray-800">
                We don’t believe in one-size-fits-all. Every project is custom-built to fit your unique business needs.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <Image
              src={futureReadyIcon}
              alt="Future Ready Tech"
              className="w-12 h-12 flex-shrink-0"
              width={48}
              height={48}
            />
            <div>
              <h4 className="font-semibold text-lg text-black">Future-Ready Technology:</h4>
              <p className="text-base text-gray-800">
                We deliver scalable solutions that grow with your business and adapt to the future.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <Image
              src={collaborationIcon}
              alt="Collaboration at Core"
              className="w-12 h-12 flex-shrink-0"
              width={48}
              height={48}
            />
            <div>
              <h4 className="font-semibold text-lg text-black">Collaboration at the Core:</h4>
              <p className="text-base text-gray-800">
                We work with you, not for you. Your input shapes everything we do.
              </p>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="flex items-start gap-4">
            <Image
              src={personalIcon}
              alt="Personal Commitment"
              className="w-12 h-12 flex-shrink-0"
              width={48}
              height={48}
            />
            <div>
              <h4 className="font-semibold text-lg text-black">Personal Commitment:</h4>
              <p className="text-base text-gray-800">
                Our team is here for you at every step of the way, from the first meeting to long after the project is
                complete.
              </p>
            </div>
          </div>
        </div>
        {/* Bottom Row */}
        <div className="flex justify-between items-center mt-10 flex-col sm:flex-row gap-4">
          <Link href={"/contact"}>
            <button className="bg-[#f7931e] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#e67e00] transition">
              CONTACT US
            </button>
          </Link>
          <span className="text-[#007084] font-bold text-lg">Because we care.</span>
        </div>
      </section>










      {/* Our Approach */}
     
      <section className="bg-white px-10 py-16 max-w-[1600px] mx-auto">
        {/* Heading & Intro */}
       <div className="text-left">
    <h2 className="text-[96px] leading-[104px] font-[400] font-archivo text-[#212121] mb-6">
      Our Approach
    </h2>
    <p className="text-[24px] leading-[50px] font-karla text-[#212121] max-w-[1467px]">
      At Ranav Technologies, we believe that every business is unique, and so are its challenges. That’s why we
      take the time to understand your business inside and out before crafting a solution that’s tailor-made for
      you. Our process is collaborative and transparent because we believe the best results come from working
      together.
    </p>
  </div>
  


        {/* Step 1 */}
    <div className="max-w-[1300px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  {/* Image Section */}
  <div className="flex justify-center">
    <Image
      src="/Group 196.png"
      alt="Discovery & Understanding"
      className="w-[580px] h-[480px] object-contain"
    />
  </div>

  {/* Text Section */}
  <div>
    <h3 className="text-[40px] leading-[44px] font-bold font-archivo text-[#212121] mb-4 max-w-[522px]">
      Discovery & Understanding
    </h3>
    <p className="text-[24px] leading-[38px] font-light font-karla text-[#212121] max-w-[662px]">
      We start by listening. We dive deep into your business to fully understand your goals, pain points, and vision.
      Whether it’s a complex system overhaul or a simple software upgrade, we make sure we know what success looks like
      for you.
    </p>
  </div>
</div>

{/* Step 2 */}
<div className="grid md:grid-cols-2 items-center gap-12 max-w-[1300px] mx-auto px-6 py-16">
  {/* Image on right side */}
  <div className="md:order-2 flex justify-center">
    <Image
      src="/illustration - 2.png"
      alt="Strategic Planning"
      className="w-[472px] h-[480px] object-contain"
    />
  </div>

  {/* Text on left side */}
  <div className="md:order-1">
    <h3 className="text-[40px] leading-[44px] font-bold font-archivo text-[#212121] mb-4 max-w-[350px]">
      Strategic Planning
    </h3>
    <p className="text-[24px] leading-[38px] font-light font-karla text-[#212121]">
      With every solution we envision, growth is part of the equation. From tactical roadmapping through to measurable
      performance indicators, we build solutions around long-term business outcomes — not just features.
    </p>
  </div>
</div>



        {/* Step 3 */}

    <div className="max-w-[1300px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  {/* Image Section */}
  <div className="flex justify-center">
    <Image
      src="/illustration - 3.png"
      alt="Development & Design"
      className="w-[580px] h-[480px] object-contain"
    />
  </div>

  {/* Text Section */}
  <div>
    <h3 className="text-[40px] leading-[44px] font-bold font-archivo text-[#212121] mb-4 max-w-[522px]">
    Development & Design
    </h3>
    <p className="text-[24px] leading-[38px] font-light font-karla text-[#212121] max-w-[662px]">
       This is where experience meets execution. We craft intuitive user experiences and scalable technical solutions — all aligned with the vision, specs, and timeline.
              Your team stays looped in every step of the way.
    </p>
  </div>
</div>




        {/* Step 4 */}
<div className="grid md:grid-cols-2 items-center gap-12 max-w-[1300px] mx-auto px-6 py-16">
  {/* Image on right side */}
  <div className="md:order-2 flex justify-center">
   <Image src="/character.png" alt="Seamless Execution" 
      className="w-[472px] h-[480px] object-contain"
    />
  </div>

  {/* Text on left side */}
  <div className="md:order-1">
    <h3 className="text-[40px] leading-[44px] font-bold font-archivo text-[#212121] mb-4 max-w-[350px]">
    Seamless Execution
    </h3>
    <p className="text-[24px] leading-[38px] font-light font-karla text-[#212121]">
       On-time. On-budget. Fully tested. Our team focuses on minimizing friction and maximizing value.
              We deploy fast, iterate smart, and ensure launch excellence.
    </p>
  </div>
</div>





        {/* Step 5 */}
    <div className="max-w-[1300px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  {/* Image Section */}
  <div className="flex justify-center">
 <Image src="/illustration - 5.png" alt="Ongoing Support"
      className="w-[580px] h-[480px] object-contain"
    />
  </div>

  {/* Text Section */}
  <div>
    <h3 className="text-[40px] leading-[44px] font-bold font-archivo text-[#212121] mb-4 max-w-[522px]">
   Ongoing Support
    </h3>
    <p className="text-[24px] leading-[38px] font-light font-karla text-[#212121] max-w-[662px]">
          Our commitment doesn’t end at delivery. We provide proactive monitoring, performance improvements, and technical support to keep your solutions thriving post-launch.
    </p>
  </div>
</div>
      </section>


      <section className=" space-y-10 px-10 py-16 max-w-[1600px] mx-auto">
        {/* Mission */}
    <div className="bg-gradient-to-r from-[#e9f3f4] to-[#b2d0d3] rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
  {/* Heading */}
  <h2 className="font-archivo text-[64px] lg:text-[96px] leading-[70px] lg:leading-[104px] font-normal text-[#F69332]">
  <span className="text-black">Our</span><br />
  <span>Mission</span>
</h2>


  {/* Content */}
  <p className="font-karla text-[18px] md:text-[20px] lg:text-[24px] leading-[30px] md:leading-[34px] lg:leading-[38px] text-[#000000] text-justify max-w-[749px] font-light">
    Our mission at Ranav Technologies is to empower businesses with innovative and reliable IT solutions that drive
    growth and efficiency. We strive to deliver high-quality, customized services that meet the unique needs of our
    clients, leveraging the latest technologies and best practices to foster digital transformation and create value.
  </p>
</div>



        {/* Vision */}
        <div className="bg-gradient-to-r from-[#b2d0d3] to-[#e9f3f4] rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Content */}
      <p className="font-karla text-[18px] md:text-[20px] lg:text-[24px] leading-[30px] md:leading-[34px] lg:leading-[38px] text-[#000000] text-justify max-w-[749px] font-light">
    Our mission at Ranav Technologies is to empower businesses with innovative and reliable IT solutions that drive
    growth and efficiency. We strive to deliver high-quality, customized services that meet the unique needs of our
    clients, leveraging the latest technologies and best practices to foster digital transformation and create value.
  </p>
          {/* Heading */}
          <div className="order-1 md:order-2 text-right">
           
<h2 className="font-archivo text-[64px] lg:text-[96px] leading-[70px] lg:leading-[104px] font-normal text-[#F69332]">
  <span className="text-black">Our</span><br />
  <span>Vision</span>
</h2>

          </div>
        </div>
      </section>


    </main>
  )
}
