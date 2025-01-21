import { Link, Outlet } from "react-router-dom";
import { navItems } from "../../../data/globals";
import { Home } from "../../../pages/landing/Home";
import { Navbar } from "../../common/Navbar";
import { Header } from "./Header";

export function LandingLayout() {
  return <Navbar navItems={navItems} />;
}
