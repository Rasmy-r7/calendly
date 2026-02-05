import Link from "next/link";
import { FiBookOpen, FiLifeBuoy } from "react-icons/fi";
import { RiNewspaperLine } from "react-icons/ri";


export default function ResourcesBar() {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 w-125">
                <div className="space-y-1">
                    <Link href="/resources/blog" className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#f0f3f8] transition group/item">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <RiNewspaperLine className="text-orange-600 text-xl" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition">Blog</h4>
                            <p className="text-sm text-gray-600 mt-0.5">Latest updates and insights</p>
                        </div>
                    </Link>
                    <Link href="/resources/documentation" className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#f0f3f8] transition group/item">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <FiBookOpen className="text-orange-600 text-xl" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition">Documentation</h4>
                            <p className="text-sm text-gray-600 mt-0.5">Comprehensive guides</p>
                        </div>
                    </Link>
                    <Link href="/resources/help-center" className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#f0f3f8] transition group/item">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <FiLifeBuoy className="text-orange-600 text-xl" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition">Help Center</h4>
                            <p className="text-sm text-gray-600 mt-0.5">Get support quickly</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}