import DefaultLayout from "@/layouts/default";
import { Hero } from "@/components/hero";
import Legends from "@/components/legends";
import Carousel from "@/components/carousel";
import Social from "@/components/social";
import Download from "@/components/download";

export default function LandingPage() {
  return (
    <DefaultLayout hideFooter>
      <Hero />
      <Legends />
      <Carousel />
      <Social />
      <Download color="bg-[#D51C29]" />
    </DefaultLayout>
  );
}
