import Header from "@/components/presentational/header/Header";
import Footer from "@/components/presentational/footer/Footer";

export default function Layout({ children, header, footer }) {
  return (
    <main className="flex flex-col h-screen">
      <div className="">
        {header && <Header {...header} />}
        {children}
        <div>
          {footer && <Footer {...footer} />}
        </div>

      </div>
    </main>
  );
}
