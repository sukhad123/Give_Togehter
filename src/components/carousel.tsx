import React from "react";

const values = [
  {
    title: "Empathy",
    description: "We're here to listen, support, and make donating feel like a breeze",
    color: "bg-[#D51C29]",
    icon: <img src="/carousel/empathy.png" className="h-30 w-30" />,
  },
  {
    title: "Community",
    description: "We're building a squad where everyone's welcome. Let's make a difference together!",
    color: "bg-[#FF921D]",
    icon: <img src="/carousel/community.png" className="h-30 w-30" />,
  },
  {
    title: "Impact",
    description: "Every donation counts, and together, we're trying to make a real difference",
    color: "bg-[#70B8B7]",
    icon: <img src="/carousel/impact.png" className="h-30 w-30" />,
  },
  {
    title: "Trust",
    description: "No fake news here. We've got your back with legit info you can count on.",
    color: "bg-[#709AD1]",
    icon: <img src="/carousel/trust.png" className="h-30 w-30" />,
  },
  {
    title: "Inspiration",
    description: "We’re all about hyping you up to take action and save lives. Let's make it happen!",
    color: "bg-[#D51C29]",
    icon: <img src="/carousel/inspiration.png" className="h-30 w-30" />,
  },
];

const Carousel = () => {
  return (
    <div className="py-12 bg-offWhite">
      <h2 className="text-4xl font-bold text-center text-[#231F20] mb-10">Our Values</h2>
      <div className="flex justify-center">
        <div className="flex overflow-x-auto space-x-8 px-4 sm:px-6 lg:px-8 pb-4" style={{ scrollbarWidth: "none" }}>
          {values.map((value, index) => (
            <div
              key={index}
              className={`${value.color} rounded-2xl p-6 flex-shrink-0 w-72 h-80 flex flex-col justify-between text-white`}
            >
              <div>
                <h3 className="text-3xl font-bold mb-5">{value.title}</h3>
                <p className="text-lg font-semibold">{value.description}</p>
              </div>
              <div className="self-center">{value.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
