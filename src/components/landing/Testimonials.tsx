import { testimonialsItem } from "../../data/globals";
import { TestimonialCard } from "./TestimonialsCard";
export const Testimonials = () => {
  return (
    <>
      <div className=" text-center py-10 space-y-3 ">
        <h1 className="text-2xl font-medium">Loved by thousands of people</h1>
        <p>Here's what some of our users have to say about Crypto Daily.</p>
      </div>
      <div className="h-screen grid md:grid-cols-3 grid-cols-1 gap-x-20  [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-50px),transparent_100%)]">
        <div className="relative  overflow-hidden ">
          {/* Content to scroll */}
          <div className="absolute top-0 left-0 w-full animate-marquee space-y-10 py-5 ">
            <TestimonialCard userCategory="Crypto Investor" />
          </div>
          <div className="absolute top-0 left-0 w-full animate-marquee2 space-y-10 py-5">
            <TestimonialCard userCategory="Crypto Investor" />
          </div>
        </div>
        <div className="relative  overflow-hidden [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          {/* Content to scroll */}
          <div className="absolute top-0 left-0 w-full animate-marquee space-y-10 py-5">
            <TestimonialCard userCategory="Beginners & Casual Users" />
          </div>
          <div className="absolute top-0 left-0 w-full animate-marquee2 space-y-10 py-5">
            <TestimonialCard userCategory="Beginners & Casual Users" />
          </div>
        </div>
        <div className="relative  overflow-hidden [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          {/* Content to scroll */}
          <div className="absolute top-0 left-0 w-full animate-marquee space-y-10 py-5">
            <TestimonialCard userCategory="Developers and Analysts" />
          </div>
          <div className="absolute top-0 left-0 w-full animate-marquee2 space-y-10 py-5">
            <TestimonialCard userCategory="Developers and Analysts" />
          </div>
        </div>
      </div>
    </>
  );
};
