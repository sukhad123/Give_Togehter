import React from "react";

interface IntroFrameProps {
  title: string;
  description: string;
  media: React.ReactNode;
}

const IntroFrame: React.FC<IntroFrameProps> = ({ title, description, media }) => {
  return (
    <div className="h-[400px] flex items-center justify-center mb-10">
      <div className="container flex flex-col md:flex-row items-center justify-between max-w-8xl px-6">
        <div className="text-black w-[90%] md:text-left mb-3 sm:mb-6 md:mb-9">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 leading-tight">{title}</h1>
          <p className="text-lg sm:text-2xl md:text-3xl font-normal">{description}</p>
        </div>
        <div className="p-4 rounded-lg flex justify-center items-center w-full md:w-auto">{media}</div>
      </div>
    </div>
  );
};

export default IntroFrame;
