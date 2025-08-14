import DefaultLayout from "@/layouts/default";
import IntroFrame from "@/components/introFrame";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <IntroFrame
        title="The GiveTogether Story"
        description="GiveTogether is a student-led initiative focused on promoting blood and plasma donation among Canadian post-secondary students. Through awareness campaigns, partnerships with Canadian Blood Services, and promotion of the Give Blood mobile app, we aim to reduce anxiety around donation and inspire collective action."
        media={<img src="/index/home.png" alt="Home" className="w-[60%] h-[60%]" />}
      />
    </DefaultLayout>
  );
}
