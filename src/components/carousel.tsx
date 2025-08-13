import React from "react";

const values = [
  {
    title: "Empathy",
    description: "We're here to listen, support, and make donating feel like a breeze",
    color: "bg-[#D51C29]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
          fill="#FFFBEB"
          stroke="#FFFBEB"
        />
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    title: "Community",
    description: "We're building a squad where everyone's welcome. Let's make a difference together!",
    color: "bg-[#FF921D]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16"
        viewBox="0 0 24 24"
        fill="#FFFBEB"
        stroke="#FFFBEB"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Impact",
    description: "Every donation counts, and together, we're trying to make a real difference",
    color: "bg-[#70B8B7]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16"
        viewBox="0 0 24 24"
        fill="#FFFBEB"
        stroke="#FFFBEB"
        strokeWidth="1"
      >
        <path d="M12 2.69l.34 1.16h1.21l-.98.71.37 1.16-1.04-.75-1.04.75.37-1.16-.98-.71h1.21L12 2.69zM12 21.31l-.34-1.16H10.45l.98-.71-.37-1.16 1.04.75 1.04-.75-.37 1.16.98.71h-1.21L12 21.31zM4.93 4.93l1.16.34.71-1.21-.75-1.04.75-1.04 1.16.37.71-.98h-1.21L4.93 4.93zm14.14 14.14l-1.16-.34-.71 1.21.75 1.04-.75 1.04-1.16-.37-.71.98h1.21l1.16-3.71zM2.69 12l1.16-.34.71.98-1.16.37-1.04-.75 1.04-.75.37 1.16.98-.71h-1.21zM21.31 12l-1.16.34-.71-.98 1.16-.37 1.04.75-1.04.75-.37-1.16-.98.71h1.21zM4.93 19.07l1.16-.34.71.98-.75 1.04.75 1.04-1.16-.37-.71-.98h-1.21l1.16-3.71zm14.14-14.14l-1.16.34-.71-.98.75-1.04-.75-1.04 1.16.37.71.98h1.21l-1.16 3.71z" />
      </svg>
    ),
  },
  {
    title: "Trust",
    description: "No fake news here. We've got your back with legit info you can count on.",
    color: "bg-[#709AD1]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16"
        viewBox="0 0 24 24"
        fill="#FFFBEB"
        stroke="#FFFBEB"
        strokeWidth="1"
      >
        <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V13H5V6.3l7-3.11v9.8z" />
      </svg>
    ),
  },
  {
    title: "Inspiration",
    description: "We're all about firing you up to take action and save lives. Let's make it happen!",
    color: "bg-[#D51C29]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16"
        viewBox="0 0 24 24"
        fill="#FFFBEB"
        stroke="#FFFBEB"
        strokeWidth="1"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    ),
  },
];

const Carousel = () => {
  return (
    <div className="py-12 bg-offWhite">
      <h2 className="text-4xl font-bold text-center text-[#231F20] mb-10">Our Values</h2>
      <div className="relative">
        <div className="flex overflow-x-auto space-x-8 px-4 sm:px-6 lg:px-8 pb-4" style={{ scrollbarWidth: "none" }}>
          {values.map((value, index) => (
            <div
              key={index}
              className={`${value.color} rounded-2xl p-6 flex-shrink-0 w-72 h-80 flex flex-col justify-between text-white`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-lg">{value.description}</p>
              </div>
              <div className="self-end">{value.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
