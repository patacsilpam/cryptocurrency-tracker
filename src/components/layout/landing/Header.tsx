import { navItems } from "../../../data/globals";
import { Navbar } from "../../common/Navbar";
import { Hero } from "../../landing/Hero";

export function Header() {
  return (
    <>
      <Navbar navItems={navItems} />
      <Hero />
    </>
  );
}
