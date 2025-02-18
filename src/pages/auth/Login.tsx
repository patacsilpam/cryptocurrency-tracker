import { GoogleSignin } from "@/components/auth/components/GoogleSignin";
import { Input } from "@/components/common/Input";
export function Login() {
  return (
    <div className="flex items-center justify-center">
      <div className="grid place-items-center w-[500px]">
        <div className="flex flex-col space-y-4 w-[500px]">
          <Input
            placeholder="Email"
            type="email"
            label="Email"
            onChange={() => {}}
          />
        </div>
        <GoogleSignin />
      </div>
    </div>
  );
}
