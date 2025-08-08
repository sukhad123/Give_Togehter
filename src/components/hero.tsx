export function Hero() {
  return (
    <div className="h-[400px] bg-[#D51C29] flex items-center justify-center p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-6xl px-6">
        <div className="text-white w-[47%] text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-3">Save Together,</h1>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Give Together</h1>
          <p className="text-xl md:text-2xl font-light">
            Students inspiring students to save lives through blood and plasma donation
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className="w-48 h-48 bg-gray-200 flex items-center justify-center text-gray-500">QR Code</div>
        </div>
      </div>
    </div>
  );
}
