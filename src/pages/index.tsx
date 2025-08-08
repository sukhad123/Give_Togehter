import DefaultLayout from "@/layouts/default";
import { Hero } from "@/components/hero";
import Legends from "@/components/legends";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Hero />
      <Legends />
    </DefaultLayout>
  );
}
