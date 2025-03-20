import { navItems } from "../../../data/globals";
import { Navbar } from "../../common/Navbar";

export function Header() {
  return (
    <>
      <Navbar navItems={navItems} />
    </>
  );
}
