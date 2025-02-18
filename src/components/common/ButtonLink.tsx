import { Link } from "react-router-dom";

export function ButtonLink({
  children,
  className,
  link,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  link: string;
}) {
  return (
    <Link to={link} className={className} {...props}>
      {children}
    </Link>
  );
}
