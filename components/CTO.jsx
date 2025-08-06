'use client';

import Image from 'next/image';
import { useFormik } from 'formik';

export default function ContactSection({ titleLines = [], description = '', formik }) {
  return (
    <section className="w-full relative overflow-hidden pt-16 mx-auto">
      <div className="lg:block md:hidden hidden w-[45%] h-[60px] z-30 absolute -left-10 bottom-[97px]">
        <Image
          src="/yellow line.png"
          alt="yellow-line"
          fill
          className="w-full h-full object-contain"
        />
      </div>

      <div className="bg-[#002138] lg:ml-10 !w-full rounded-4xl text-white py-12 px-4 sm:px-6 lg:px-12 flex flex-col items-center md:flex-row justify-center relative my-10">
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10">
          {/* LEFT TEXT CONTENT */}
          <div className="md:w-[40%] relative pr-0 md:pr-4 my-auto text-center md:text-left">
            <div className="text-white uppercase font-karla font-light text-[28px] sm:text-[36px] md:text-[44px] lg:text-[64px] leading-[1.1] space-y-2">
              {titleLines.map((line, index) => (
                <h1 key={index}>{line}</h1>
              ))}
            </div>
            <p className="mt-6 sm:mt-8 text-[13px] md:text-[20px] leading-[1.5] font-karla font-light text-white max-w-[453px] mx-auto md:mx-0">
              {description}
            </p>
          </div>

          {/* RIGHT FORM */}
          <form onSubmit={formik.handleSubmit} className="md:w-[60%] w-full bg-white text-black p-6 sm:p-8 rounded-3xl space-y-5 shadow-lg">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label className="text-sm font-semibold text-black block mb-1">*First name</label>
                <input
                  type="text"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className="w-full px-4 py-4 rounded-full border border-black text-sm"
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="text-red-500 text-xs">{formik.errors.firstName}</div>
                )}
              </div>

              <div className="w-full sm:w-1/2">
                <label className="text-sm font-semibold text-black block mb-1">*Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className="w-full px-4 py-4 rounded-full border border-black text-sm"
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <div className="text-red-500 text-xs">{formik.errors.lastName}</div>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-black block mb-1">*Email Address</label>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full px-4 py-4 rounded-full border border-black text-sm"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-xs">{formik.errors.email}</div>
              )}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your message here"
                rows={4}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="w-full min-h-[180px] px-4 py-2 rounded-3xl border border-black text-sm resize-none"
              />
              {formik.touched.message && formik.errors.message && (
                <div className="text-red-500 text-xs">{formik.errors.message}</div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#f7931e] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#e67e00] transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
