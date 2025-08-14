import DefaultLayout from "@/layouts/default";
import IntroFrame from "@/components/introFrame";
import Carousel from "@/components/carousel";
import Social from "@/components/social";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <IntroFrame
        title="The GiveTogether Story"
        description="GiveTogether is a student-led initiative focused on promoting blood and plasma donation among Canadian post-secondary students. Through awareness campaigns, partnerships with Canadian Blood Services, and promotion of the Give Blood mobile app, we aim to reduce anxiety around donation and inspire collective action."
        media={<img src="/index/home.png" alt="Home" className="w-[60%] h-[60%]" />}
      />
      <Carousel />
      <div className="w-[80%] mx-auto py-16">
        <div className="mb-5 mx-10">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="bg-white py-6 px-10 rounded-2xl">
                <h4 className="text-3xl font-bold text-[#D51C29] mb-3">Our Mission</h4>
                <p className="text-[#606060] text-lg">
                  Students inspiring students to save lives through blood and plasma donation
                </p>
              </div>
              <div className="bg-white py-6 px-10 rounded-2xl">
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
      <Social />
    </DefaultLayout>
  );
}
