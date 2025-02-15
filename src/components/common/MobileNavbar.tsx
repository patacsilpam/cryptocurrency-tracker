import { Link } from "react-router-dom";
import { ButtonLink } from "./ButtonLink";
import { GoogleSignin } from "../auth/components/GoogleSignin";

export const MobileNavbar = ({
  className,
  navItems,
}: {
  className: string;
  navItems: { id: number; href: string; label: string }[];
}) => {
  return (
    <div className={className}>
      <ul>
        {navItems.map((item) => {
          return (
            <li key={item.id} className="px-10 py-4">
              <Link to={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col gap-2 p-3">
        <GoogleSignin />
      </div>
    </div>
  );
};
