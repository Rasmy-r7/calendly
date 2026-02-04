import Link from "next/link";
import { HiOutlineOfficeBuilding, HiOutlineShoppingBag } from "react-icons/hi";
import { RiRocketLine } from "react-icons/ri";

export default function SolutionsBar() {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 w-125">
                <div className="space-y-1">
                    <Link href="/solutions/enterprise" className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#f0f3f8] transition group/item">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <HiOutlineOfficeBuilding className="text-green-600 text-xl" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition">Enterprise</h4>
                            <p className="text-sm text-gray-600 mt-0.5">Solutions for large organizations</p>
                        </div>
                    </Link>
                    <Link href="/solutions/small-business" className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#f0f3f8] transition group/item">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <HiOutlineShoppingBag className="text-green-600 text-xl" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition">Small Business</h4>
                            <p className="text-sm text-gray-600 mt-0.5">Perfect for growing teams</p>
                        </div>
                    </Link>
                    <Link href="/solutions/startup" className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#f0f3f8] transition group/item">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <RiRocketLine className="text-green-600 text-xl" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 group-hover/item:text-primary transition">Startup</h4>
                            <p className="text-sm text-gray-600 mt-0.5">Built for fast-moving startups</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}