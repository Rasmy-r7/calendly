"use client";

import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";

// Type definitions
interface FeatureSection {
    category: string;
    list: string[];
}

interface PlanFeatures {
    title: string;
    category?: string;
    items: string[] | FeatureSection[];
}

interface PricingPlan {
    name: string;
    subtitle: string;
    price?: string | number;
    priceAmount?: number | null;
    priceUnit?: string;
    discount?: string | null;
    buttonText: string;
    buttonStyle: 'dark' | 'blue';
    recommended?: boolean;
    startsAt?: boolean;
    features: {
        title: string;
        category?: string;
        items: (string | FeatureSection)[];
    };
}

// Type Guard for FeatureSection[]
const isFeatureSection = (items: (string | FeatureSection)[]): items is FeatureSection[] => {
    return items.every(item => typeof item === 'object' && 'category' in item);
};

export default function PricingSection() {
    const [billingCycle, setBillingCycle] = useState<'yearly' | 'monthly'>('yearly');

    const pricingPlans: PricingPlan[] = [
        {
            name: 'Free Plan',
            subtitle: 'For individuals getting started',
            price: 'Free',
            priceAmount: null,
            buttonText: 'Get Started Free',
            buttonStyle: 'dark',
            features: {
                title: 'Free features:',
                category: 'General',
                items: [
                    'Chat with Serani AI',
                    'Voice agent',
                    'Store tasks',
                    'Reminders',
                    'AI tokens – 100 tokens/month'
                ]
            }
        },
        {
            name: 'Pro Plan',
            subtitle: 'For professionals and power users',
            price: '3 USD/ month',
            priceAmount: null,
            buttonText: 'Upgrade to Pro',
            buttonStyle: 'blue',
            features: {
                title: 'Pro features:',
                category: 'General',
                items: [
                    'Chat with Serani AI',
                    'Voice agent',
                    'Store tasks',
                    'Reminders',
                    'Mental health/ Emotional tracking',
                    'AI tokens – 500 tokens/month'
                ]
            }
        },
        {
            name: 'Custom / Enterprise',
            subtitle: 'For teams and organizations',
            price: 'Custom / Unlimited',
            priceAmount: null,
            buttonText: 'Contact Sales',
            buttonStyle: 'blue',
            features: {
                title: 'Enterprise features:',
                category: 'General',
                items: [
                    'Chat with Serani AI',
                    'Voice agent',
                    'Store tasks',
                    'Reminders',
                    'Mental health/ Emotion Tracking',
                    'AI tokens – Custom/Unlimited'
                ]
            }
        }
    ];

    return (
        <div className="bg-white py-16 px-5 sm:px-10">
            <div className="max-w-300 mx-auto">
                {/* Header */}
                <div>
                    <h1 className='block lg:hidden text-[#0b3558] text-[50px] leading-[1.2] font-bold text-center whitespace-pre-line mb-4'>
                        Pricing
                    </h1>
                    <h1 className="text-[#476788] lg:text-[#0b3558] text-[18px] lg:text-[50px] leading-[1.6] lg:leading-[1.2] font-normal lg:font-bold text-center whitespace-pre-line mb-12">
                        Pick the perfect plan for your team
                    </h1>
                </div>

                {/* Billing Toggle */}
                {/* <div className="flex justify-center xl:justify-end items-center gap-4 mb-8">
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="radio"
                            name="billing"
                            value="yearly"
                            checked={billingCycle === 'yearly'}
                            onChange={() => setBillingCycle('yearly')}
                            className="w-5 h-5 accent-[#006BFF]"
                        />
                        <span className="text-[#0B3558] font-medium">Billed yearly</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="radio"
                            name="billing"
                            value="monthly"
                            checked={billingCycle === 'monthly'}
                            onChange={() => setBillingCycle('monthly')}
                            className="w-5 h-5 accent-[#006BFF]"
                        />
                        <span className="text-[#0B3558] font-medium">Billed monthly</span>
                    </label>
                </div> */}

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className="bg-[#F8FAFB] rounded-2xl p-8 flex flex-col relative">
                            {/* Recommended Badge */}
                            {plan.recommended && (
                                <div className="absolute top-4 right-4">
                                    <span className="bg-[#006BFF] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        Recommended plan
                                    </span>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="mb-6">
                                <h2 className="text-[#0b3558] text-[24px] leading-[1.4] font-bold mb-1">{plan.name}</h2>
                                <p className="text-[#476788] leading-[1.4] font-medium text-[14px]">{plan.subtitle}</p>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    {plan.startsAt && (
                                        <span className="text-[#0B3558] text-lg font-medium">Starts at</span>
                                    )}
                                    <span className="text-[#0B3558] text-[20px] font-bold">{plan.price}</span>
                                    {plan.priceUnit && (
                                        <span className="text-[#476788] text-base">{plan.priceUnit}</span>
                                    )}
                                    {plan.discount && (
                                        <span className="bg-[#e6f0ff] text-[#004eba] text-[12px] font-medium px-2 py-1 rounded-full leading-[1.1]">
                                            {plan.discount}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button
                                className={`w-full py-2.5 px-4 leading-[1.4] rounded-lg font-semibold text-[18px] mb-8 transition-all ${plan.buttonStyle === 'blue'
                                    ? 'bg-[#2C7A7B] text-white hover:bg-[#0056D2]'
                                    : 'bg-[#2C4B7B] text-white hover:bg-[#0a2d47]'
                                    }`}
                            >
                                {plan.buttonText}
                            </button>

                            {/* Features */}
                            <div className="flex-1">
                                <p className="text-[#476788] text-sm font-medium mb-4">{plan.features.title}</p>

                                {isFeatureSection(plan.features.items) ? (
                                    (plan.features.items as FeatureSection[]).map((section, idx) => (
                                        <div key={idx} className="mb-6">
                                            <h3 className="text-[#0B3558] font-bold text-base mb-3">{section.category}</h3>
                                            {section.list.length > 0 && (
                                                <ul className="space-y-3">
                                                    {section.list.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2">
                                                            <FaCheck className="w-5 h-5 text-[#0B3558] shrink-0 mt-0.5" />
                                                            <span className="text-[#0B3558] text-sm underline decoration-dotted underline-offset-2">
                                                                {item}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <ul className="space-y-3">
                                        {(plan.features.items as string[]).map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <FaCheck className="w-5 h-5 text-[#0B3558] shrink-0 mt-0.5" />
                                                <span className="text-[#0B3558] text-sm underline decoration-dotted underline-offset-2">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
