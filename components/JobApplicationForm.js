"use client";


import React,{ useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function JobApplicationForm({ jobTitle, onClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [fit1, setFit1] = useState("");
  const [fit2, setFit2] = useState("");
  const [cv, setCv] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);
  const [skills, setSkills] = useState("");
  const [currentCTC, setCurrentCTC] = useState("");
  const [expectedCTC, setExpectedCTC] = useState("");
  const [references, setReferences] = useState(["", "", ""]);

    const handleReferenceChange = (index, value) => {
    const newRefs = [...references];
    newRefs[index] = value;
    setReferences(newRefs);
  };

  const ContactForm = ({ requestQuote }) => {
  const [status, setStatus] = useState("");
   const [openIndex, setOpenIndex] = useState(null);

 const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      contact: "",
      linkedin: "",
      portfolio: "",
      fit1: "",
      fit2: "",
      cv: "",
      coverLetter: "",
      skills: "",
      currentCTC: "",
      expectedCTC: "",
      references: ["", "", ""], // Make this an array
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setStatus("Sending...");

      try {
        const response = await axios.post("/api/sendEmail", values);

        if (response.data.success) {
          setStatus("Email sent successfully!");
          resetForm();
        } else {
          setStatus("Failed to send email.");
        }
      } catch (error) {
        console.error(error);
        setStatus("An error occurred while sending the email.");
      }
    },
  });

   
  

}
  return (
    <div className="min-h-screen bg-white px-4 py-10 flex justify-center">
      <div className="w-full max-w-5xl max-h-screen  overflow-auto rounded-lg shadow-lg p-6 hide-scrollbar">
        {/* Header Meta Info */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
          <div>
            <span className="text-black font-medium">Experience:</span>{' '}
            <span className="text-sky-600 font-semibold">3+ years</span>
          </div>
          <div>
            <span className="text-black font-medium">Location:</span>{' '}
            <span className="text-sky-600 font-semibold">Remote</span>
          </div>
          <div>
            <span className="text-black font-medium">Type:</span>{' '}
            <span className="text-sky-600 font-semibold">Full-time</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-black mb-8"> Apply for {jobTitle || 'Job'}</h1>

        {/* Scrollable Form Container */}
        <div className="max-h-[75vh] pr-2">
          <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* Personal Details */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1 break-words">
                *First name
              </label>
              <input
                type="text"
                  placeholder="Enter your first name"
                 autoComplete="given-name"
          minLength={2}
          required
           onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
                className="w-full min-w-0 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
           
              />
              {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-500 text-xs">
              {formik.errors.firstName}
            </div>
            
          )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1 break-words">
                *Last Name
              </label>
              <input
                type="text"
                  placeholder="Enter your last name"
          autoComplete="family-name"
          minLength={2}
          required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
                className="w-full min-w-0 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                
              />
                   {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-500 text-xs">{formik.errors.lastName}</div>
          )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1 break-words">
                *DOB in DD/MM/YYYY
              </label>
              <input
                type="text"
                className="w-full min-w-0 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                required  placeholder="DD/MM/YYYY"
          pattern="\d{2}/\d{2}/\d{4}"
          title="Enter in format DD/MM/YYYY"
          
         onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dob}
              />
                  {formik.touched.dob && formik.errors.dob && (
            <div className="text-red-500 text-xs">{formik.errors.dob}</div>
          )}
            </div>

            {/* Contact */}
            <div className="sm:col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-800 mb-1 break-words">
                *Email Address
              </label>
              <input
                type="email"
                className="w-full min-w-0 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
               placeholder="Enter your email"
          autoComplete="email"
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          title="Enter a valid email"
          required
         onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
              
              />
               {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-xs">{formik.errors.email}</div>
          )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1 break-words">
                *Contact number
              </label>
              <input
                type="tel"
                className="w-full min-w-0 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              
          placeholder="10-digit mobile number"
          pattern="[0-9]{10}"
          autoComplete="tel"
          title="Enter a 10-digit number"
          required
        onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contact}
              
              />
               {formik.touched.contact && formik.errors.contact && (
            <div className="text-red-500 text-xs">{formik.errors.contact}</div>
          )}
            </div>

            {/* Links */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1 break-words">
                *Your LinkedIn profile
              </label>
              <input
                type="url"
                 placeholder="https://linkedin.com/in/username"
          pattern="https?://(www\.)?linkedin\.com/.*"
          title="Enter a valid LinkedIn URL"
          autoComplete="url"
        onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.linkedin}
              
                className="w-full min-w-0 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
               {formik.touched.linkedin && formik.errors.linkedin && (
            <div className="text-red-500 text-xs">{formik.errors.linkedin}</div>
          )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1 break-words">
                *Your Portfolio/Website
              </label>
              <input
                type="url"
                  placeholder="https://yourportfolio.com"
          autoComplete="url"
         onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.portfolio}
              
                className="w-full min-w-0 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
               {formik.touched.portfolio && formik.errors.portfolio && (
            <div className="text-red-500 text-xs">{formik.errors.portfolio}</div>
          )}
            </div>

            {/* Fit answers */}
            <div className="sm:col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-gray-800 mb-1 break-words">
                *What makes you perfect fit for the role (Under 50 words)
              </label>
              <textarea
                rows={4}
                 placeholder="Write your response here..."
          maxLength={300}
         onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fit1}
              
                className="w-full min-w-0 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
               {formik.touched.fit1 && formik.errors.fit1 && (
            <div className="text-red-500 text-xs">{formik.errors.fit1}</div>
          )}
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-gray-800 mb-1 break-words">
                *What makes you perfect fit for the role (Under 50 words)
              </label>
              <textarea
                rows={4}
                 placeholder="Write your response here..."
          maxLength={300}
         onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fit2}
              
                className="w-full min-w-0 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
               {formik.touched.fit2 && formik.errors.fit2 && (
            <div className="text-red-500 text-xs">{formik.errors.fit2}</div>
          )}
            </div>

            {/* File uploads */}
            <div>
             
              <div className=" flex flex-col items-center border-2 border-sky-300 bg-sky-100 rounded-md p-6 text-center cursor-pointer">
                <img width={30} height={30} src="/vector-1.png" alt="bg-cv" />
                <input type="file" 
                 accept=".pdf,.doc,.docx"
          onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cv}
              
           
                className="w-full cursor-pointer" />
                 {formik.touched.cv && formik.errors.cv && (
            <div className="text-red-500 text-xs">{formik.errors.cv}</div>
          )}
                <p className="block text-sm font-medium text-gray-800 mb-1 break-words">Upload your CV/RESUME</p>
              </div>
            </div>
            <div>
            
              <div className=" flex flex-col items-center border-2  border-orange-300 bg-orange-200 rounded-md p-6 text-center cursor-pointer">
                <img width={30} height={30} src="/vector-2.png" alt="bg-cv" />
                <input type="file"
                accept=".pdf,.doc,.docx"
         onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.coverLetter}
              
                 className="w-full cursor-pointer" />
                  {formik.touched.coverLetter && formik.errors.coverLetter && (
            <div className="text-red-500 text-xs">{formik.errors.coverLetter}</div>
                  )}
                <p className="block text-sm font-medium text-gray-800 mb-1 break-words">  Upload your COVER LETTER</p>
              </div>
            </div>

            {/* Technical skills */}
            <div className="sm:col-span-2 md:col-span-3">
              <label className="block text-sm font-medium text-gray-800 mb-1 break-words">
                *Your Technical Skills
              </label>
              <textarea
                rows={4}
                 placeholder="Mention your tech stack, tools, etc."
          required
         
                 onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.skills}
                className="w-full min-w-0 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
               {formik.touched.skills && formik.errors.skills && (
            <div className="text-red-500 text-xs">{formik.errors.skills}</div>
          )}
            </div>

            {/* CTC */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1 break-words">
                *Current CTC
              </label>
              <input
                type="text"
                 placeholder="e.g., ₹5,00,000"
          required
                 onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.currentCTC}
                className="w-full min-w-0 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
               {formik.touched.currentCTC && formik.errors.currentCTC && (
            <div className="text-red-500 text-xs">{formik.errors.currentCTC}</div>
          )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1 break-words">
                *Expected CTC
              </label>
              <input
                type="text"
                placeholder="e.g., ₹7,00,000"
          required
                  onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.expectedCTC}
                className="w-full min-w-0 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
               {formik.touched.expectedCTC && formik.errors.expectedCTC && (
            <div className="text-red-500 text-xs">{formik.errors.expectedCTC}</div>
          )}
            </div>

            {/* References */}
           {references.map((ref, index) => (
  <div key={index}>
    <label className="block text-sm font-medium text-gray-800 mb-1 break-words">
      *Reference {index + 1}
    </label>
    <input
      type="text"
      placeholder={`Reference ${index + 1} name/contact`}
      required
               onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ref}
      className="w-full min-w-0 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
    />
     {formik.touched.ref && formik.errors.ref && (
            <div className="text-red-500 text-xs">{formik.errors.ref}</div>
          )}
  </div>
))}


            {/* Submit button */}
            <div className="sm:col-span-2 md:col-span-3 mt-4">
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full text-lg"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
