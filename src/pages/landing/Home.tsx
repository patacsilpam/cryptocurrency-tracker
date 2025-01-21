import { Link } from "react-router-dom";
import { Navbar } from "../../components/common/Navbar";
import { LandingLayout } from "../../components/layout/landing/LandingLayout";
import { navItems } from "../../data/globals";
import { Features } from "./Features";
import { Hero } from "../../components/landing/Hero";

export function Home() {
  return (
    <>
      <LandingLayout />
      <Hero />
      <Features />
    </>
  );
}
