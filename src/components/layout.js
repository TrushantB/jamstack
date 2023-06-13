import Header from "@/components/presentational/header/Header";
import Footer from "@/components/presentational/footer/Footer";
import { PreviewBanner } from "./preview/PreviewBanner";

export default function Layout({ children, header, footer, preview }) {
  return (
    <main className="flex flex-col h-screen">
      {preview && <PreviewBanner />}
      <div className="">
        {header && <Header {...header} />}
        {children}
      </div>
      <div className="mt-auto border-t">
        {footer && <Footer {...footer} />}
      </div>
    </main>
  );
}
