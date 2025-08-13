import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#D51C29] py-12 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2">
          <img src="/index/footer.png" alt="GiveBlood App on phones" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">GiveBlood App</h2>
          <p className="text-lg mb-8">GiveBlood is the official app of Canadian Blood Services.</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="inline-block bg-black rounded-full p-2 justify-center ">
              <img src="/app-store.svg" alt="Download on the App Store" className="h-12" />
            </a>
            <a href="#" className="inline-block bg-black rounded-full p-2 justify-center ">
              <img src="/google-play.svg" alt="Get it on Google Play" className="h-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
