import { Link } from "react-router-dom";
import { ButtonLink } from "../../common/ButtonLink";
import { Menu } from "lucide-react";
import { MobileNavbar } from "./MobileNavbar";
import { useState } from "react";

export function Navbar({
  navItems,
}: {
  navItems: { id: number; href: string; label: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex md:flex-row  items-center justify-between max-w-7xl w-full mx-28 py-5">
      <div>
        <h1 className="text-xl font-bold ">CryptoDaily</h1>
      </div>
      <div>
        <ul className="md:flex hidden flex-row ">
          {navItems.map((item) => {
            return (
              <li key={item.id} className="text-sm">
                <Link to={item.href} className="mx-7">
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="md:block hidden">
        <ButtonLink
          className="border  text-center text-sm p-2 px-4 rounded-lg max-w-20 w-full mr-2"
          link="/get-started"
        >
          Get Started
        </ButtonLink>
      </div>
      <button
        onClick={toggleMobileNavbar}
        className="md:hidden block hover:rounded-md p-2"
      >
        <Menu className=" hover:cursor-pointer" />
      </button>
      {isOpen && (
        <MobileNavbar
          navItems={navItems}
          className="lg:hidden text-left fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-[#0F0E0E]  z-50"
        />
      )}
    </nav>
  );
}
