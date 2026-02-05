"use client";

import Image from 'next/image'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

export default function HomeHeader() {
    const [showFirst, setShowFirst] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirst(prev => !prev);
        }, 4000); // Switch every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-white relative overflow-hidden'>
            <div className='max-w-300 mx-auto bg-transparent py-18 relative z-10'>
                <div className='flex items-center gap-8'>
                    <div className='flex items-center justify-between gap-6 max-w-117'>
                        <div className='flex flex-col w-full'>
                            <p className="text-[68px] leading-[1.2] font-bold pb-6 whitespace-pre-line text-left text-[#0b3558]">
                                Easy scheduling ahead
                            </p>
                            <p className="pb-6 text-left text-[#476788] text-[1.25rem] leading-[1.4] font-normal">
                                Join 20 million professionals who easily book meetings with the #1 scheduling tool.
                            </p>
                            <div className="flex flex-col justify-start w-full max-w-fit pt-4">
                                <div className='flex flex-col justify-start gap-4 w-full'>
                                    <button className="inline-flex flex-row items-center justify-center gap-2 cursor-pointer transition-all duration-200 text-white border border-[#006BFF] bg-[#006BFF] px-4.5 py-2.5 text-[18px] leading-[1.6] relative h-fit opacity-100 rounded-lg text-center font-semibold">
                                        <span className='inline-flex items-center gap-4 w-full'>
                                            <Image
                                                src="/images/google.png"
                                                width={1000}
                                                height={1000}
                                                alt="logo"
                                                className="w-full h-auto max-w-10 bg-white p-2"
                                            />
                                            <span>Sign up with Google</span>
                                        </span>
                                    </button>
                                    <button className="inline-flex flex-row items-center justify-center gap-2 cursor-pointer transition-all duration-200 text-white border border-[#0b3558] bg-[#0b3558] px-4.5 py-2.5 text-[18px] leading-[1.6] relative h-fit opacity-100 rounded-lg text-center font-semibold">
                                        <span className='inline-flex items-center gap-4 w-full'>
                                            <Image
                                                src="/images/microsoft.png"
                                                width={1000}
                                                height={1000}
                                                alt="logo"
                                                className="w-full h-auto max-w-10 bg-white p-2"
                                            />
                                            <span>Sign up with Microsoft</span>
                                        </span>
                                    </button>
                                </div>
                                <div className="flex items-center w-full pt-4 pb-2">
                                    <div className="flex-1 h-px bg-gray-300"></div>
                                    <p className="px-4 text-[0.875rem] font-medium leading-[1.4] text-[#476788]">
                                        or
                                    </p>
                                    <div className="flex-1 h-px bg-gray-300"></div>
                                </div>

                                <div className="flex justify-start gap-2 w-full">
                                    <Link href="/" className="text-left text-[#006BFF] text-[0.875rem] leading-[1.4] font-semibold underline">
                                        Sign up free with email.
                                    </Link>
                                    <span className="text-[#0B3558] text-[0.875rem] leading-[1.4] font-medium">
                                        No credit card required
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex relative justify-between w-full">
                        <div className="relative w-full h-120">
                            {/* First Image */}
                            <div
                                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform-gpu ${showFirst
                                    ? "opacity-100 scale-100 translate-y-0 z-20 top-0"
                                    : "opacity-90 scale-90 -translate-y-4 z-10 -top-8"
                                    }`}
                            >
                                <Image
                                    src="/images/header1.png"
                                    alt="header image 1"
                                    fill
                                    className="object-cover rounded-3xl border-2 border-[#0b3558]"
                                />
                            </div>

                            {/* Second Image */}
                            <div
                                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform-gpu ${showFirst
                                    ? "opacity-90 scale-90 -translate-y-4 z-10 -top-8"
                                    : "opacity-100 scale-100 translate-y-0 z-20 top-0"
                                    }`}
                            >
                                <Image
                                    src="/images/header2.png"
                                    alt="header image 2"
                                    fill
                                    className="object-cover rounded-3xl border-2 border-[#0b3558]"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Right-side animated shapes */}
            <div className="absolute right-0 top-0 w-full h-full pointer-events-none z-0">
                {/* Triangle */}
                <div className="absolute left-150 top-0 w-150 h-150 bg-[#e55cff] clip-triangle animate-triangle rounded-2xl"></div>

                {/* Two connected circles */}
                <div className="absolute left-250 bottom-100 w-32 h-16 animate-circles">
                    <div className="absolute w-120 h-120 bg-[#0099ff] rounded-full right-0 top-0 opacity-80"></div>
                    <div className="absolute w-120 h-120 bg-[#0099ff] rounded-full left-0 top-0 opacity-80"></div>
                </div>
            </div>
        </div>
    )
}