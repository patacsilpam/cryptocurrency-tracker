import { LogOut } from "lucide-react";
const Logout = () => {
  return (
    <div className=" py-6 mx-1">
      <button
        className="w-full py-3 flex items-center justify-center rounded-md
                text-gray-700 hover:text-[#4359d5] hover:bg-gray-100 transition-colors"
        aria-label="Logout"
      >
        <LogOut size={18} />
        <span className="text-sm font-medium ">Logout</span>
      </button>
    </div>
  );
};

export default Logout;
