
const Message = () => {
  return (
    <div className="w-[80%] mx-auto mb-12">
      <div className="space-y-12">
        <div>
          <h3 className="text-4xl font-bold text-[#231F20] mb-6">Our Message</h3>
          <p className="text-[#231F20] text-lg leading-7 mb-6">
            GiveTogether is a student-led initiative dedicated to encouraging blood and plasma donation among Canadian
            post-secondary students. In partnership with Canadian Blood Services, we promote the GiveBlood app to make
            the donation process simple and approachable. Our goal is to inspire students to come together, support
            their communities, and contribute to life-saving efforts.
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col md:flex-row items-stretch gap-8 w-[60%] mx-auto">
        <div className="flex-1 bg-[#D51C29] h-[370px] md:h-[440px] rounded-[28px]"></div>

        <div className="w-full md:w-[340px] flex flex-col gap-6">
          <div className="bg-[#70B8B7] h-[120px] md:h-[140px] rounded-[28px]"></div>
          <div className="bg-[#FF921D] h-[200px] md:h-[280px] rounded-[28px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Message;
