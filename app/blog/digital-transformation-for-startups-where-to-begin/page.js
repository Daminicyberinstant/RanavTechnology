"use client"
import Image from "next/image";

export default function Blog2() {
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
      backgroundImage: `url('/digital-transformation-feature1.jpg')`, // Replace with your image path
      backgroundBlendMode: 'overlay',
      backgroundColor: '#00000080',
    }}
  >
   
  </div>

  {/* Text Description */}

</section>


<section className="bg-white px-10 py-16 max-w-[1600px] mx-auto space-y-[80px] font-[Karla]">
  {/* Title */}
  <h1 className="font-[Archivo] font-semibold text-[48px] leading-[72px] tracking-[-0.02em] text-black">
    Digital Transformation for Startups: Where to Begin?
  </h1>

  {/* Introduction */}
 <p className="text-[24px] leading-[42px] text-[#212121]">
  In today&apos;s fast-evolving digital landscape, startups must embrace technology to remain competitive and scale efficiently. Digital transformation is not just a trend but a necessity for new businesses looking to streamline operations, enhance customer experiences, and optimize productivity. However, for startups with limited resources and technical expertise, knowing where to begin can be overwhelming. This guide will walk you through the essential steps to kickstart your digital transformation journey.
</p>


  {/* Section: Understanding Digital Transformation */}
  <div className="space-y-6">
    <h2 className="text-2xl text-black font-semibold">
      Understanding Digital Transformation
    </h2>
    <p className="text-[18px] text-[#212121] leading-[32px]">
      Digital transformation refers to the integration of digital technologies into all aspects of a business, fundamentally changing how it operates and delivers value to customers. It involves leveraging tools like cloud computing, artificial intelligence, automation, and data analytics to improve efficiency and innovation.
    </p>
    <Image
      src="/digital-transformation-feature2.jpg"
      alt="Software solutions illustration"
      className="w-full h-auto max-h-[500px] object-cover rounded-[40px] shadow"
    />
  </div>

  {/* Step 1 */}
  <div className="space-y-4">
    <h2 className="text-2xl text-black font-semibold">
      Step 1: Define Your Business Goals
    </h2>
    <p className="text-[18px] text-[#212121] leading-[32px]">
      Before investing in technology, startups must outline their business objectives. Defining clear goals will help in selecting the right tools and strategies for a smoother transformation process.
    </p>
    <p className="text-[18px] text-[#212121] leading-[32px]">
      <strong>Ask yourself:</strong><br />
      • What challenges are we trying to solve?<br />
      • How can technology improve our workflow?<br />
      • What areas of our business need immediate digital intervention?
    </p>
  </div>

  {/* Step 2 */}
  <div className="space-y-4">
    <h2 className="text-2xl text-black font-semibold">
      Step 2: Adopt Cloud Computing
    </h2>
    <p className="text-[18px] text-[#212121] leading-[32px]">
      Cloud computing is the foundation of digital transformation. It allows startups to store data securely, access software remotely, and scale operations without heavy infrastructure investments. Platforms like AWS, Google Cloud, and Microsoft Azure provide cost-effective solutions to manage digital operations efficiently.
    </p>
  </div>

  {/* Step 3 */}
  <div className="space-y-4">
    <h2 className="text-2xl text-black font-semibold">
      Step 3: Leverage Automation and AI
    </h2>
    <p className="text-[18px] text-[#212121] leading-[32px]">
      Automation helps in reducing manual tasks and improving productivity. AI-powered tools can enhance customer interactions, personalize marketing campaigns, and optimize decision-making. Chatbots, automated invoicing, and AI-driven analytics are great starting points for startups.
    </p>
  </div>

  {/* Step 4 */}
  <div className="space-y-4">
    <h2 className="text-2xl text-black font-semibold">
      Step 4: Focus on Data-Driven Decision Making
    </h2>
    <p className="text-[18px] text-[#212121] leading-[32px]">
      Data is the key to making informed business decisions. By implementing analytics tools such as Google Analytics, Power BI, or Tableau, startups can gain insights into customer behavior, market trends, and operational performance, helping them make strategic decisions.
    </p>
  </div>

  {/* Step 5 */}
  <div className="space-y-4">
    <h2 className="text-2xl text-black font-semibold">
      Step 5: Strengthen Cybersecurity
    </h2>
    <p className="text-[18px] text-[#212121] leading-[32px]">
      With increased reliance on digital tools comes the risk of cyber threats. Startups must invest in robust cybersecurity measures, including data encryption, multi-factor authentication, and regular security audits, to safeguard sensitive business and customer information.
    </p>
  </div>

  {/* Step 6 */}
  <div className="space-y-4">
    <h2 className="text-2xl text-black font-semibold">
      Step 6: Build a Digital Culture
    </h2>
    <p className="text-[18px] text-[#212121] leading-[32px]">
      Digital transformation is not just about technology; it is about mindset. Encouraging employees to embrace digital tools, upskilling teams, and fostering a culture of innovation will ensure long-term success.
    </p>
  </div>

  {/* Step 7 */}
  <div className="space-y-4">
    <h2 className="text-2xl text-black font-semibold">
      Step 7: Scale with Digital Marketing
    </h2>
    <p className="text-[18px] text-[#212121] leading-[32px]">
      An effective digital presence is crucial for startup growth. Utilizing SEO, social media marketing, and email campaigns can help startups reach their target audience, improve brand visibility, and drive conversions.
    </p>

    <Image
      src="/digital-transformation-feature3.webp"
      alt="Digital marketing growth"
      className="w-full h-auto max-h-[500px] object-cover rounded-[40px] shadow"
    />
  </div>
</section>

    </main>
  );
}
