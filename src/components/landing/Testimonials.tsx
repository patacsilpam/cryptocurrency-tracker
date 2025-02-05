import test from "node:test";
import { testimonialsItem } from "../../data/globals";
export const Testimonials = () => {
  return (
    <>
      <div className=" grid md:grid-cols-3 grid-cols-1  [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <div className="relative h-[90vh] overflow-hidden mx-10">
          {/* Content to scroll */}
          <div className="absolute top-0 left-0 w-full animate-marquee space-y-10 py-2">
            {testimonialsItem.map(
              (item) =>
                item.category === "Crypto Investor" &&
                item.testimonies.map((testimony) => (
                  <div key={testimony.id}>
                    <p>{testimony.name}</p>
                    <p>{testimony.role}</p>
                    <p>{testimony.testimony}</p>
                  </div>
                ))
            )}
          </div>
          <div className="absolute top-0 left-0 w-full animate-marquee2 space-y-10 py-2">
            {testimonialsItem.map(
              (item) =>
                item.category === "Crypto Investor" &&
                item.testimonies.map((testimony) => (
                  <div key={testimony.id}>
                    <p>{testimony.name}</p>
                    <p>{testimony.role}</p>
                    <p>{testimony.testimony}</p>
                  </div>
                ))
            )}
          </div>
        </div>
        <div className="relative h-64 overflow-hidden [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          {/* Content to scroll */}
          <div className="absolute top-0 left-0 w-full animate-marquee-infinite space-y-4">
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
            <p>Item 4</p>
            <p>Item 5</p>
            <p>Item 6</p>
            <p>Item 7</p>
            <p>Item 8</p>
            <p>Item 9</p>
            <p>Item 10</p>
            {/* Duplicate content for seamless looping */}
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
            <p>Item 4</p>
            <p>Item 5</p>
            <p>Item 6</p>
            <p>Item 7</p>
            <p>Item 8</p>
            <p>Item 9</p>
            <p>Item 10</p>
          </div>
        </div>
        <div className="relative h-64 overflow-hidden [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          {/* Content to scroll */}
          <div className="absolute top-0 left-0 w-full animate-scroll space-y-4">
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
            <p>Item 4</p>
            <p>Item 5</p>
            <p>Item 6</p>
            <p>Item 7</p>
            <p>Item 8</p>
            <p>Item 9</p>
            <p>Item 10</p>
            {/* Duplicate content for seamless looping */}
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
            <p>Item 4</p>
            <p>Item 5</p>
            <p>Item 6</p>
            <p>Item 7</p>
            <p>Item 8</p>
            <p>Item 9</p>
            <p>Item 10</p>
          </div>
        </div>
      </div>
    </>
  );
};
