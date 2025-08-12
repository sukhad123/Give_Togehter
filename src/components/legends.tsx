

const Legends = () => {
  const steps = [
    {
      title: "Scan the QR",
      description: "Grab your phone, scan that fancy QR code up there, and download the GiveBlood app",
      color: "bg-[#FF921D]",
    },
    {
      title: "Fill in the details",
      description:
        "Sign up and spill all the details (don't worry, it's easier than sinking a hole-in-one). Be thorough, and you're halfway there!",
      color: "bg-[#70B8B7]",
    },
    {
      title: "Welcome to GiveTogether",
      description:
        "You're now a rockstar in our Partners for Life account with GiveTogether. Let's save lives together!",
      color: "bg-[#709AD1]",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#231F20]">
          Three Easy Steps to Be a Life-Saving Legend!
        </h2>

        {/* Steps Section */}
        <div className="flex flex-col md:flex-row mb-24 justify-center">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex items-center justify-center text-center mx-4">
              <div
                className={`${step.color} w-50 h-24 rounded-2xl flex items-center justify-center text-4xl font-bold text-white`}
              >
                {index + 1}
              </div>
              <div className="text-left px-4">
                <h3 className="text-2xl font-bold text-[#D51C29] mb-4">{step.title}</h3>
                <p className="text-[#606060] text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="container mx-auto px-4 mb-24">
          <div className="w-11/12 mx-auto">
            <div className="space-y-12">
              <div>
                <h3 className="text-4xl font-bold text-[#231F20] mb-6">The GiveTogether Story</h3>
                <p className="text-[#606060] text-lg mb-6">
                  GiveTogether is a student-led initiative dedicated to encouraging blood and plasma donation among
                  Canadian post-secondary students. In partnership with Canadian Blood Services, we promote the
                  GiveBlood app to make the donation process simple and approachable. Our goal is to inspire students to
                  come together, support their communities, and contribute to life-saving efforts.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white py-6 rounded-2xl">
                  <h4 className="text-3xl font-bold text-[#D51C29] mb-3">Our Mission</h4>
                  <p className="text-[#606060] text-lg">
                    Students inspiring students to save lives through blood and plasma donation
                  </p>
                </div>
                <div className="bg-white py-6 rounded-2xl">
                  <h4 className="text-3xl font-bold text-[#709AD1] mb-3">Our Vision</h4>
                  <p className="text-[#606060] text-lg">
                    To create a movement where every student feels empowered and motivated to donate blood or plasma,
                    reducing shortages and saving lives across Canada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legends;
