import test from "node:test";
import { testimonialsItem } from "../../data/globals";
export const Testimonials = () => {
  return (
    <>
      <div className="text-center py-10 space-y-3">
      <h1 className="text-2xl font-medium">Loved by thousands of people</h1>
      <p>Here's what some of our users have to say about Aceternity UI.</p>
      </div>
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-x-20  [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-50px),transparent_100%)]">
        <div className="relative h-[50vh] overflow-hidden ">
          {/* Content to scroll */}
          <div className="absolute top-0 left-0 w-full animate-marquee space-y-10 py-5">
            {testimonialsItem.map(
              (item) =>
                item.category === "Crypto Investor" &&
                item.testimonies.map((testimony) => (
                  <div
                    key={testimony.id}
                    className="bg-[#18181b] border border-[#282828] p-2 rounded-lg"
                  >
                    <p>{testimony.name}</p>
                    <p>{testimony.role}</p>
                    <p>{testimony.testimony}</p>
                  </div>
                ))
            )}
          </div>
          <div className="absolute top-0 left-0 w-full animate-marquee2 space-y-10 py-5">
            {testimonialsItem.map(
              (item) =>
                item.category === "Crypto Investor" &&
                item.testimonies.map((testimony) => (
                  <div
                    key={testimony.id}
                    className="bg-[#18181b] border border-[#282828] p-2 rounded-lg"
                  >
                    <p>{testimony.name}</p>
                    <p>{testimony.role}</p>
                    <p>{testimony.testimony}</p>
                  </div>
                ))
            )}
          </div>
        </div>
        <div className="relative h-[50vh] overflow-hidden [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          {/* Content to scroll */}
          <div className="absolute top-0 left-0 w-full animate-marquee space-y-10 py-5">
            {testimonialsItem.map(
              (item) =>
                item.category === "Beginners & Casual Users" &&
                item.testimonies.map((testimony) => (
                  <div
                    key={testimony.id}
                    className="bg-[#18181b] border border-[#282828] p-2 rounded-lg "
                  >
                    <p>{testimony.name}</p>
                    <p>{testimony.role}</p>
                    <p>{testimony.testimony}</p>
                  </div>
                ))
            )}
          </div>
          <div className="absolute top-0 left-0 w-full animate-marquee2 space-y-10 py-5">
            {testimonialsItem.map(
              (item) =>
                item.category === "Beginners & Casual Users" &&
                item.testimonies.map((testimony) => (
                  <div
                    key={testimony.id}
                    className="bg-[#18181b] border border-[#282828] p-2 rounded-lg"
                  >
                    <p>{testimony.name}</p>
                    <p>{testimony.role}</p>
                    <p>{testimony.testimony}</p>
                  </div>
                ))
            )}
          </div>
        </div>
        <div className="relative h-[50vh] overflow-hidden [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          {/* Content to scroll */}
          <div className="absolute top-0 left-0 w-full animate-marquee space-y-10 py-5">
            {testimonialsItem.map(
              (item) =>
                item.category === "Developers and Analysts" &&
                item.testimonies.map((testimony) => (
                  <div
                    key={testimony.id}
                    className="bg-[#18181b] border border-[#282828] p-2 rounded-lg"
                  >
                    <p>{testimony.name}</p>
                    <p>{testimony.role}</p>
                    <p>{testimony.testimony}</p>
                  </div>
                ))
            )}
          </div>
          <div className="absolute top-0 left-0 w-full animate-marquee2 space-y-10 py-5">
            {testimonialsItem.map(
              (item) =>
                item.category === "Developers and Analysts" &&
                item.testimonies.map((testimony) => (
                  <div
                    key={testimony.id}
                    className="bg-[#18181b] border border-[#282828] p-2 rounded-lg"
                  >
                    <p>{testimony.name}</p>
                    <p>{testimony.role}</p>
                    <p>{testimony.testimony}</p>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};
