import DefaultLayout from "@/layouts/default";
import IntroFrame from "@/components/introFrame";

export default function Home() {
  return (
    <DefaultLayout>
      <IntroFrame
        title="How do you plan to save lives today?"
        description="How do you plan to save lives today?"
        media={<img src="/index/home.png" alt="Home" className="w-[60%] h-[60%]" />}
      />
    </DefaultLayout>
  );
}
