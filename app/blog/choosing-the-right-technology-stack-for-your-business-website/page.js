"use client";
import Image from "next/image";
import BlogsSection from "@/components/BlogsSection";
export default function ChoosingTechStackPage() {
  return (
 <main className="min-h-screen bg-white">
        <section className="bg-white px-10 py-16 max-w-[1600px] mx-auto">

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
      backgroundImage: `url('/right-technology-stack-feature.jpg')`, // Replace with your image path
      backgroundBlendMode: 'overlay',
      backgroundColor: '#00000080',
    }}
  >
   
  </div>

  {/* Text Description */}

</section>


              <section className="bg-white px-10 py-16 max-w-[1600px] mx-auto space-y-[100px]">

  {/* Title */}
  <h1 className="font-[Archivo] font-semibold text-[52px] leading-[88px] tracking-[-0.02em] text-black">
    Choosing the Right Technology Stack for Your Business Website
  </h1>

  {/* Introduction Paragraph */}
  <p className="font-[Karla] text-[32px] leading-[50px] text-[#212121] -mt-[100px]">
    In the digital age, having a robust and scalable website is essential for businesses to succeed online. However, choosing the right technology stack can be a daunting task, especially with the vast array of frameworks, programming languages, and tools available. A well-chosen tech stack ensures optimal performance, security, and scalability, making it a crucial decision for any business.
  </p>

  {/* Feature Image */}
  <Image
    src="/right-technology-stack-feature.jpg"
    alt="Technology stack explained"
    className="w-full h-auto max-h-[500px] rounded-[40px] object-cover shadow"
  />

  {/* What is a Technology Stack */}
  <div className="space-y-8">
    <h2 className="font-[Archivo] font-semibold text-[52px] leading-[88px] tracking-[-0.02em] text-black">
      What is a Technology Stack?
    </h2>
    <p className="font-[Karla] text-[32px] leading-[50px] text-[#212121]">
      A technology stack refers to a combination of programming languages, frameworks, libraries, and tools used to develop and run a website or application. It consists of two main components:
    </p>
    <ul className="space-y-6">
      <li>
              
        <p className="font-[Karla] text-[32px] leading-[50px] text-[#212121]">Frontend (Client-side)</p>
 <p className="text-[24px] leading-[42px] text-[#212121]">
          This includes technologies that users interact with, such as HTML, CSS, JavaScript, and frontend frameworks like React, Angular, or Vue.js.
        </p>
      </li>
      <li>
        <p className="font-[Karla] text-[32px] leading-[50px] text-[#212121]">Backend (Server-side)</p>
    <p className="text-[24px] leading-[42px] text-[#212121]">
          This comprises server-side programming languages, databases, and frameworks that handle business logic, data storage, and server requests. Popular choices include Node.js, Django, Laravel, and databases like MySQL, PostgreSQL, or MongoDB.
        </p>
      </li>
    </ul>
  </div>

  {/* Supporting Image */}
  <Image
    src="/right-technology-stack-feature1.jpg"
    alt="Software solutions illustration"
    className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow"
  />

  {/* Factors to Consider */}
  <div className="space-y-8">
    <h2 className="font-[Archivo] font-semibold text-[52px] leading-[88px] tracking-[-0.02em] text-black">
      Factors to Consider When Choosing a Technology Stack
    </h2>
       
    <ul className="space-y-6">
      <li>
        <p className="font-[Karla] text-[32px] leading-[50px] text-[#212121]">Business Requirements and Objectives</p>
         <p className="text-[24px] leading-[42px] text-[#212121]">
          The nature of your business and website functionality determines the best technology stack. E-commerce sites require secure payment gateways and real-time inventory tracking, whereas a SaaS platform may prioritize API integrations and scalability.
        </p>
      </li>
      <li>
     <p className="font-[Karla] text-[32px] leading-[50px] text-[#212121]">Scalability and Performance</p>
    <p className="text-[24px] leading-[42px] text-[#212121]">
          If your website is expected to handle high traffic, choosing a scalable stack is crucial. Technologies like Node.js and Django are excellent for handling high loads efficiently. Similarly, cloud-based solutions like AWS and Firebase offer scalability as your business grows.
        </p>
      </li>
      <li>
       <p className="font-[Karla] text-[32px] leading-[50px] text-[#212121]">Security</p>
         <p className="text-[24px] leading-[42px] text-[#212121]">
          Cybersecurity is a top priority for any website. Using secure frameworks and implementing best security practices, such as SSL encryption and secure authentication methods, helps protect user data from cyber threats.
        </p>
      </li>
      <li>
        <p className="font-[Karla] text-[32px] leading-[50px] text-[#212121]">Development Speed and Cost</p>
         <p className="text-[24px] leading-[42px] text-[#212121]">
          Some technologies allow for faster development with pre-built components, such as Laravel for PHP or Ruby on Rails. Open-source technologies can help reduce costs, while cloud hosting solutions can offer cost-effective scalability options.
        </p>
      </li>
      <li>
   <p className="font-[Karla] text-[32px] leading-[50px] text-[#212121]">Integration with Other Tools</p>
        <p className="text-[24px] leading-[42px] text-[#212121]">
          Your website may require third-party integrations such as payment gateways, analytics tools, and CRM systems. Choosing a tech stack that supports seamless integration with these tools can streamline operations and enhance functionality.
        </p>
      </li>
    </ul>
  </div>

  {/* Image */}
  <Image
    src="/right-technology-stack-feature2.jpg"
    alt="Software solutions illustration"
    className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow"
  />

  {/* Popular Stacks */}
  <div className="space-y-8">
   <h2 className="font-[Archivo] font-semibold text-[52px] leading-[88px] tracking-[-0.02em] text-black">
      Popular Technology Stacks for Business Websites
    </h2>
    <ul className="space-y-6">
      <li>
          <p className="font-[Karla] text-[32px] leading-[50px] text-[#212121]">MERN Stack</p>
 <p className="text-[24px] leading-[42px] text-[#212121]">
          (MongoDB, Express.js, React, Node.js): Ideal for dynamic, interactive web applications.
        </p>
      </li>
      <li>
         <p className="font-[Karla] text-[32px] leading-[50px] text-[#212121]">MEAN Stack</p>
      <p className="text-[24px] leading-[42px] text-[#212121]">
          (MongoDB, Express.js, Angular, Node.js): Great for scalable, enterprise-level applications.
        </p>
      </li>
      <li>
   <p className="font-[Karla] text-[32px] leading-[50px] text-[#212121]">LAMP Stack</p>
       <p className="text-[24px] leading-[42px] text-[#212121]">
          (Linux, Apache, MySQL, PHP): A traditional stack known for its stability and security.
        </p>
      </li>
      <li>
      <p className="font-[Karla] text-[32px] leading-[50px] text-[#212121]">Django + PostgreSQL</p>
        <p className="text-[24px] leading-[42px] text-[#212121]">
          Best for high-security applications and data-driven platforms.
        </p>
      </li>
      <li>
   <p className="font-[Karla] text-[32px] leading-[50px] text-[#212121]">Flutter for Web</p>
         <p className="text-[24px] leading-[42px] text-[#212121]">
          A rising technology for building high-performance web applications with a single codebase.
        </p>
      </li>
    </ul>
  </div>

  {/* Final Image */}
  <Image
    src="/right-technology-stack-feature3.webp"
    alt="Software solutions illustration"
    className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow"
  />

</section>
<section >
        <BlogsSection />
      </section>

</main>
  );
}
