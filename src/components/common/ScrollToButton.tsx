export function ScrollToButton({
  section,
  children,
}: {
  section: string;
  children: React.ReactNode;
}) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <button onClick={() => scrollTo(section)}>{children}</button>
    </>
  );
}
