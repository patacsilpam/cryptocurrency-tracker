import { GoogleSignin } from "@/components/auth/components/GoogleSignin";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";

export function Login() {
  return (
    <div className="flex items-center justify-center">
      <div className="shadow-lg rounded p-5 max-w-md w-full bg-zinc-900">
        {/* Align text to the left */}
        <h1 className="text-xl md:text-2xl font-bold text-center">
          Sign in to Crypto Daily
        </h1>
        {/*Google Sign in */}
        <div className="w-full space-y-4 mt-5">
          <GoogleSignin>Sign in with Google</GoogleSignin>
          <div className="flex items-center w-full">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">
              or sign in with email
            </span>
            <hr className="flex-grow border-gray-300" />
          </div>
        </div>
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
            className="bg-white w-full font-medium text-gray-900 rounded-md p-3"
          >
            Login
          </Button>
        </form>

        <span className="block text-center text-gray-600 mt-3">
          Don't have an account?{" "}
          <a href="/auth/register" className="text-gray-300 underline">
            Sign up
          </a>
        </span>
      </div>
    </div>
  );
}
