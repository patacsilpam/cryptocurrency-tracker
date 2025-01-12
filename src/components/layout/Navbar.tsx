import { Link } from "react-router-dom";
import { ButtonLink } from "../ui/ButtonLink";
export function Navbar({
  navItems,
}: {
  navItems: { id: number; href: string; label: string }[];
}) {
  return (
    <div>
      <div className="flex flex-row items-center justify-around py-7">
        <h1>LOGO</h1>
        <div>
          <ul className="flex flex-row">
            {navItems.map((item) => {
              return (
                <li key={item.id} className="text-lg">
                  <Link to={item.href} className="mx-7">
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ButtonLink
          className="bg-blue-800 text-white text-center p-2 px-4 rounded-full max-w-40 w-full"
          link="/login"
        >
          Login
        </ButtonLink>
      </div>
    </div>
  );
}
