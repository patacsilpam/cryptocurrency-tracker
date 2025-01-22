export function HowItWorks() {
  return (
    <>
      <div className="mx-auto">
        <h1 className="text-4xl font-bold py-5 text-center">How It Works</h1>
        {/*this is a sample video, it's one of my fave from youtube. If you think I plagarize it, actually no. */}
        <iframe
          loading="lazy"
          className="w-[1080px] h-[550px]"
          src="https://www.youtube.com/embed/CNsvts6pVzo?si=0QI5yNUGPqlIhjsN"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
}
