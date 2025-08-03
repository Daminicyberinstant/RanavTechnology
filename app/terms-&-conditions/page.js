import React from "react";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <main className="bg-white font-[Karla]">
      {/* Hero Section */}
      <section className="px-10 py-16 max-w-[1600px] mx-auto">
        <div
          className="relative h-[60vh] md:h-[70vh] w-full rounded-[40px] bg-cover bg-center flex items-center justify-center text-white"
          style={{
            backgroundImage: `url('/Group 163-3.png')`,
            backgroundBlendMode: "overlay",
            backgroundColor: "#00000080",
          }}
        >
          <div className="max-w-[1586px] px-4 text-center">
            <h1 className="font-[Archivo] font-semibold text-[48px] md:text-[60px] lg:text-[70px] leading-[88px] tracking-[-0.02em]">
              Terms & Conditions
            </h1>
            
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-10 py-16 max-w-[1600px] mx-auto space-y-[60px] text-[#212121] text-[18px] leading-[32px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="font-[Archivo] text-3xl font-bold">
            Terms and Conditions
          </h2>
          <h3 className="text-base font-medium text-gray-600">
            Effective Date: 05-Mar-2025
          </h3>
        </div>

        <div className="space-y-6">
          <p>
            Welcome to <b>Ranav Technologies</b>. By accessing or using our website and services, you agree to comply with and be bound by the following Terms & Conditions. Please read these terms carefully before using our website or services.
          </p>

          <h4 className="text-2xl font-semibold">Acceptance of Terms</h4>
          <p>
            By accessing or using the website and services of <b>Ranav Technologies</b>, you agree to abide by these Terms & Conditions and any applicable laws or regulations. If you do not agree to these terms, please refrain from using our website and services.
          </p>

          <h4 className="text-2xl font-semibold">Our Services</h4>
          <p>
            <b>Ranav Technologies</b> provides a wide range of digital services, including but not limited to UX/UI design, mobile app development, software development, website development, and digital strategy. Specific terms for each service may be provided in individual contracts and agreements.
          </p>

          <h4 className="text-2xl font-semibold">User Responsibilities</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Account Information:</strong> You are responsible for maintaining the confidentiality of your account credentials provided by us.
            </li>
            <li>
              <strong>Content Submission:</strong> You are solely responsible for any content you submit or share. You confirm you own the rights to such content and that it does not violate any laws or third-party rights.
            </li>
          </ul>

          <h4 className="text-2xl font-semibold">Intellectual Property Rights</h4>
          <p>
            All content, designs, and intellectual property related to <b>Ranav Technologies</b> (including logos, trademarks, and service marks) are owned by us or our licensors. You may not use, reproduce, or distribute our materials without prior written permission.
          </p>

          <h4 className="text-2xl font-semibold">Payment Terms</h4>
          <p>
            Payment terms will be defined in individual service agreements. Timely payment is required to avoid service suspension or delay.
          </p>

          <h4 className="text-2xl font-semibold">Confidentiality</h4>
          <p>
            Both parties agree to keep all sensitive or proprietary information confidential, unless disclosure is legally required or necessary to fulfill service delivery.
          </p>

          <h4 className="text-2xl font-semibold">Limitation of Liability</h4>
          <p>
            <b>Ranav Technologies</b> shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of our services. While we aim for quality delivery, no specific results are guaranteed.
          </p>

          <h4 className="text-2xl font-semibold">Termination of Services</h4>
          <p>
            We reserve the right to suspend or terminate services if you breach these Terms or engage in unlawful activity. No refunds will be provided for terminated contracts.
          </p>

          <h4 className="text-2xl font-semibold">Changes to Terms & Conditions</h4>
          <p>
            We may update these terms periodically. Changes will be reflected on this page along with an updated effective date.
          </p>

          <h4 className="text-2xl font-semibold">Governing Law</h4>
          <p>
            These Terms shall be governed by the laws of Madhya Pradesh, India. Any disputes will be resolved in courts located in Indore.
          </p>

          <h4 className="text-2xl font-semibold">Contact Us</h4>
          <ul className="space-y-2">
            <li>
              📧 Email:{" "}
              <Link href="mailto:support@ranavtechnologies.com" className="text-blue-600 underline">
                support@ranavtechnologies.com
              </Link>
            </li>
            <li>
              📞 Phone:{" "}
              <Link href="tel:+918770736130" className="text-blue-600 underline">
                +91 8770736130
              </Link>
            </li>
            <li>
              🌐 Website:{" "}
              <Link
                target="_blank"
                href="http://www.ranavtechnologies.com"
                className="text-blue-600 underline"
              >
                www.ranavtechnologies.com
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;
