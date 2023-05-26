import Header from "@/components/presentational/header/Header";
import Footer from "@/components/presentational/footer/Footer";

export default function Layout({ children, header, footer }) {
  return (
    <main className="flex flex-col h-screen">
      <div className="">
        {header && <Header {...header} />}
        {children}
        <div className="px-5 lg:px-24">
          {footer && <Footer {...footer} />}
        </div>

      </div>
    </main>
  );
}
