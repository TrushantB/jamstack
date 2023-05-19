import { React, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { get } from "@/client/api";

export default function Footer() {
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    get("footer").then((response) => {
      console.log(response);
      setFooterData(response);
    });
  }, []);

  return (
    <footer className="border-t my-44">
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-6 lg:col-span-7 sm:p-5 lg:p-10 mt-10 sm:m-0">
          <div>
            <img
              className="w-60 h-10"
              src={footerData?.logo?.url}
              alt={footerData?.logo?.alt}
            />
          </div>
          <div className="flex gap-4 mt-3">
            <div className="flex gap-7">
              {footerData?.socialIcons &&
                footerData.socialIcons.map((item, index) => (
                  <Link
                    className="flex items-center"
                    key={index}
                    href={item.href}
                  >
                    <span className={`${item.icon} text-2xl`}></span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-5 mt-5 sm:mt-0">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:p-5 lg:p-10">
            {footerData?.footerMenu &&
              footerData.footerMenu.map((menuItems, index) => (
                <li key={index} className="font-semibold mb-2">
                  <Link href={menuItems.href} target={menuItems.target}>
                    {menuItems.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:p-5 lg:p-10 mt-5 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {footerData?.secondaryMenu &&
            footerData.secondaryMenu.map((menuItems, index) => (
              <Link key={index} href={menuItems.href} className="font-bold">
                {menuItems.label}
              </Link>
            ))}
        </div>
        <div className="flex items-center sm:items-start sm:justify-end bold mt-5 sm:mt-0">
          <span className="font-bold">
            &copy;{footerData?.copyRight}
          </span>
        </div>
      </div>
    </footer>
  );
}