import { Link, Outlet } from "react-router-dom";
import { featureItems, navItems } from "../../../data/globals";
import { Home } from "../../../pages/landing/Home";
import { Navbar } from "../../common/Navbar";
import { Header } from "./Header";
import { Features } from "../../../pages/landing/Features";
import { Hero } from "../../landing/Hero";

export function LandingLayout() {
  return (
    <>
      <LandingLayout />
      <Hero />
    </>
  );
}
