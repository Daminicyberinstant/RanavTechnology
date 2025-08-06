'use client';

import Image from 'next/image';
import { useFormik } from 'formik';
import Link from 'next/link'
import arrowRounded from "../public/arrow-rounded-yellow.png";
import arrowRoundedDown from "../public/arrow-rounded-yellow-down.png";
export default function ContactSection({ titleLines = [], description = '', formik }) {
    return (
        <section className="w-full relative overflow-hidden pt-16 mx-auto">


            <div className="bg-[#ffffff] lg:ml-10 !w-full rounded-4xl text-white py-12 px-4 sm:px-6 lg:px-12 flex flex-col items-center md:flex-row justify-center relative my-10">
                <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10">
                    {/* LEFT TEXT CONTENT */}
                    <div className="flex flex-col md:items-start justify-between py-10">
                        <div className="text-center md:text-left relative">
                            <h3 className="text-4xl md:text-6xl text-left font-archivo font-bold text-[#0D0D0D]">
                                We’d Love to <br className="block md:hidden" />Hear from You
                            </h3>
                            <div className="w-48 h-40 md:w-64 md:h-52 mx-auto hidden md:block">
                                <Image src={arrowRounded} alt="arrow right" className="mx-auto" />
                            </div>
                            <div className="block md:hidden absolute top-14 right-8">
                                <Image
                                    src={arrowRoundedDown}
                                    alt="arrow right"
                                    className="mx-auto"
                                />
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0  hidden md:block">
                            <Link
                                href="mailto:support@ranavtechnologies.com"
                                className="text-sm md:text-xl !text-black font-bold font-karla block text-center md:text-left"
                            >
                                support@ranavtechnologies.com
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <form onSubmit={formik.handleSubmit} className="md:w-[100%] w-full bg-gray-50 text-black p-6 sm:p-8 rounded-3xl space-y-5 ">
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
