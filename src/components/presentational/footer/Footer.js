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
      <footer className="mt-7">
        <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-6 lg:col-span-6 sm:p-5 lg:p-10 lg:pl-0 mt-10 sm:m-0">
            <div>
              <Link href={footerLogo?.href}>
                <img className="w-60 h-10" src={footerLogo?.url} alt="logo" />
              </Link>
            </div>
            <div className="flex gap-4 mt-3">
              <div className=" flex gap-7">
                {socialIcons.map((item, index) => (
                  <Link className="flex items-center" key={index} target={item.target} href={item.href}>
                    <span className={`${item.icon} text-2xl`}></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-6 mt-5 sm:mt-0">
            <ul className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-5 lg:p-10">
              {footerMenu.map((menuItems, index) => (
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
            {secondaryMenu.map((menuItems, index) => (
              <Link key={index} href={menuItems.href} className="font-bold">
                {menuItems.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center sm:items-start sm:justify-end bold mt-5 sm:mt-0">
            <span className="font-bold">&copy;{copyRight}</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
