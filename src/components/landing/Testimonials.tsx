import { useEffect, useState, useCallback } from "react";
import { testimonialsItem } from "../../data/globals";
import { TestimonialCard } from "./TestimonialsCard";

export const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 768px)").matches
  );

  const handleResize = useCallback(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 465px)");
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [handleResize]);

  return (
    <div className=" py-10 space-y-3">
      <div className="text-center space-y-2 py-4">
        <h1 className="text-2xl font-medium">Loved by thousands of people</h1>
        <p>Here's what some of our users have to say about Crypto Daily.</p>
      </div>
      <div
        className="h-screen md:h-[700px] grid md:grid-cols-3 grid-cols-1 gap-x-20 
          [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-20px),transparent_100%)]"
      >
        {isMobile ? (
          /* Mobile View: Single-column scrolling marquee */
          <div className="relative w-full ">
            {testimonialsItem.concat(testimonialsItem).map((item, index) => (
              <div
                key={index}
                className="relative  flex flex-col space-y-8 animate-marquee"
              >
                <TestimonialCard userCategory={item.category} />
              </div>
            ))}
          </div>
        ) : (
          /* Desktop View: Multi-column scrolling */
          testimonialsItem.map((item, index) => (
            <div key={index} className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full animate-marquee space-y-10 py-5">
                <TestimonialCard userCategory={item.category} />
              </div>
              <div className="absolute top-0 left-0 w-full animate-marquee2 space-y-10 py-5">
                <TestimonialCard userCategory={item.category} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
