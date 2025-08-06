'use client';
import React, { useState } from 'react';
import JobApplicationForm from '@/components/JobApplicationForm';
import ApplicationModal from '@/components/ApplicationModal';
import carrerImage from '../../public/career-hero-bg.jpg';
import vectorResearch from "../../public/vector-research.png";
import Image from "next/image";

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    jobDes:
      "We are seeking a skilled Frontend Developer with expertise in React and Tailwind CSS. You will be responsible for designing and developing interactive user interfaces, ensuring a seamless user experience, and optimizing web applications for performance and responsiveness. Join our team and work on exciting projects that shape the future of web development.",
    noOfApplied: "15",
    experience: "2+",
    location: "Remote",
    jobType: "Full-time",
    industry: "Tech",
    skills: "React, JavaScript, Tailwind CSS",
    postedAt: "2024-02-20",
    creator: "Tech Corp",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    jobDes:
      "We are looking for a creative UI/UX Designer to craft engaging and intuitive user experiences. Your role will involve wireframing, prototyping, and designing visually appealing interfaces that enhance user interaction. If you have an eye for design and a passion for improving digital products, we would love to have you on board.",
    noOfApplied: "21",
    experience: "3+",
    location: "Hybrid",
    jobType: "Part-time",
    industry: "Design",
    skills: "Figma, Adobe XD, Prototyping",
    postedAt: "2024-02-25",
    creator: "Design Studio",
  },
  {
    id: 3,
    title: "Backend Developer",
    jobDes:
      "Join our team as a Backend Developer and help build robust and scalable server-side applications. You will be responsible for developing APIs, optimizing database performance, and ensuring seamless integration with frontend applications. If you enjoy working with backend technologies and solving complex problems, this is the role for you.",
    noOfApplied: "10",
    experience: "4+",
    location: "Onsite",
    jobType: "Full-time",
    industry: "Software",
    skills: "Node.js, Express, MongoDB",
    postedAt: "2024-02-18",
    creator: "Startup X",
  },
  {
    id: 4,
    title: "Product Manager",
    jobDes:
      "We are seeking a strategic and detail-oriented Product Manager to lead and execute product roadmaps. You will work closely with cross-functional teams to define product vision, prioritize features, and ensure successful product launches. If you have strong analytical skills and a passion for delivering impactful solutions, apply now.",
    noOfApplied: "8",
    experience: "5+",
    location: "Remote",
    jobType: "Full-time",
    industry: "Business",
    skills: "Agile, Scrum, Leadership",
    postedAt: "2024-02-22",
    creator: "Business Solutions",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    jobDes:
      "We are looking for a skilled DevOps Engineer to streamline development workflows and manage cloud infrastructure. You will be responsible for setting up CI/CD pipelines, automating deployments, and ensuring system security. If you have expertise in cloud technologies and love optimizing development processes, we want to hear from you.",
    noOfApplied: "12",
    experience: "3+",
    location: "Remote",
    jobType: "Contract",
    industry: "Cloud Computing",
    skills: "AWS, Docker, Kubernetes",
    postedAt: "2024-02-28",
    creator: "CloudTech",
  },
  {
    id: 6,
    title: "Mobile App Developer",
    jobDes:
      "We are hiring an experienced Mobile App Developer proficient in React Native and Flutter. Your role will involve building high-performance mobile applications for iOS and Android platforms. If you enjoy creating user-friendly mobile experiences and working on innovative projects, this position is perfect for you.",
    noOfApplied: "18",
    experience: "2+",
    location: "Remote",
    jobType: "Full-time",
    industry: "Mobile Development",
    skills: "React Native, Flutter, Android/iOS",
    postedAt: "2024-02-26",
    creator: "App Ventures",
  },
  {
    id: 7,
    title: "Data Analyst",
    jobDes:
      "We are seeking a detail-oriented Data Analyst to extract insights from complex datasets. Your role will involve data visualization, trend analysis, and generating reports to drive business decisions. If you have strong analytical skills and a passion for working with data, apply today.",
    noOfApplied: "25",
    experience: "3+",
    location: "Hybrid",
    jobType: "Full-time",
    industry: "Analytics",
    skills: "SQL, Python, Power BI",
    postedAt: "2024-02-24",
    creator: "Analytics Firm",
  },
  {
    id: 8,
    title: "Marketing Specialist",
    jobDes:
      "We are looking for a dynamic Marketing Specialist to develop and execute digital marketing strategies. Your role will include managing social media campaigns, optimizing SEO, and running paid ads. If you are passionate about brand growth and digital marketing, this role is for you.",
    noOfApplied: "30",
    experience: "2+",
    location: "Onsite",
    jobType: "Full-time",
    industry: "Marketing",
    skills: "SEO, Google Ads, Social Media",
    postedAt: "2024-02-23",
    creator: "Brand Growth",
  },
  {
    id: 9,
    title: "Cybersecurity Analyst",
    jobDes:
      "We are hiring a Cybersecurity Analyst to ensure the security of our systems and networks. Your role will include conducting security assessments, identifying vulnerabilities, and implementing protective measures. If you are passionate about cybersecurity and data protection, apply now.",
    noOfApplied: "14",
    experience: "3+",
    location: "Remote",
    jobType: "Contract",
    industry: "Cybersecurity",
    skills: "Penetration Testing, Network Security",
    postedAt: "2024-02-27",
    creator: "SecureTech",
  },
  {
    id: 10,
    title: "AI/ML Engineer",
    jobDes:
      "Join our AI team as a Machine Learning Engineer and work on cutting-edge AI solutions. You will develop machine learning models, analyze large datasets, and build intelligent applications. If you are passionate about AI and innovation, we would love to have you.",
    noOfApplied: "9",
    experience: "4+",
    location: "Hybrid",
    jobType: "Full-time",
    industry: "Artificial Intelligence",
    skills: "Python, TensorFlow, Deep Learning",
    postedAt: "2024-02-21",
    creator: "AI Innovations",
  },
  {
    id: 11,
    title: "Blockchain Developer",
    jobDes:
      "We are looking for a Blockchain Developer to develop and maintain smart contracts and decentralized applications. If you have experience with Ethereum, Solidity, and Web3.js, join our team and work on the future of blockchain technology.",
    noOfApplied: "10",
    experience: "3+",
    location: "Remote",
    jobType: "Full-time",
    industry: "Blockchain",
    skills: "Solidity, Ethereum, Web3.js",
    postedAt: "2024-02-28",
    creator: "Crypto Solutions",
  },
  {
    id: 12,
    title: "Technical Support Engineer",
    jobDes:
      "Hiring a Technical Support Engineer to assist customers with troubleshooting and technical queries. If you enjoy problem-solving and have excellent communication skills, this role is a great fit for you.",
    noOfApplied: "22",
    experience: "2+",
    location: "Onsite",
    jobType: "Full-time",
    industry: "IT Support",
    skills: "Troubleshooting, Customer Service, Linux",
    postedAt: "2024-02-22",
    creator: "Tech Assist",
  }
];



export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);



  const [search, setSearch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedRecent, setSelectedRecent] = useState("all");

  const industries = ["all", "business", "tech", "design", "marketing"];
  const recentOptions = ["all", "7 days", "15 days", "30 days"];

  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesIndustry =
      selectedIndustry === "all" ||
      job.industry.toLowerCase() === selectedIndustry;

    const matchesRecent =
      selectedRecent === "all" ||
      (selectedRecent === "7 days" &&
        new Date(job.postedAt) >=
        new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) ||
      (selectedRecent === "15 days" &&
        new Date(job.postedAt) >=
        new Date(Date.now() - 15 * 24 * 60 * 60 * 1000)) ||
      (selectedRecent === "30 days" &&
        new Date(job.postedAt) >=
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));

    return matchesSearch && matchesIndustry && matchesRecent;
  });




  return (
    <main className=" w-full">
      {/* Hero section */}
      <section className="bg-white lg:px-10 px-4 lg:py-16 py-8 max-w-[1600px] mx-auto">
        {/* Hero Image with Overlay Text */}
        <div
          className="relative h-[60vh] md:h-[70vh] w-full rounded-4xl bg-cover bg-center flex items-center justify-center text-center text-white"
          style={{
            backgroundImage: `url(${carrerImage.src})`, // Replace with your image path
            backgroundBlendMode: 'overlay',
            backgroundColor: '#00000080',
          }}
        >
          <div className="w-full max-w-[1586px] px-4 mx-auto text-center">
            <h2 className="font-archivo font-semibold text-[32px] md:text-[50px] lg:text-[70.18px] leading-[88px] tracking-[-0.02em] text-white">
              Careers & Jobs
            </h2>
            <p className="font-inter font-normal text-[16px] md:text-[20px] lg:text-[20px] mt-10 leading-[30px] text-white max-w-[1126px] mx-auto">
              At Ranav Technologies, we’re shaping the future of technology. Join a team that values innovation, collaboration, and impact. Grow with us and make a real difference in the tech world.
            </p>
          </div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="bg-whitelg:px-10 px-4 lg:py-16 py-8 max-w-[1690px] mx-auto">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div className="relative w-[297.4px] h-[45.31px] flex flex-col justify-center gap-[5.58px]">
              <Image
                src={vectorResearch}
                alt="search icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              />
              <input
                type="search"
                placeholder="Search Jobs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-full pl-10 pr-4 border rounded-[40px] text-sm focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <label className="text-[#212121] text-[18.59px] leading-[20px] font-archivo font-normal">
                Industry:
              </label>
              <div className="relative">
                <select
                  className="w-[153px] h-[30px] text-[#212121] text-[18.59px] leading-[20px] font-archivo font-normal border border-gray-300 rounded appearance-none pl-3 pr-6"
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry.charAt(0).toUpperCase() + industry.slice(1)}
                    </option>
                  ))}
                </select>
                <svg
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#212121"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              {/* <select
            className="px-4 py-2 border rounded"
            value={selectedRecent}
            onChange={(e) => setSelectedRecent(e.target.value)}
          >
            {recentOptions.map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select> */}
            </div>




          </div>
          <div className="grid grid-cols-1 text-black sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (

                <div
                  key={job.id}
                  className="w-full h-auto bg-[#F9F9F9] border border-[rgba(0,0,0,0.1)] rounded-[40px] flex flex-col justify-between px-4 sm:px-6 py-6 sm:py-8 box-border"
                >
                  {/* Top Section */}
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-[30px] leading-[39px] font-archivo font-semibold text-[#212121] w-[70%]">
                        {job.title}
                      </h2>
                      <div className="bg-[#B6D2D5] px-3 py-1 rounded text-xs text-[#212121] font-semibold leading-normal whitespace-nowrap">
                        {job.noOfApplied} Applied
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex justify-between text-sm font-archivo">
                        <p>
                          <span className="text-[#016E7C] font-semibold">Experience:</span>{" "}
                          <span className="text-black font-medium">{job.experience} years</span>
                        </p>
                        <p>
                          <span className="text-[#016E7C] font-semibold">Location:</span>{" "}
                          <span className="text-black font-medium">{job.location}</span>
                        </p>
                        <p>
                          <span className="text-[#016E7C] font-semibold">Type:</span>{" "}
                          <span className="text-black font-medium">{job.jobType}</span>
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4 mt-6">
                      <p className="text-base font-karla leading-7 text-black-dark mb-2">
                        {job.jobDes}
                      </p>
                      <p className="text-base mt-4 font-karla">
                        <span className="font-bold">Skills:</span> {job.skills}
                      </p>
                    </div>
                  </div>

                  <button
                    className="w-full h-[50px] flex items-center justify-center gap-2 bg-[#F69331] rounded-[59px] mt-4 hover:bg-[#e2821d] transition-colors"
                  >
                    <span className="text-white text-[24px] leading-[28px] font-karla font-normal text-center">
                      APPLY NOW
                    </span>
                  </button>


                </div>

              ))
            ) : (
              <p className="col-span-full text-center">No jobs found.</p>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ApplicationModal job={selectedJob} onClose={() => setSelectedJob(null)}>
        <JobApplicationForm jobTitle={selectedJob?.title} onClose={() => setSelectedJob(null)} />
      </ApplicationModal>

      {/* Additional sections */}
      {/* ... Your existing sections like Life at Ranav Technologies etc. */}
    </main>
  );
}
