// React import not required with modern JSX transform

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#FFFBEB" strokeWidth="1.5">
    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Z" fill="#FFFBEB" stroke="#FFFBEB" />
    <path d="M12 7h.01M11 11h2v6h-2z" fill="#D51C29" stroke="#D51C29" />
  </svg>
);

const Card = ({ bg, title }: { bg: string; title: string }) => (
  <div className={`${bg} text-white rounded-2xl w-64 h-64 p-5 flex flex-col justify-between shadow-md`}>
    <p className="text-center font-semibold leading-6">
      {title}
    </p>
    <div className="self-center opacity-90">
      <InfoIcon />
    </div>
  </div>
);

const ThingsToKnow = () => {
  return (
    <section className="w-full bg-[#709AD1] py-12">
      <div className="w-[80%] mx-auto text-center text-offWhite">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFFBEB]">Things to know</h2>
        <p className="text-[#FFFBEB]/90 mt-2">Before your first donation</p>

        <div className="mt-10 flex flex-wrap justify-center gap-8">
          <Card bg="bg-[#70B8B7]" title="You should be 17 years and above to donate blood & plasma" />
          <Card bg="bg-[#D51C29]" title="You should be 17 years and above to donate blood & plasma" />
          <Card bg="bg-[#FF921D]" title="You should be 17 years and above to donate blood & plasma" />
        </div>

        <div className="mt-8">
          <button className="inline-flex items-center gap-3 bg-[#FFFBEB] text-[#231F20] px-6 py-3 rounded-full font-semibold shadow-sm">
            <span className="inline-block w-3 h-3 bg-[#FF921D] rounded-full"></span>
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThingsToKnow;
