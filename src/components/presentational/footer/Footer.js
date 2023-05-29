import React from "react";
import Link from 'next/link'

const Footer = ({
  footerLogo,
  copyRight,
  socialIcons,
  footerMenu,
  secondaryMenu,
}) => {
  return (
    <>
      <footer className="container lg:mx-auto mt-7">
        <div className="grid grid-cols-12  mx-4">
          <div className="col-span-12 mt-10 sm:col-span-6 lg:col-span-7 sm:p-5 lg:p-10 lg:pl-0 sm:m-0 lg:pt-0">
            <div>
              <Link href={footerLogo?.href}>
                <img className="h-10 w-60" src={footerLogo?.url} alt="logo" />
              </Link>
            </div>
            <div className="flex gap-4 mt-3">
              <div className=" flex gap-7">
                {socialIcons?.map((item, index) => (
                  <Link className="flex items-center" key={index} target={item.target} href={item.href}>
                    <span className={`${item.icon} text-2xl`}></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-5 mt-5 sm:mt-0  mx-4">
            <ul className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:p-0 lg:p-0">
              {footerMenu?.map((menuItems, index) => (
                <li key={index} className="font-semibold mb-2">
                  <Link href={menuItems.href} target={menuItems.target}>
                    {menuItems.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:py-5 lg:py-10 mt-5 sm:mt-0  mx-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6 col-span-2">
            {secondaryMenu?.map((menuItems, index) => (
              <Link key={index} href={menuItems.href} className="font-bold">
                {menuItems.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center mt-5 sm:items-start sm:justify-end bold sm:mt-0">
            <span className="font-bold">&copy;{copyRight}</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
