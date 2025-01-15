import { Link } from "react-router-dom";
import { ButtonLink } from "../ui/ButtonLink";
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
    <nav className="py-7">
      <div className="flex flex-row items-center justify-around">
        <h1 className="text-xl font-bold text-gray-700">Crypto Daily</h1>
        <div>
          <ul className="md:flex hidden flex-row">
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
            className="border border-blue-800 text-blue-800 text-center text-sm p-2 px-4 rounded-lg max-w-20 w-full mr-2"
            link="/login"
          >
            Login
          </ButtonLink>
          <ButtonLink
            className="bg-blue-800 text-white text-center text-sm p-2 px-4 rounded-lg max-w-24 w-full"
            link="/signup"
          >
            Sign Up
          </ButtonLink>
        </div>
        <button
          onClick={toggleMobileNavbar}
          className="md:hidden block  hover:bg-gray-100 hover:rounded-md p-2"
        >
          <Menu className=" hover:cursor-pointer" />
        </button>
        {isOpen && (
          <MobileNavbar
            navItems={navItems}
            className="lg:hidden text-left fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-gray-100 z-50"
          />
        )}
      </div>
    </nav>
  );
}
