import { useEffect, useState } from "react";
import { testimonialsItem } from "../../data/globals";
import { TestimonialCard } from "./TestimonialsCard";

export const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="text-center py-10 space-y-3">
        <h1 className="text-2xl font-medium">Loved by thousands of people</h1>
        <p>Here's what some of our users have to say about Crypto Daily.</p>
      </div>
      <div className="h-screen grid md:grid-cols-3 grid-cols-1 gap-x-20 [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-20px),transparent_100%)]">
        {isMobile ? (
          <div className="relative w-full overflow-hidden h-[500px] md:h-screen">
            <div className="absolute flex flex-col space-y-8 animate-marquee">
              {testimonialsItem.concat(testimonialsItem).map((item, index) => (
                <TestimonialCard key={index} userCategory={item.category} />
              ))}
            </div>
          </div>
        ) : (
          testimonialsItem.map((item, index) => (
            <div key={index} className="relative overflow-hidden ">
              {/* Content to scroll */}
              <div className="absolute top-0 left-0 w-full animate-marquee space-y-10 py-5 ">
                <TestimonialCard userCategory={item.category} />
              </div>
              <div className="absolute top-0 left-0 w-full animate-marquee2 space-y-10 py-5">
                <TestimonialCard userCategory={item.category} />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};
