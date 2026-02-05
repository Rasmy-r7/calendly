import Link from "next/link";
import { FiFileText, FiGlobe, FiLink, FiSettings, FiShield, FiSmartphone, FiStar, FiZap } from "react-icons/fi";


export default function ProductBar() {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 w-162.5">
                <div className="grid grid-cols-2 gap-10">
                    {/* Product Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-5">Product</h3>
                        <div className="space-y-1">
                            <Link href="/product/scheduling" className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#f0f3f8] transition group/item">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                    <FiLink className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition">Scheduling</h4>
                                    <p className="text-sm text-gray-600 mt-0.5">Simplified booking</p>
                                </div>
                            </Link>
                            <Link href="/product/notetaker" className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#f0f3f8] transition group/item">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                    <FiFileText className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition">Notetaker</h4>
                                    <p className="text-sm text-gray-600 mt-0.5">Meeting recaps and action items</p>
                                </div>
                            </Link>
                            <Link href="/product/overview" className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#f0f3f8] transition group/item">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                    <FiStar className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition">Product overview</h4>
                                    <p className="text-sm text-gray-600 mt-0.5">Why choose us</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Platform Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-5">Platform</h3>
                        <div className="space-y-1">
                            <Link href="/platform/integrations" className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#f0f3f8] transition group/item">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                    <FiZap className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition">Integrations</h4>
                                </div>
                            </Link>
                            <Link href="/platform/mobile" className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#f0f3f8] transition group/item">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                    <FiSmartphone className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition">Mobile app</h4>
                                </div>
                            </Link>
                            <Link href="/platform/browser" className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#f0f3f8] transition group/item">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                    <FiGlobe className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition">Browser extension</h4>
                                </div>
                            </Link>
                            <Link href="/platform/admin" className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#f0f3f8] transition group/item">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                    <FiSettings className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition">Admin controls</h4>
                                </div>
                            </Link>
                            <Link href="/platform/security" className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#f0f3f8] transition group/item">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                    <FiShield className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition">Security</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
