const Download: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div className={`${color} pt-12 text-white`}>
      <div className="container mx-auto px-4 flex flex-row items-center justify-between gap-3 sm:gap-6 md:gap-12">
        <div className="w-1/2 pr-2 sm:pr-4">
          <img src="/index/footer.png" alt="GiveBlood App on phones" className="w-full h-auto max-w-full" />
        </div>
        <div className="w-1/2 text-left">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">GiveBlood App</h2>
          <p className="text-xs sm:text-sm md:text-base font-semibold mb-4 sm:mb-8">
            GiveBlood is the official app of Canadian Blood Services.
          </p>
          <div className="flex flex-col sm:flex-row items-start justify-start space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-4">
            <a
              href="https://apps.apple.com/us/app/giveblood/id804765636"
              target="_blank"
              className="flex bg-black rounded-lg px-2 py-1 justify-center items-center"
            >
              <img src="/logo/apple.png" className="h-4 sm:h-5 md:h-6 ml-2 sm:ml-3" />
              <div className="flex flex-col mx-2 sm:mx-3 my-0">
                <h1 className="text-white text-[8px] sm:text-[10px]">Download on the</h1>
                <span className="text-white font-bold text-sm sm:text-base md:text-lg">App Store</span>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=ca.blood.giveblood"
              target="_blank"
              className="flex bg-black rounded-lg px-2 py-1 justify-center items-center "
            >
              <img src="/logo/googleplay.png" className="h-4 sm:h-5 md:h-6 ml-2" />
              <div className="flex flex-col mx-2 sm:mx-3 my-0">
                <h1 className="text-white text-[8px] sm:text-[10px]">ANDROID APP ON</h1>
                <span className="text-white font-bold text-sm sm:text-base md:text-lg">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
