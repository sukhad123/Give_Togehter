const Footer = () => {
  return (
    <div className="bg-[#D51C29] pt-12 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2">
          <img src="/index/footer.png" alt="GiveBlood App on phones" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">GiveBlood App</h2>
          <p className="text-xl font-bold mb-8">GiveBlood is the official app of Canadian Blood Services.</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="flex bg-black rounded-2xl p-2 justify-center items-center">
              <img src="/logo/apple.png" className="h-12 ml-4" />
              <div className="flex flex-col mx-4 my-1">
                <h1 className="text-white">Download on the</h1>
                <span className="text-white font-bold text-3xl">App Store</span>
              </div>
            </a>
            <a href="#" className="flex bg-black rounded-2xl p-2 justify-center items-center ">
              <img src="/logo/googleplay.png" className="h-12 ml-2" />
              <div className="flex flex-col mx-4 my-1">
                <h1 className="text-white">ANDROID APP ON</h1>
                <span className="text-white font-bold text-3xl">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
