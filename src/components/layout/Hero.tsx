import heroImage from "../../assets/react.svg";
import { ButtonLink } from "../ui/ButtonLink";

export const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-around items-center min-h-screen lg:-mt-10">
      <section className="w-full md:w-1/2 space-y-4">
        <strong className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Stay Ahead in the Crypto Market Today
        </strong>
        <p className="text-md">
          Crypto Daily is your go-to platform for real-time cryptocurrency
          tracking and market insights. Explore our features to make informed
          investment decisions and stay updated on the latest trends.
        </p>
        <div className="flex flex-row gap-2">
          <ButtonLink
            className="bg-blue-800 text-white text-center text-sm p-2 px-4 rounded-lg"
            link="/signup"
          >
            Explore
          </ButtonLink>
          <ButtonLink
            className="bg-blue-800 text-white text-center text-sm p-2 px-4 rounded-lg"
            link="/signup"
          >
            Learn More
          </ButtonLink>
        </div>
      </section>
      <section className="w-full md:w-1/2">
        <img
          src={heroImage}
          alt="hero"
          className="h-1/2 w-1/2 mx-auto text-center"
        />
      </section>
    </section>
  );
};
