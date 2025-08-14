import DefaultLayout from "@/layouts/default";
import IntroFrame from "@/components/introFrame";
import Carousel from "@/components/carousel";

export default function ContactPage() {
  return (
    <DefaultLayout>
      <IntroFrame
        title="Contact Us"
        description="Contact Us"
        media={<img src="/index/contact.png" alt="Contact" className="w-[60%] h-[60%]" />}
      />
    </DefaultLayout>
  );
}
