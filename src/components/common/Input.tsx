type InputProps = {
  label: string;
  type: string;
  placeholder: string;
  onChange: () => void;
};
export function Input({ label, type, onChange, ...props }: InputProps) {
  return (
    <>
      <form
        action=""
        className="flex flex-col space-y-1"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="font-medium">{label}</label>
        <input
          type={type}
          onChange={onChange}
          {...props}
          className="p-3 rounded-lg outline-none bg-zinc-800 hover:outline hover:outline-zinc-800"
        />
      </form>
    </>
  );
}
