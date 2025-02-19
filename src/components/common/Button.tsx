type ButtonProps = {
  type: "submit" | "reset" | "button";
  children: React.ReactNode;
  [key: string]: any;
};
export function Button({ type, children, ...props }: ButtonProps) {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
}
