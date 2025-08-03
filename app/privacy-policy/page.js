import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="px-6 md:px-10 py-16 max-w-[1600px] mx-auto space-y-[60px] text-[#212121] text-[18px] leading-[32px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="font-[Archivo] text-3xl font-bold">
            Privacy Policy
          </h2>
          <h3 className="text-base font-medium text-gray-600">
            Effective Date: 05-Mar-2025
          </h3>
        </div>

        <div className="space-y-6">
          <p>
            At Ranav Technologies, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy Policy
            explains how we collect, use, and safeguard your data when you engage
            with our IT services, mobile app development, and website development
            solutions.
          </p>

          <h4 className="text-2xl font-semibold">Information We Collect</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Personal Information: Name, email, phone number, company details.</li>
            <li>Technical Data: IP address, browser type, usage data via cookies.</li>
            <li>Project Information: Any data/content shared for development purposes.</li>
          </ul>

          <h4 className="text-2xl font-semibold">How We Use Your Information</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Deliver and improve our services.</li>
            <li>Communicate updates and project-related information.</li>
            <li>Enhance website functionality and user experience.</li>
            <li>Process transactions and maintain records.</li>
            <li>Ensure security and meet legal obligations.</li>
          </ul>

          <h4 className="text-2xl font-semibold">Data Security & Protection</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Encryption of sensitive data.</li>
            <li>Restricted access to authorized personnel.</li>
            <li>Regular audits to ensure protection from threats.</li>
          </ul>

          <h4 className="text-2xl font-semibold">Information Sharing & Third Parties</h4>
          <p>We never sell your data. We may share it with:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Trusted service providers (hosting, analytics, payment processing).</li>
            <li>Legal authorities if required by law.</li>
          </ul>

          <h4 className="text-2xl font-semibold">Cookies & Tracking Technologies</h4>
          <p>
            We use cookies to enhance user experience. Disabling cookies may affect
            website functionality.
          </p>

          <h4 className="text-2xl font-semibold">Your Rights</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Request access, update, or deletion of your personal data.</li>
            <li>Opt-out of marketing communications.</li>
          </ul>
          <p>
            Contact us at{" "}
            <Link href="mailto:support@ranavtechnologies.com" className="text-blue-600 underline">
              support@ranavtechnologies.com
            </Link>{" "}
            to exercise your rights.
          </p>

          <h4 className="text-2xl font-semibold">Data Retention</h4>
          <p>
            We retain data only as long as needed for operations or legal compliance.
          </p>

          <h4 className="text-2xl font-semibold">Third-Party Links</h4>
          <p>
            Our website may link to external sites. We are not responsible for their
            privacy policies.
          </p>

          <h4 className="text-2xl font-semibold">Changes to This Policy</h4>
          <p>
            We may update this policy periodically. Revisions will be posted on this
            page with the effective date.
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

          <p>
            This Privacy Policy outlines how Ranav Technologies handles your data
            responsibly. If you have any concerns, feel free to reach out.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
