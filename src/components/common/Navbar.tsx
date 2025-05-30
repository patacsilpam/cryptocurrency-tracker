import { ButtonLink } from "./ButtonLink";
import { Menu } from "lucide-react";
import { MobileNavbar } from "./MobileNavbar";
import { useState } from "react";
import { ScrollToButton } from "./ScrollToButton";
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
    <nav className="flex md:flex-row  items-center justify-between py-5">
      <div>
        <h1 className="text-xl font-bold ">CryptoDaily</h1>
      </div>
      <div>
        <ul className="md:flex hidden flex-row text-white">
          {navItems.map((item) => {
            return (
              <li key={item.id} className="text-sm mx-7">
                <ScrollToButton section={item.href}>
                  {item.label}
                </ScrollToButton>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="md:block hidden">
        <ButtonLink
          link="/auth/login"
          className="border  text-center text-sm md:text-base p-2 px-4 rounded-lg w-[150px] mr-2 text-white"
        >
          Login
        </ButtonLink>
        <ButtonLink
          link="/auth/register"
          className="bg-white text-black  text-center  font-medium p-2 px-4 rounded-lg w-[150px] mr-2"
        >
          Sign Up
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
          className="lg:hidden text-left fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-[#0F0E0E] z-50"
        />
      )}
    </nav>
  );
}
