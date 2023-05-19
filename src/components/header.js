import { React, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { get } from "@/client/api";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    get("header").then((response) => {
      console.log(response);
      setHeaderData(response);
    });
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white">
      <div>
      <div className="container mx-auto px-4 md:px-8 py-4 md:py-6 flex flex-col lg:flex-row justify-between items-center">
            <div className="flex gap-5 w-full justify-between">
              <a href="#" className="flex items-center">
                <img
                  src={headerData?.logo?.url}
                  alt={headerData?.logo?.alt}
                  width={160}
                  height={40}
                />
              </a>
              <ul
                className={`${
                  menuOpen ? "block" : "hidden"
                } lg:flex font-medium flex-col md:flex-row align-middle justify-end p-4 md:p-0 mt-4 md:mt-0 md:space-x-8 rounded-lg bg-gray-50 md:bg-white dark:bg-gray-900 dark:border-gray-700 w-full hidden`}
              >
                {headerData?.headerMenu?.map((menuItems, index) => (
                  <li key={index}>
                    <Link href={menuItems.href} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                        {menuItems.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                id="dropdownUserAvatarButton"
                data-dropdown-toggle="dropdownAvatar"
                className="text-sm"
                type="button"
                onClick={toggleMenu}
              >
                <span className="sr-only"></span>
                <img
                  src={headerData?.hamburgerLogo?.url}
                  alt={headerData?.hamburgerLogo?.alt}
                  width={40}
                  height={40}
                />
              </button>
            </div>
            {isOpen && (
              <div className=" flex flex-col bg-accent-100  overflow-y-scroll h-screen  p-7  lg:w-4/12  rounded-3xl  absolute right-0 z-10 top-0">
                <div>
                  <div className="fixed top-4 right-4">
                    <span className="w-8 h-8 flex items-center justify-center p-1 bg-white rounded-full">
                      <button className="text-primary" onClick={toggleMenu}>
                        {headerData?.crossLogo?.url}
                      </button>
                    </span>
                  </div>

                  <div>
                    <ul className="mt-10">
                      {headerData?.headerMenu.map((menuItems, index) => (
                        <li key={index}>
                          <Link href={menuItems.href} className="block py-2 lg:hidden pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                              {menuItems.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-10">
                      {headerData.sidebarLink.map((sidebarItems, index) => (
                        <li className="my-3" key={index}>
                          <Link href={sidebarItems.href}>
                            <h6>
                              {sidebarItems.label}
                            </h6>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className=" mt-14 mb-14">
                      <p>{headerData?.description}</p>
                      <button className="mt-4 font-semibold" type="button">
                        {headerData?.buttonLabel.label}
                      </button>
                    </div>
                    <div>
                      <h5 className="mb-3 font-medium ">
                        {headerData?.Contactlabel}
                      </h5>
                      <ul>
                        <li className="my-3">
                          <a>{headerData?.address.phoneNumber}</a>
                        </li>
                        <li>
                          <a
                            className="my-3"
                            href={`mailto:${headerData?.address.email}`}
                          >
                            {headerData?.address.email}
                          </a>
                        </li>
                        <li className="my-3">{headerData?.address.country}</li>
                      </ul>
                    </div>
                    <div className="lg:mt-6 mb-4">
                      <ul className="flex items-center gap-3">
                        {headerData?.socialLink.map((item, index) => (
                          <li key={index}>
                            <Link href={item.href}>
                                <span
                                  className={`${item.iconName} text-xl`}
                                ></span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {menuOpen && (
              <div
                className={`${
                  menuOpen ? "block" : "hidden"
                } sticky top-0 md:flex font-medium flex-col md:flex-row align-middle p-4 md:p-0 mt-4 md:mt-0 md:space-x-8 rounded-lg bg-gray-50 md:bg-white dark:bg-gray-900 dark:border-gray-700 w-full`}
              >
                <ul>
                  {headerData?.headerMenu.map((menuItems, index) => (
                    <li key={index}>
                      <Link href={menuItems.href} className=" block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 sticky">
                          {menuItems.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="mt-14">
                  {headerData?.sidebarLink.map((sidebarItems, index) => (
                    <li className="py-2 pl-3" key={index}>
                      <Link href={sidebarItems.href}>
                        <h6>
                          {sidebarItems.label}
                        </h6>
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul>
                  <li>
                    <div className=" mt-14 mb-14 pl-3">
                      <p>{headerData?.description}</p>
                      <button className="mt-4 font-semibold" type="button">
                        {headerData?.buttonLabel.label}
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="pl-3">
                      <h5 className="mb-3 font-medium ">
                        {headerData?.Contactlabel}
                      </h5>
                      <ul>
                        <li className="py-2">
                          <a>{headerData?.address.phoneNumber}</a>
                        </li>
                        <li>
                          <a
                            className="py-2"
                            href={`mailto:${headerData?.address.email}`}
                          >
                            {headerData?.address.email}
                          </a>
                        </li>
                        <li className="py-2">{headerData?.address.country}</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="lg:mt-6 mb-4 pl-3">
                      <ul className="flex items-center gap-3">
                        {headerData?.socialLink.map((item, index) => (
                          <li key={index}>
                            <Link href={item.href}>
                                <span
                                  className={`${item.iconName} text-xl`}
                                ></span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
      </div>
    </header>
  );
}