import heroImage from "../../../assets/react.svg";
import { ButtonLink } from "../../common/ButtonLink";

export const Hero = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen mx-auto text-justify md:text-center w-full md:w-1/2 space-y-4 ">
      <section className="space-y-4 ">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
          Stay Ahead in the Crypto Market Today
        </h1>
        <p className="text-md">
          Crypto Daily is your go-to platform for real-time cryptocurrency
          tracking and market insights. Explore our features to make informed
          investment decisions and stay updated on the latest trends.
        </p>
      </section>
      <section>
        <ButtonLink
          className="border  text-center text-sm p-2 px-4 rounded-lg max-w-20 w-full mr-2"
          link="/features"
        >
          Explore Features
        </ButtonLink>
        <ButtonLink
          className="bg-white text-black  text-center text-sm p-2 px-4 rounded-lg max-w-20 w-full mr-2"
          link="/get-started"
        >
          Get Started
        </ButtonLink>
      </section>
    </section>
  );
};
