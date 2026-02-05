"use client";

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ProductBar from './navList/ProductBar';
import SolutionsBar from './navList/SolutionsBar';
import ResourcesBar from './navList/ResourcesBar';

export default function Navbar() {

    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

    const lastScrollY = useRef(0);

    const desktopRef = useRef<HTMLDivElement>(null);
    const mobileRef = useRef<HTMLDivElement>(null);

    const toggleMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    const toggleMobileDropdown = (menu: string) => {
        setMobileDropdown(mobileDropdown === menu ? null : menu);
    };

    //  Close dropdowns and mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (
                desktopRef.current &&
                !desktopRef.current.contains(target) &&
                mobileRef.current &&
                !mobileRef.current.contains(target)
            ) {
                setOpenMenu(null);
                setMobileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Hide navbar when scrolling down, show when scrolling up
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setIsVisible(false); // hide navbar
            } else {
                setIsVisible(true); // show navbar
            }
            lastScrollY.current = currentScrollY; // persist scroll position
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='fixed top-0 left-0 w-full z-50 bg-white border-b border-white/20 shadow-md '>
            {/* Top Section */}
            <section className={` py-2 bg-[#f8f9fb] ${isVisible ? "translate-y-0" : "-translate-y-full"} transition-transform duration-500`}>
                <div className=' max-w-7xl mx-auto  px-5 sm:px-10'>
                    <div className=' flex items-center gap-6 justify-between  md:justify-end'>
                        <p>English</p>
                        <button>Talk to sales</button>
                    </div>
                </div>

            </section>

            {/* Navigation */}
            <nav className=' max-w-7xl mx-auto px-5 sm:px-10 bg-white' >
                <div className="flex items-center justify-between py-4 w-ful">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="/images/logo2.png"
                            width={1000}
                            height={1000}
                            alt="logo"
                            className="h-auto  w-30 sm:w-40  md:w-42"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div
                        ref={desktopRef}
                        className="hidden lg:flex flex-row items-center gap-4  xl:gap-8 text-textcol font-medium"
                    >
                        {/* Product Dropdown */}
                        <div className="relative group">
                            <button
                                className="flex items-center rounded-lg gap-2 hover:text-primary text-base leading-relaxed font-medium group-hover:bg-[#f0f3f8] text-[16px] py-1 px-2 bg-transparent transition-colors duration-300 ease-in-out"
                            >
                                Product
                                <MdKeyboardArrowDown className="text-[20px] transition-transform duration-300 group-hover:rotate-180 " />
                            </button>
                            <span className="absolute -bottom-4 left-0 w-0 h-0.5 bg-[#006BFF] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            {/* Dropdown Panel */}
                            <ProductBar />
                        </div>

                        {/* Solutions Dropdown */}
                        <div className="relative group">
                            <button
                                className="flex items-center rounded-lg gap-2 hover:text-primary text-base leading-relaxed font-medium group-hover:bg-[#f0f3f8] text-[16px] py-1 px-2 bg-transparent transition-colors duration-300 ease-in-out"
                            >
                                Solutions
                                <MdKeyboardArrowDown className="text-[20px] transition-transform duration-300 group-hover:rotate-180 " />
                            </button>
                            <span className="absolute -bottom-4 left-0 w-0 h-0.5 bg-[#006BFF] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            {/* Dropdown Panel */}
                            <SolutionsBar />

                        </div>

                        {/* Resources Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center rounded-lg gap-2 hover:text-primary text-base leading-relaxed font-medium group-hover:bg-[#f0f3f8] text-[16px] py-1 px-2 bg-transparent transition-colors duration-300 ease-in-out">
                                Resources
                                <MdKeyboardArrowDown className="text-[20px] transition-transform duration-300 group-hover:rotate-180 " />
                            </button>
                            <span className="absolute -bottom-4 left-0 w-0 h-0.5 bg-[#006BFF] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            {/* Dropdown Panel */}
                            <ResourcesBar />
                        </div>

                        {/* Pricing Link */}
                        <div className="relative group">
                            <Link href="/pricing" className=" font-medium rounded-lg hover:text-primary text-[16px] hover:bg-[#f0f3f8] py-1 px-2 bg-transparent transition-colors duration-300 ease-in-out">
                                Pricing
                            </Link>
                            <span className="absolute -bottom-4 left-0 w-0 h-0.5 bg-[#006BFF] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </div>
                    </div>

                    <div className=' flex items-center gap-6'>
                        <button className=' hidden md:block rounded-sm text-[18px] lg:text-[16px] py-2.5 px-4.5 bg-[#f8f9fb] lg:bg-white'>
                            Log in
                        </button>
                        <button
                            className="inline-flex items-center justify-center gap-2 cursor-pointer px-4 py-2.5 text-[12px]  sm:text-[16px] leading-[1.4] font-semibold text-white bg-[rgb(0,107,255)]  border border-[rgb(0,107,255)]  rounded-lg  transition-all duration-200 ease-linear relative   opacity-100 text-center hover:bg-[rgb(0,78,186)] hover:border-[rgb(0,78,186)]"
                        >
                            Get Started
                        </button>
                        <div className="block lg:hidden text-primary text-4xl">
                            <IoMenu onClick={() => setMobileOpen(prev => !prev)} />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                </div>

                {/* Mobile Menu */}
                <div
                    ref={mobileRef}
                    className={`lg:hidden fixed top-0 left-0 h-screen bg-white text-black shadow-lg z-50 border-r-2 border-primary transform transition-transform duration-500 overflow-y-auto ${mobileOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                    style={{ width: "300px" }}
                >
                    <div className="flex justify-end p-4">
                        <IoClose
                            className="text-3xl cursor-pointer"
                            onClick={() => setMobileOpen(false)}
                        />
                    </div>
                    <div className="flex flex-col items-start gap-2 px-6 py-4">
                        {/* Product Dropdown */}
                        <div className="w-full">
                            <button
                                onClick={() => toggleMobileDropdown('product')}
                                className="flex items-center justify-between w-full text-lg px-0 py-2 rounded-lg hover:bg-[#f0f3f8] transition"
                            >
                                <span>Product</span>
                                <MdKeyboardArrowRight
                                    className={`text-[20px] transition-transform duration-300 ${mobileDropdown === 'product' ? 'rotate-90' : ''
                                        }`}
                                />
                            </button>
                            {mobileDropdown === 'product' && (
                                <div className="mt-2 ml-4 flex flex-col gap-2">
                                    <Link
                                        href="/product/feature1"
                                        onClick={() => setMobileOpen(false)}
                                        className="text-base px-3 py-2 rounded-lg hover:bg-[#f0f3f8] transition"
                                    >
                                        Feature 1
                                    </Link>
                                    <Link
                                        href="/product/feature2"
                                        onClick={() => setMobileOpen(false)}
                                        className="text-base px-3 py-2 rounded-lg hover:bg-[#f0f3f8] transition"
                                    >
                                        Feature 2
                                    </Link>
                                    <Link
                                        href="/product/feature3"
                                        onClick={() => setMobileOpen(false)}
                                        className="text-base px-3 py-2 rounded-lg hover:bg-[#f0f3f8] transition"
                                    >
                                        Feature 3
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Solutions Dropdown */}
                        <div className="w-full">
                            <button
                                onClick={() => toggleMobileDropdown('solutions')}
                                className="flex items-center justify-between w-full text-lg px-0 py-2 rounded-lg hover:bg-[#f0f3f8] transition"
                            >
                                <span>Solutions</span>
                                <MdKeyboardArrowRight
                                    className={`text-[20px] transition-transform duration-300 ${mobileDropdown === 'solutions' ? 'rotate-90' : ''
                                        }`}
                                />
                            </button>
                            {mobileDropdown === 'solutions' && (
                                <div className="mt-2 ml-4 flex flex-col gap-2">
                                    <Link
                                        href="/solutions/enterprise"
                                        onClick={() => setMobileOpen(false)}
                                        className="text-base px-3 py-2 rounded-lg hover:bg-[#f0f3f8] transition"
                                    >
                                        Enterprise
                                    </Link>
                                    <Link
                                        href="/solutions/small-business"
                                        onClick={() => setMobileOpen(false)}
                                        className="text-base px-3 py-2 rounded-lg hover:bg-[#f0f3f8] transition"
                                    >
                                        Small Business
                                    </Link>
                                    <Link
                                        href="/solutions/startup"
                                        onClick={() => setMobileOpen(false)}
                                        className="text-base px-3 py-2 rounded-lg hover:bg-[#f0f3f8] transition"
                                    >
                                        Startup
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Resources Dropdown */}
                        <div className="w-full">
                            <button
                                onClick={() => toggleMobileDropdown('resources')}
                                className="flex items-center justify-between w-full text-lg px-0 py-2 rounded-lg hover:bg-[#f0f3f8] transition"
                            >
                                <span>Resources</span>
                                <MdKeyboardArrowRight
                                    className={`text-[20px] transition-transform duration-300 ${mobileDropdown === 'resources' ? 'rotate-90' : ''
                                        }`}
                                />
                            </button>
                            {mobileDropdown === 'resources' && (
                                <div className="mt-2 ml-4 flex flex-col gap-2">
                                    <Link
                                        href="/resources/blog"
                                        onClick={() => setMobileOpen(false)}
                                        className="text-base px-3 py-2 rounded-lg hover:bg-[#f0f3f8] transition"
                                    >
                                        Blog
                                    </Link>
                                    <Link
                                        href="/resources/documentation"
                                        onClick={() => setMobileOpen(false)}
                                        className="text-base px-3 py-2 rounded-lg hover:bg-[#f0f3f8] transition"
                                    >
                                        Documentation
                                    </Link>
                                    <Link
                                        href="/resources/help-center"
                                        onClick={() => setMobileOpen(false)}
                                        className="text-base px-3 py-2 rounded-lg hover:bg-[#f0f3f8] transition"
                                    >
                                        Help Center
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Pricing Link */}
                        <Link
                            href="/pricing"
                            onClick={() => setMobileOpen(false)}
                            className={`text-lg w-full px-0 py-2 rounded-lg transition ${pathname === "/pricing" ? "bg-primary text-white" : "hover:bg-[#f0f3f8]"
                                }`}
                        >
                            Pricing
                        </Link>

                        {/* Log in Button */}
                        <button className="text-textcol bg-[#f8f9fb] font-semibold px-5 py-2 rounded-lg hover:bg-[#e5e8ed] transition w-full mt-4">
                            Log in
                        </button>

                        {/* Get Started Button */}
                        <button className="text-white bg-[rgb(0,107,255)] font-semibold px-5 py-2 rounded-lg hover:bg-[rgb(0,78,186)] transition w-full mt-2">
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );

}