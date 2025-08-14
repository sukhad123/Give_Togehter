import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function DefaultLayout({
  children,
  hideFooter = false,
}: {
  children: React.ReactNode;
  hideFooter?: boolean;
}) {
  return (
    <div className="relative bg-offWhite flex flex-col min-h-screen overflow-x-hidden ">
      <Navbar />
      <main className="flex-grow pt-10">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
