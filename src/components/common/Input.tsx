type InputProps = {
  label: string;
  type: string;
  placeholder: string;
  onChange: () => void;
};
export function Input({ label, type, onChange, ...props }: InputProps) {
  return (
    <>
      <label>{label}</label>
      <input type={type} onChange={onChange} {...props} />
    </>
  );
}
