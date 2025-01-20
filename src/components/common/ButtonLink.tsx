import { Link } from "react-router-dom";

export function ButtonLink({
  children,
  className,
  link,
}: {
  children: React.ReactNode;
  className?: string;
  link: string;
}) {
  return (
    <Link to={link} className={className}>
      {children}
    </Link>
  );
}
