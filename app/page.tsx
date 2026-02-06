import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import SchedulingSection from "@/components/SchedulingSection";
import TrustedBySection from "@/components/TrustedBySection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HomeHeader />
      <FeaturesSection />

      <PricingSection />
      <SchedulingSection />
      <Footer/>



    </div>
  );
}
