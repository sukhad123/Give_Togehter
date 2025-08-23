import DefaultLayout from "@/layouts/default";
import IntroFrame from "@/components/introFrame";
import Message from "@/components/message";
import ThingsToKnow from "@/components/thingsToKnow";
import EligibilityCta from "@/components/eligibilityCta";
import DonorStories from "@/components/donorStories";
import Download from "@/components/download";

export default function Home() {
  return (
    <DefaultLayout>
      <IntroFrame
        title="How do you plan to save lives today?"
        description="How do you plan to save lives today?"
        media={<img src="/index/home.png" alt="Home" className="w-full h-auto object-cover" />}
      />
      <Message />
      <ThingsToKnow />
      <EligibilityCta />
      <DonorStories />
      <Download color="bg-[#709AD1]" />
    </DefaultLayout>
  );
}
