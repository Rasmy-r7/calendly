"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import TrustedBySection from "./TrustedBySection";

export default function HomeHeader() {
    const [showFirst, setShowFirst] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirst(prev => !prev);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative overflow-hidden bg-white">
            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-10 py-16 sm:py-18">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-8">

                    {/* LEFT */}
                    <div className="w-full max-w-117">
                        <p className="text-[38px] sm:text-[50px] lg:text-[68px] leading-[1.2] font-bold pb-6 text-center lg:text-left text-[#0b3558]">
                            Just ask the Serani AI to remember
                        </p>

                        <p className="pb-6 text-[18px] sm:text-[20px] leading-[1.4] text-center lg:text-left text-[#476788]">
                            Your personal AI tracks tasks and reminds you until they’re done.
                        </p>

                        <div className="flex flex-col pt-4 max-w-fit mx-auto lg:mx-0">
                            <div className="flex flex-col gap-4">
                                <button className="inline-flex items-center justify-start gap-4 px-4.5 py-2.5 text-[16px] sm:text-[18px] font-semibold text-white bg-[#006BFF] border border-[#006BFF] rounded-lg transition-all">
                                    <Image
                                        src="/images/google-play.png"
                                        width={1000}
                                        height={1000}
                                        alt="logo"
                                        className="w-full h-auto max-w-10 bg-white p-1 rounded-md"
                                    />
                                    <span>Get it on Google Play</span>
                                    <span></span>
                                </button>

                                <button className="inline-flex items-center justify-start gap-4 px-4.5 py-2.5 text-[16px] sm:text-[18px] font-semibold text-white bg-[#0b3558] border border-[#0b3558] rounded-lg transition-all">
                                    <Image
                                        src="/images/app-store.png"
                                        width={1000}
                                        height={1000}
                                        alt="logo"
                                        className="w-full h-auto max-w-10 bg-white p-1 rounded-md"
                                    />
                                    <span>Download on the App Store</span>
                                </button>
                            </div>

                            <div className="flex items-center pt-4 pb-2">
                                <div className="flex-1 h-px bg-gray-300" />
                                <p className="px-4 text-sm font-medium text-[#476788]">or</p>
                                <div className="flex-1 h-px bg-gray-300" />
                            </div>

                            <div className="flex flex-wrap gap-2 text-sm">
                                <Link href="/" className="font-semibold text-[#006BFF] underline">
                                    Sign up free with email.
                                </Link>
                                <span className="text-[#0B3558] font-medium">
                                    No credit card required
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT (images) */}
                    <div className="relative w-full mt-14 lg:mt-20 min-h-65 sm:min-h-100 lg:min-h-115">
                        <div
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform-gpu ${showFirst
                                ? "opacity-100 scale-100 translate-y-0 z-20 top-0"
                                : "opacity-90 scale-90 -translate-y-4 z-10 -top-8"
                                }`}
                        >
                            <Image
                                src="/images/header1.png"
                                alt="header1"
                                width={1000}
                                height={1000}
                                className="w-full rounded-3xl border-2 border-[#0b3558]"
                            />
                        </div>

                        <div
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform-gpu ${showFirst
                                ? "opacity-90 scale-90 -translate-y-4 z-10 -top-8"
                                : "opacity-100 scale-100 translate-y-0 z-20 top-0"
                                }`}
                        >
                            <Image
                                src="/images/header2.png"
                                alt="header2"
                                width={1000}
                                height={1000}
                                className="w-full rounded-3xl border-2 border-[#0b3558]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* <TrustedBySection /> */}

            {/* Shapes */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
                <div className="absolute left-150 top-0 w-150 h-150 bg-[#e55cff] clip-triangle animate-triangle rounded-2xl" />

                <div className="absolute left-250 bottom-100 w-32 h-16 animate-circles">
                    <div className="absolute w-100 h-100 bg-[#0099ff] rounded-full opacity-80 right-0" />
                    <div className="absolute w-100 h-100 bg-[#0099ff] rounded-full opacity-80 left-0" />
                </div>
            </div>
        </div>
    );
}
