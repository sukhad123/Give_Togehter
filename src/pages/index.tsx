import DefaultLayout from "@/layouts/default";
import { Hero } from "@/components/hero";
import Legends from "@/components/legends";
import Carousel from "@/components/carousel";
import Social from "@/components/social";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Hero />
      <Legends />
      <Carousel />
      <Social />
    </DefaultLayout>
  );
}
