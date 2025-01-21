import { Navbar } from "../../components/common/Navbar";
import { navItems } from "../../data/globals";

export function Features() {
  return (
    <section
      id="features"
      className="flex flex-col justify-center min-h-screen mx-auto text-justify md:text-center max-w-3xl space-y-4 "
    >
      <section className="space-y-3">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium -mt-10 text-[#d9dadc]">
          Stay Ahead in the Crypto Market Today
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Crypto Daily is your go-to platform for real-time cryptocurrency
          tracking and market insights. Explore our features to make informed
          investment decisions and stay updated on the latest trends.
        </p>
      </section>
    </section>
  );
}
