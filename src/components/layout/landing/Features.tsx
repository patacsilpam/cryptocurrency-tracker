export function Features({
  featureItems,
}: {
  featureItems: {
    id: number;
    icon: JSX.Element; // Optional JSX.Element for the icon
    label: string;
    description: string;
  }[];
}) {
  return (
    <section id="features" className="flex flex-col space-y-12 max-h-fit py-10">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-32">
        <p className="text-3xl md:text-4xl lg:text-4xl font-medium text-[#dddfe4] w-full md:w-1/2">
          Stay Ahead with Real-Time Crypto Insights
        </p>
        <p className="text-gray-400 w-full md:w-1/2">
          Crypto Daily offers cutting-edge tools for tracking cryptocurrency
          prices in real-time. Our platform provides comprehensive market trends
          and in-depth analysis, empowering you to make informed investment
          decisions.
        </p>
      </section>

      {/* Features Section */}
      <section className="space-y-10">
        <div className="flex flex-col md:flex-row justify-around">
          {featureItems.map((item) => (
            <div
              key={item.id}
              className="  bg-zinc-800 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-55 backdrop-saturate-50 backdrop-contrast-125 p-6 rounded-lg mr-5 h-56 my-3 md:my-0"
            >
              {/* Render icon if provided */}
              {item.icon && <div className="py-2">{item.icon}</div>}
              {/* Render label and description */}
              <p className="text-xl font-bold py-2">{item.label}</p>

              <p className="text-md text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
