import React from "react";

interface IntroFrameProps {
  title: string;
  description: string;
  media: React.ReactNode;
}

const IntroFrame: React.FC<IntroFrameProps> = ({ title, description, media }) => {
  return (
    <div className="h-[400px] flex items-center justify-center p-4">
      <div className="container flex flex-col md:flex-row items-center justify-between max-w-8xl px-6">
        <div className="text-black w-[70%] md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3">{title}</h1>
          <p className="text-xl md:text-2xl font-normal">{description}</p>
        </div>
        <div className="p-4 rounded-lg flex justify-center items-center w-full md:w-auto">{media}</div>
      </div>
    </div>
  );
};

export default IntroFrame;
