import { Navbar } from "@/components/common/Navbar";
import { EmailSubscription } from "@/components/layout/landing/EmailSubscription";
import { Features } from "@/components/layout/landing/Features";
import { Hero } from "@/components/layout/landing/Hero";
import { HowItWorks } from "@/components/layout/landing/HowItWorks";
import { Testimonials } from "@/components/layout/landing/Testimonials";
import { Footer } from "@/components/common/Footer";
import { featureItems, navItems } from "@/data/globals";
import { TrendingCoin } from "@/components/layout/landing/TrendingCoin";

export function Home() {
  return (
    <div className="relative flex flex-col justify-center  overflow-hidden text-white max-w-7xl w-full mx-auto px-5">
      <Navbar navItems={navItems} />
      <Hero />
      <Features featureItems={featureItems} />
      <TrendingCoin />
      <Testimonials />
      <HowItWorks />
      <EmailSubscription />
      <Footer />
    </div>
  );
}
