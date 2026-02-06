"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Integrations", href: "#integrations" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Help Center", href: "/help" },
    { name: "API Documentation", href: "/docs" },
    { name: "Community", href: "/community" },
    { name: "Status", href: "/status" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Security", href: "/security" },
  ],
};

const socialLinks = [
  { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
  { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto py-16 px-5 sm:px-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-[32px] leading-[1.2] font-bold text-[#0b3558]">
                Serani AI
              </h2>
            </Link>
            <p className="text-[#476788] text-[16px] leading-relaxed mb-6">
              Your personal AI assistant that tracks tasks and reminds you until they&apos;re done. Never forget important tasks again.
            </p>

            {/* App Download Buttons */}
            <div className="flex flex-col pt-4 max-w-fit">
              <div className="flex flex-col gap-4">
                <button className="inline-flex items-center justify-start gap-4 px-4.5 py-2.5 text-[16px] font-semibold text-white bg-[#006BFF] border border-[#006BFF] rounded-lg transition-all">
                  <Image
                    src="/images/google-play.png"
                    width={1000}
                    height={1000}
                    alt="logo"
                    className="w-full h-auto max-w-8 bg-white p-1 rounded-md"
                  />
                  <span>Get it on Google Play</span>
                </button>

                <button className="inline-flex items-center justify-start gap-4 px-4.5 py-2.5 text-[16px] font-semibold text-white bg-[#0b3558] border border-[#0b3558] rounded-lg transition-all">
                  <Image
                    src="/images/app-store.png"
                    width={1000}
                    height={1000}
                    alt="logo"
                    className="w-full h-auto max-w-8 bg-white p-1 rounded-md"
                  />
                  <span>Download on the App Store</span>
                </button>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[#0b3558] font-bold text-[24px] mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-[#476788] text-[16px] hover:text-[#006bff] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[#0b3558] font-bold text-[24px] mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-[#476788] text-[16px] hover:text-[#006bff] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[#0b3558] font-bold text-[24px] mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-[#476788] text-[16px] hover:text-[#006bff] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[#0b3558] font-bold text-[24px] mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-[#476788] text-[16px] hover:text-[#006bff] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
       
      </div>

      {/* Bottom Section */}
      <div className="bg-[#006bff]">
        <div className="max-w-7xl mx-auto py-6 px-5 sm:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-[14px] text-white text-center md:text-left">
              © 2026 Serani AI. All Rights Reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-white hover:text-[#006bff] transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}