type InputProps = {
  label: string;
  type: string;
  placeholder: string;
  onChange: () => void;
};
export function Input({ label, type, onChange, ...props }: InputProps) {
  return (
    <>
      <div className="flex flex-col space-y-1">
        <label className="font-medium">{label}</label>
        <input
          type={type}
          onChange={onChange}
          {...props}
          className="p-3  outline-none bg-zinc-800 hover:outline hover:outline-zinc-800"
        />
      </div>
    </>
  );
}
