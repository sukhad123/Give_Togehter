import { useEffect, useRef } from "react";

const StoryCard = ({ className = "" }: { className?: string }) => (
  <div
    className={`bg-[#D51C29] text-white rounded-2xl p-6 flex flex-col shadow-md h-full min-h-[480px] sm:min-h-[520px] md:min-h-[560px] ${className}`}
  >
    <div className="flex-1">
      <p className="text-sm leading-6 opacity-95">
        Shoutout to Pavan Anandakumar and Christo Johnson for bravely donating, with unwavering support... Everyone's
        questions were answered, nerves faded, and the atmosphere was filled with encouragement...
      </p>
      <div className="mt-6">
        <button className="inline-flex items-center gap-3 px-5 py-3 bg-[#2B7DF0] rounded-full font-semibold">
          Read Full Story
          <span className="inline-block w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-white" />
        </button>
      </div>
    </div>
    <div className="mt-6 flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-white/20 overflow-hidden flex items-center justify-center">
        <img src="/logo/profile.png" alt="avatar" className="w-full h-full" />
      </div>
      <div>
        <p className="text-xl font-semibold text-[#FF921D]">Suhana Shrestha</p>
        <p className=" text-black/80 text-sm sm:text-base font-normal">Chair, GiveTogether</p>
      </div>
    </div>
  </div>
);

const DonorStories = () => {
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const isDesktop = typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches;
    if (isDesktop && rail.children[1]) {
      const card = rail.children[1] as HTMLElement;
      const left = card.offsetLeft - (rail.clientWidth - card.clientWidth) / 2;
      rail.scrollTo({ left });
    }
  }, []);

  const scrollBy = (dir: "left" | "right") => {
    const rail = railRef.current;
    if (!rail) return;
    const amount = Math.round(rail.clientWidth * 0.9);
    rail.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="bg-offWhite my-12">
      <div className="w-[90%] sm:w-[80%] mx-auto">
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#231F20] text-center">Donor Stories</h3>
        <p className="text-[#606060] text-center mt-2">
          Hear what our donors have to share about their experience donating in partnership with GiveTogether
        </p>

        {/* Controls */}
        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <button
            aria-label="Previous"
            onClick={() => scrollBy("left")}
            className="w-10 h-10 rounded-full bg-[#D9E6FF] flex items-center justify-center active:scale-95"
          >
            <span className="inline-block w-0 h-0 border-t-4 border-b-4 border-r-8 border-t-transparent border-b-transparent border-r-[#2B7DF0]" />
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollBy("right")}
            className="w-10 h-10 rounded-full bg-[#D9E6FF] flex items-center justify-center active:scale-95"
          >
            <span className="inline-block w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-[#2B7DF0]" />
          </button>
        </div>

        {/* Carousel rail */}
        <div
          ref={railRef}
          className="mt-6 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-2 pb-2 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* hide scrollbar for WebKit */}
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none;}`}</style>
          <StoryCard className="snap-center min-w-[85%] sm:min-w-[60%] md:min-w-[320px]" />
          <StoryCard className="snap-center min-w-[85%] sm:min-w-[60%] md:min-w-[440px]" />
          <StoryCard className="snap-center min-w-[85%] sm:min-w-[60%] md:min-w-[320px]" />
        </div>
      </div>
    </section>
  );
};

export default DonorStories;
