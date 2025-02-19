import { GoogleSignin } from "@/components/auth/components/GoogleSignin";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";

export function Login() {
  return (
    <div className="flex items-center justify-center">
      <div className="shadow-lg rounded-lg p-5 max-w-md w-full">
        {/* Align text to the left */}
        <div className="w-full space-y-6">
          <h1 className="text-xl md:text-2xl font-bold text-center">
            Sign in to Crypto Daily
          </h1>
          <GoogleSignin />
          <div className="flex items-center w-full">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">
              or sign in with email
            </span>
            <hr className="flex-grow border-gray-300" />
          </div>
        </div>

        <div className="space-y-7 mt-5">
          <Input
            placeholder="Email"
            type="email"
            label="Email"
            onChange={() => {}}
          />

          <Input
            placeholder="Password"
            type="password"
            label="Password"
            onChange={() => {}}
          />

          <Button
            type="submit"
            className="bg-white w-full font-medium text-gray-900 rounded-full p-3"
          >
            Login
          </Button>

          <span className="block text-center text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 underline">
              Sign up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
