// React import not required with modern JSX transform

const StoryCard = () => (
  <div className="bg-[#D51C29] text-white rounded-2xl p-6 w-full md:w-80 flex flex-col justify-between shadow-md">
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

    <div className="mt-6 flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-white/20 overflow-hidden flex items-center justify-center">
        <img src="/logo/profile.png" alt="avatar" className="w-full h-full" />
      </div>
      <div>
        <p className="text-xl font-semibold text-[#FF921D]">Suhana Shrestha</p>
        <p className=" text-black text-normal opacity-90 font-normal">Chair, GiveTogether</p>
      </div>
    </div>
  </div>
);

const DonorStories = () => {
  return (
    <section className="bg-offWhite py-12">
      <div className="w-[80%] mx-auto">
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#231F20] text-center">Donor Stories</h3>
        <p className="text-[#606060] text-center mt-2">
          Hear what our donors have to share about their experience donating in partnership with GiveTogether
        </p>

        <div className="flex justify-center gap-3 mt-4">
          <button className="w-8 h-8 rounded-full bg-[#D9E6FF] flex items-center justify-center">
            <span className="inline-block w-0 h-0 border-t-4 border-b-4 border-r-8 border-t-transparent border-b-transparent border-r-[#2B7DF0]" />
          </button>
          <button className="w-8 h-8 rounded-full bg-[#D9E6FF] flex items-center justify-center">
            <span className="inline-block w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-[#2B7DF0]" />
          </button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </div>
      </div>
    </section>
  );
};

export default DonorStories;
