import Header from "@/components/presentational/header/Header";
import Footer from "@/components/presentational/footer/Footer";
import { PreviewBanner } from "./preview/PreviewBanner";
import ScrollUp from "./shared/ScrollUp";

export default function Layout({ children, header, footer, preview }) {
  return (
    <>
      {preview && <PreviewBanner />}
      <header className="sticky top-0 z-50">
        {header && <Header {...header} />}
      </header>
      <main id="main">{children}</main>
      <footer className="mt-auto border-t">
        {footer && <Footer {...footer} />}
      </footer>
      <div className="fixed cursor-pointer right-5 top-[90%]">
        <ScrollUp />
      </div>
    </>
  );
}
