export function ButtonLink({
  children,
  className,
  link,
}: {
  children: React.ReactNode;
  className?: string;
  link?: string;
}) {
  return (
    <a href={link} className={className}>
      {children}
    </a>
  );
}
