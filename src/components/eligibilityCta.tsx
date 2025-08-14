// React import not required with modern JSX transform

const ClipboardIcon = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#231F20" strokeWidth="1.5">
    <rect x="7" y="3" width="10" height="6" rx="2" fill="#FFFBEB" />
    <rect x="5" y="7" width="14" height="14" rx="3" fill="#FFFBEB" />
    <path d="M9 12h6M9 16h6" stroke="#231F20" />
  </svg>
);

const EligibilityCta = () => {
  return (
    <section className="bg-offWhite py-12">
      <div className="w-[80%] mx-auto">
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#231F20] mb-2">Can I donate blood or plasma?</h3>
        <p className="text-[#606060] max-w-3xl mb-1">
          Let's find out! Depending on your responses to the following questions, you may be able to donate as of today.
        </p>
        <p className="text-[#606060] text-sm mb-6">Please note: This is not a medical quiz & your true eligibility will be confirmed at Canadian Blood Services at their center</p>

        <div className="relative bg-[#FF921D] rounded-[28px] p-6 md:p-10 overflow-hidden">
          <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#FFB150] rounded-full opacity-30" />
          <div className="absolute -bottom-8 -right-8 w-52 h-52 bg-[#FFB150] rounded-full opacity-20" />

          <div className="flex items-center gap-4 text-[#231F20]">
            <div className="bg-[#FFFBEB] rounded-2xl p-3">
              <ClipboardIcon className="w-10 h-10" />
            </div>
            <p className="text-xl md:text-2xl font-semibold">
              Let's find out! Depending on your responses to the following questions, you may be able to donate as of today.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button className="text-[#FF921D] font-semibold underline underline-offset-4">Read More</button>
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 rounded-full bg-[#D9D9D9] text-[#606060] font-semibold">No</button>
              <button className="px-6 py-3 rounded-full bg-[#D51C29] text-white font-semibold shadow">Yes</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityCta;
