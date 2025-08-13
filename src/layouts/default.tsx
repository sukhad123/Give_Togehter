import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-offWhite flex flex-col min-h-screen overflow-x-hidden ">
      <Navbar />
      <main className="container mx-auto flex-grow pt-10">{children}</main>

      <Footer />
    </div>
  );
}
