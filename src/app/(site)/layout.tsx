import Topbar from "@/components/layout/Topbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsappFloat from "@/components/ui/WhatsappFloat";
import BackToTop from "@/components/ui/BackToTop";
import ScrollEffects from "@/components/ui/ScrollEffects";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">رفتن به محتوای اصلی</a>
      <Topbar />
      <Header />
      {children}
      <Footer />
      <WhatsappFloat />
      <BackToTop />
      <ScrollEffects />
    </>
  );
}
