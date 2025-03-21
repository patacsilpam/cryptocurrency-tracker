import { ButtonLink } from "../common/ButtonLink";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center max-w-3xl w-full mx-auto px-5 "
    >
      <section className="space-y-5 text-left md:text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium">
          Stay Ahead in the Crypto Market Today
        </h1>
        <p className="">
          Crypto Daily is your go-to platform for real-time cryptocurrency
          tracking and market insights. Explore our features to make informed
          investment decisions and stay updated on the latest trends.
        </p>
        <div>
          <ButtonLink
            className="border  text-center text-sm md:text-base p-2 px-4 rounded-lg max-w-20 w-full mr-2 text-white"
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
        </div>
      </section>
    </section>
  );
};
