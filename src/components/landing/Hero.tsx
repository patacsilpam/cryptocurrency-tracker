import heroImage from "../../../assets/react.svg";
import { ButtonLink } from "../common/ButtonLink";
import { Rectangle } from "../common/Rectangle";

export const Hero = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen mx-auto text-justify md:text-center max-w-3xl space-y-4 ">
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
      <section>
        <ButtonLink
          className="border  text-center text-sm md:text-base p-2 px-4 rounded-lg max-w-20 w-full mr-2"
          link="/features"
        >
          Explore Features
        </ButtonLink>
        <ButtonLink
          className="bg-white text-black  text-center text-sm md:text-base p-2 px-4 rounded-lg max-w-20 w-full mr-2"
          link="/get-started"
        >
          Get Started
        </ButtonLink>
      </section>
      <Rectangle />
    </section>
  );
};
