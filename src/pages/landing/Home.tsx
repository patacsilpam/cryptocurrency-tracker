import { Navbar } from "../../components/common/Navbar";
import { EmailSubscription } from "../../components/landing/EmailSubscription";
import { Features } from "../../components/landing/Features";
import { Hero } from "../../components/landing/Hero";
import { HowItWorks } from "../../components/landing/HowItWorks";
import { featureItems, navItems } from "../../data/globals";

export function Home() {
  return (
    <>
      <Navbar navItems={navItems} />
      <Hero />
      <Features featureItems={featureItems} />
      <HowItWorks />
      <EmailSubscription />
    </>
  );
}
