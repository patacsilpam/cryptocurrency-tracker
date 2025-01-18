import { Hero } from "../../components/layout/landing/Hero";
import { MobileNavbar } from "../../components/layout/landing/MobileNavbar";
import { Navbar } from "../../components/layout/landing/Navbar";
import { navItems } from "../../data/globals";
export function Landing() {
  return (
    <>
      <Navbar navItems={navItems} />
      <Hero />
    </>
  );
}
