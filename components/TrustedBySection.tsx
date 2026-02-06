"use client";

import { useEffect, useRef, useState } from "react";

export default function TrustedBySection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -100px 0px",
            }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const logos = [
        "Indiana University",
        "DoorDash",
        "Lyft",
        "Compass",
        "L'Oréal",
        "Zendesk",
        "Dropbox",
    ];

    return (
        <div
            ref={sectionRef}
            className="relative z-10 flex flex-col gap-10 pt-8 pb-12 w-full max-w-full overflow-hidden"
        >

            {/* Heading */}
            <div className="relative z-10 flex flex-col items-center gap-6 w-full">
                <div
                    className={`flex flex-col items-center gap-6 w-full transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <h2 className="text-[1.125rem] leading-[1.6] font-normal max-w-249 text-center text-[#0b3558]">
                        Trusted by more than{" "}
                        <span className="font-bold">100,000</span>{" "}
                        of the world’s leading organizations
                    </h2>
                </div>
            </div>

            {/* Scrolling logos */}
            <div className="relative w-full overflow-hidden">
                <div
                    className={`flex items-center gap-12 w-max ${isVisible ? "animate-trust-marquee" : ""
                        }`}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={`${logo}-${index}`}
                            className="shrink-0"
                        >
                            {/* Replace this div with Image later */}
                            <div className="w-32 h-12 bg-[#006BFF] rounded flex items-center justify-center text-xs text-white">
                                {logo}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
