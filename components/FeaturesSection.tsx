"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineRobot, AiOutlineClockCircle, AiOutlineCheckCircle, AiOutlineFileDone, AiOutlineShareAlt } from "react-icons/ai";

interface FeatureTab {
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    gradient: string;
    imageSrc: string;
    content: React.ReactNode;
}

const features: FeatureTab[] = [
    {
        id: 'feature1',
        title: 'Tell the AI your task',
        icon: <AiOutlineRobot className="w-6 h-6" />,
        description: 'Remind me to submit the report on Friday at 5 PM.',
        gradient: 'from-[#00D4AA] to-[#00A896]',
        imageSrc: '/images/connect-calendars.png',
        content: (
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-120">
                <p className="text-[#0B3558]">Connect your calendars</p>
            </div>
        )
    },
    {
        id: 'feature2',
        title: 'AI understands time, priority & context',
        icon: <AiOutlineClockCircle className="w-6 h-6" />,
        description: 'No complex setup required',
        gradient: 'from-[#00D4AA] to-[#00A896]',
        imageSrc: '/images/availability.png',
        content: (
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-120">
                <p className="text-[#0B3558]">Add your availability</p>
            </div>
        )
    },
    {
        id: 'feature3',
        title: 'Receive timely reminders',
        icon: <AiOutlineCheckCircle className="w-6 h-6" />,
        description: 'Right when you need them',
        gradient: 'from-[#C850C0] to-[#4158D0]',
        imageSrc: '/images/conferencing.png',
        content: (
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-120">
                <p className="text-[#0B3558]">Connect conferencing tools</p>
            </div>
        )
    },
    {
        id: 'feature4',
        title: 'Mark tasks as done',
        icon: <AiOutlineFileDone className="w-6 h-6" />,
        description: 'The AI learns and improves over time',
        gradient: 'from-[#FFAA00] to-[#FF6B00]',
        imageSrc: '/images/event-types.png',
        content: (
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-120">
                <p className="text-[#0B3558]">Customize your event types</p>
            </div>
        )
    },
];

export default function FeaturesSection() {
    const [activeTab, setActiveTab] = useState<string>('feature1');
    const [progress, setProgress] = useState<number>(1);
    const [isPaused, setIsPaused] = useState<boolean>(false);


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
                        More Than a To-Do List. <br /> A Smart Reminder System.
                    </h1>
                    <p className="text-[#476788] text-md md:text-xl max-w-200 mx-auto mb-8">
                        Unlike traditional task apps, our Serani AI assistant understands your tasks, priorities, and timelines.
                        It reminds you before things are forgotten, follows up when needed, and helps you stay on track without constant checking.
                    </p>
                    <button className="bg-[#2C7A7B] text-white px-4.5 py-2.5 rounded-lg font-semibold text-[18px] hover:bg-[#0056D2] transition-colors">
                        Sign up for free
                    </button>
                </div>

                {/* Features Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Feature List */}
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

                                <div className='lg:hidden block'>
                                    {activeTab === feature.id && (
                                        <div className="sticky top-8   my-10">
                                            <div className={`relative rounded-3xl overflow-hidden bg-linear-to-br ${activeFeature.gradient} p-8 min-h-150 flex items-center justify-center`}>
                                                <div className="transform transition-all duration-500 ease-in-out">
                                                    {activeFeature.content}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                        ))}

                    </div>
                    {/* Right Side - Feature Preview */}
                    <div className="sticky top-8 hidden lg:block">
                        <div className={`relative rounded-3xl overflow-hidden bg-linear-to-br ${activeFeature.gradient} p-8 min-h-150 flex items-center justify-center`}>
                            <div className="transform transition-all duration-500 ease-in-out">
                                {activeFeature.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
