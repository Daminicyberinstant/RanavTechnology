"use client";
import BlogsSection from "@/components/BlogsSection";
import Image from "next/image";
export default function CustomSoftwareSolutionsPage() {
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
      backgroundImage: `url('/unlocking-business-feature.jpg')`, // Replace with your image path
      backgroundBlendMode: 'overlay',
      backgroundColor: '#00000080',
    }}
  >
   
  </div>
</section>



   <section className="bg-white px-10 py-16 max-w-[1600px] mx-auto space-y-[80px] font-[Karla]">
  {/* Title */}
  <h1 className="font-[Archivo] font-semibold text-[48px] leading-[72px] tracking-[-0.02em] text-black">
    The Need for Custom Software Solutions
  </h1>

  {/* Intro */}
  <p className="text-[24px] leading-[42px] text-[#212121] -mt-[30px]">
    While generic software may provide basic functionalities, it often fails to align with a company’s distinct goals and operational structure. Custom software solutions bridge this gap by offering enhanced efficiency, improved security, and better scalability. Tailored software automates repetitive tasks, reducing manual effort and increasing overall productivity. Unlike pre-packaged software, custom solutions seamlessly integrate with existing business systems, ensuring a smooth workflow without disruptions. Moreover, businesses that prioritize data security benefit from personalized software that includes advanced security protocols, safeguarding sensitive information from potential threats.
  </p>

  {/* Feature Image */}
<Image
    src="/right-technology-stack-feature.jpg"
    alt="Technology stack explained"
    className="w-full h-auto max-h-[500px] rounded-[40px] object-cover shadow"
  />

  {/* Section 2 */}
  <div className="space-y-6">
  <h2 className="font-[Archivo] font-semibold text-[52px] leading-[88px] tracking-[-0.02em] text-black">
      Key Benefits of Software Solutions for Businesses
    </h2>
    <p className="text-[24px] leading-[42px] text-[#212121]">
      One of the most significant advantages of custom software solutions is process automation. By automating routine tasks, businesses can minimize human errors, save time, and boost operational efficiency. Whether it is managing invoices, tracking inventory, or scheduling appointments, automation streamlines these processes and allows employees to focus on more strategic initiatives.
      <br /><br />
      Additionally, enhancing customer experience has become a priority for businesses aiming to build strong relationships with their clients. With AI-driven chatbots, CRM systems, and interactive mobile applications, companies can deliver a more personalized and seamless user experience.
      <br /><br />
      Data-driven decision-making is another crucial benefit of custom software solutions. Businesses today rely on analytics and reporting tools to make informed choices based on real-time data. Advanced software solutions offer valuable insights that help organizations identify trends, monitor performance, and optimize strategies for better outcomes.
      <br /><br />
      Moreover, while the initial investment in custom software development may seem substantial, it leads to long-term cost savings by reducing reliance on multiple third-party applications and minimizing operational inefficiencies.
    </p>

<Image
      src="/unlocking-business-feature1.jpg"
      alt="Software solutions illustration"
      className="w-full h-auto max-h-[500px] object-cover rounded-[40px] shadow"
    />
  </div>

  {/* Section 3 */}
  <div className="space-y-6">
   <h2 className="font-[Archivo] font-semibold text-[52px] leading-[88px] tracking-[-0.02em] text-black">
      Industries Benefiting from Custom Software Solutions
    </h2>
       <p className="text-[24px] leading-[42px] text-[#212121]">
      Custom software solutions cater to a wide range of industries, enhancing efficiency and productivity across various sectors.
      In the healthcare industry, digital solutions such as electronic health records, telemedicine platforms, and appointment scheduling software have revolutionized patient care and administrative processes.
      The finance sector benefits from automated accounting systems, fraud detection tools, and investment tracking software that ensure compliance and security in financial transactions.
      Retail and e-commerce businesses leverage customized software for inventory management, personalized marketing, and smooth checkout experiences, improving customer satisfaction and sales.
      The education sector has also seen significant advancements through e-learning platforms, student management systems, and virtual classrooms, making education more accessible and interactive for learners worldwide.
    </p>
  </div>

  {/* Section 4 */}
  <div className="space-y-6">
      <h2 className="font-[Archivo] font-semibold text-[52px] leading-[88px] tracking-[-0.02em] text-black">
      How to Choose the Right Software Development Partner
    </h2>
      <p className="text-[24px] leading-[42px] text-[#212121]">
      Selecting the right software development partner is essential for ensuring the success of a custom software solution.
      Businesses should prioritize companies with expertise in relevant technologies and a strong portfolio demonstrating their ability to deliver innovative solutions.
      A proven track record with positive client testimonials indicates reliability and competence. Transparent communication throughout the development process is equally important, as it ensures that project requirements are clearly understood and executed efficiently.
      Additionally, post-development support and maintenance services play a vital role in keeping the software up to date and secure, making it crucial to choose a development partner that offers ongoing assistance.
    </p>
  </div>
</section>
<section >
        <BlogsSection />
      </section>
    </main>
  );
}
