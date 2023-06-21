import Header from "@/components/presentational/header/Header";
import Footer from "@/components/presentational/footer/Footer";
import { PreviewBanner } from "./preview/PreviewBanner";
import ScrollUp from "./shared/ScrollUp";
import { useState, useEffect } from "react";

export default function Layout({ children, header, footer, preview }) {
const [isScrollUp, setIsScrollUp] = useState(false);

useEffect(()=> {
window.addEventListener('scroll', (event)=> {
    if(window.scrollY > 10) {
        setIsScrollUp(true);
    }
     else {
        setIsScrollUp(false);
     }
});
return () => window.removeEventListener('scroll', ()=>{});
}, [])
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
        { isScrollUp && <ScrollUp />}
      </div>
    </>
  );
}
