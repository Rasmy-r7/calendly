"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    FiLayers,
    FiZap,
    FiFileText,
    FiBox,
    FiShield
} from 'react-icons/fi';
import { FaArrowRight } from "react-icons/fa6";

interface FeatureTab {
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    gradient: string;
    imageSrc: string;
    content: React.ReactNode;
}

export default function SchedulingSection() {
    const [activeTab, setActiveTab] = useState<string>('browser');
    const [progress, setProgress] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(false);

    const features: FeatureTab[] = [
        {
            id: 'browser',
            title: 'Browser extensions',
            icon: <FiLayers className="w-6 h-6" />,
            description: 'Quickly find and share scheduling links from your inbox, LinkedIn, CRM, and more.',
            gradient: 'from-[#C850C0] to-[#4158D0]',
            imageSrc: '/images/browser-extension.png',
            content: (
                <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-120">
                    <p className="text-[#0B3558]">Browser extensions</p>

                </div>
            )
        },
        {
            id: 'workflows',
            title: 'Automated workflows',
            icon: <FiZap className="w-6 h-6" />,
            description: 'Boost attendance and save time by automating reminders and follow-ups.',
            gradient: 'from-[#00D4AA] to-[#00A896]',
            imageSrc: '/images/workflows.png',
            content: (
                <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-120">
                    <p className="text-[#0B3558]">Automated workflows</p>

                </div>
            )
        },
        {
            id: 'routing',
            title: 'Routing forms',
            icon: <FiFileText className="w-6 h-6" />,
            description: 'Instantly qualify, route, and schedule meetings with high-value leads and customers directly from your website.',
            gradient: 'from-[#C850C0] to-[#4158D0]',
            imageSrc: '/images/routing-forms.png',
            content: (
                <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-120">
                    <p className="text-[#0B3558]">Routing forms</p>

                </div>
            )
        },
        {
            id: 'collective',
            title: 'Round robin & collective events',
            icon: <FiBox className="w-6 h-6" />,
            description: 'Pool your team\'s schedule together to offer more booking options to customers, or automatically combine availability to quickly schedule co-hosted calls.',
            gradient: 'from-[#FFAA00] to-[#FF6B00]',
            imageSrc: '/images/round-robin.png',
            content: (
                <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-120">
                    <p className="text-[#0B3558]">Round robin & collective event</p>

                </div>
            )
        },
        {
            id: 'admin',
            title: 'Admin management',
            icon: <FiShield className="w-6 h-6" />,
            description: 'Team admins enjoy tools to streamline onboarding, ensure consistency, track scheduling trends, maintain security standards, and more.',
            gradient: 'from-[#00D4AA] to-[#4158D0]',
            imageSrc: '/images/admin.png',
            content: (
                <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-120">
                    <p className="text-[#0B3558]">Admin management</p>

                </div>
            )
        }
    ];

    const activeFeature = features.find(f => f.id === activeTab) || features[0];

    // Auto-rotate tabs every 10 seconds
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    const currentIndex = features.findIndex(f => f.id === activeTab);
                    const nextIndex = (currentIndex + 1) % features.length;
                    setActiveTab(features[nextIndex].id);
                    return 0;
                }
                return prev + 1;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [activeTab, isPaused, features]);

    const handleTabClick = (featureId: string) => {
        setActiveTab(featureId);
        setProgress(0);
        setIsPaused(false);
    };

    return (
        <div className="bg-white py-20 px-5 sm:px-10">
            <div className="max-w-300 mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-[#0b3558]  text-[32px] sm:text-[48px] lg:text-[60px] font-bold leading-[1.2] mb-6 max-w-240 mx-auto">
                        Trust & Value statement
                    </h1>
                    <p className="text-[#476788] text-md md:text-xl max-w-200 mx-auto mb-8">
                        Let Serani AI handle the reminders while you move through your day with ease.
                    </p>
                    <button className="bg-[#2C7A7B] text-white px-4.5 py-2.5 rounded-lg font-semibold text-[18px] hover:bg-[#0056D2] transition-colors">
                        Start Free Today
                    </button>
                </div>

                {/* Features Section */}
                {/* <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="top-8 hidden lg:block">
                        <div className={`relative rounded-3xl overflow-hidden bg-linear-to-br ${activeFeature.gradient} p-8 min-h-150 flex items-center justify-center`}>
                            <div className="transform transition-all duration-500 ease-in-out">
                                {activeFeature.content}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                onClick={() => handleTabClick(feature.id)}

                                className={`cursor-pointer transition-all duration-300 ${activeTab === feature.id ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
                            >
                                <div>
                                    <div className="flex items-start gap-4 mb-2">
                                        <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${activeTab === feature.id ? feature.gradient : 'from-gray-200 to-gray-300'} flex items-center justify-center text-white shrink-0`}>
                                            {feature.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[#0B3558] text-xl font-bold mb-2">{feature.title}</h3>
                                        </div>
                                    </div>
                                    <div>
                                        {activeTab === feature.id && (
                                            <p className="text-[#476788] text-base leading-relaxed">{feature.description}</p>
                                        )}
                                    </div>
                                    <div className=' mt-3'>
                                        {activeTab === feature.id && (
                                            <button className="text-[#006bff] font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                                                Learn more
                                                <FaArrowRight className="w-4 h-4 animate-spin-slow" />

                                            </button>
                                        )}

                                    </div>

                                </div>

                                {activeTab === feature.id && (
                                    <div className="mt-6">
                                        <div className="h-0.5 w-full bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full bg-linear-to-r ${feature.gradient} transition-all duration-100 ease-linear`}
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>
                                    </div>
                                )}

                                {activeTab !== feature.id && (
                                    <div className="h-px mt-6 bg-gray-200" />
                                )}

                                {activeTab === feature.id && (
                                    <div className=" top-8  lg:hidden block my-10">
                                        <div className={`relative rounded-3xl overflow-hidden bg-linear-to-br ${activeFeature.gradient} p-8 min-h-150 flex items-center justify-center`}>
                                            <div className="transform transition-all duration-500 ease-in-out">
                                                {activeFeature.content}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                    </div>

                </div> */}
            </div>
        </div>
    );
}