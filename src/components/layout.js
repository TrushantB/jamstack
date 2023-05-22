import { useEffect, useState } from "react";
import { get } from "@/client/api";
import Header from "@/components/presentational/header/Header";
import Footer from "@/components/presentational/footer/Footer";

export default function Layout({ children }) {
  const [headerData, setHeaderData] = useState(null);
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    get("header").then((response) => {
      setHeaderData(response);
    });
  }, []);

  useEffect(() => {
    get("footer").then((response) => {
      setFooterData(response);
    });
  }, []);

  return (
    <main className="flex flex-col h-screen">
      <div className="">
        {headerData && <Header {...headerData} />}
        {children}
        {footerData && <Footer {...footerData} />}
      </div>
    </main>
  );
}
