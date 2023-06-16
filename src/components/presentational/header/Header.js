import { React, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CustomPortableText } from "@/components/shared/CustomPortableText";
import { resolveHref } from "@/lib/sanity.links";

const Header = ({
  headerMenu,
  logoUrl,
  sidebarLink,
  description,
  buttonLabel,
  label,
  phoneNumber,
  email,
  country,
  socialLink,
  hamburgerLogo,
  hamburgerLogoalt,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState({});
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.padding = "0 10px 0 0";
    } else {
      document.body.style.overflow = "visible";
      document.body.style.padding = "0 0 0 0";
    }
  };
  useEffect(() => {
    document.body.style.overflow = "visible";
  }, []);

  useEffect(() => {
    setActiveMenu(router.pathname);
  }, [router.pathname]);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <>
      <a href="#main" className="skip-to-main-content-link">Skip to main content</a>
      <nav className="bg-white border-gray-200">
        <div className="flex items-center justify-between px-6 py-5 mx-auto max-w-7xl lg:px-8 lg:py-3 shadow shadow-slate-100">
          <div className="flex items-center justify-between w-full gap-5 ">
            <Link href={resolveHref(logoUrl?.herf)} className="flex items-center">
              <img
                src={logoUrl?.url}
                alt={logoUrl?.alt}
                className="header-logo"
              />
            </Link>
            <ul
              className={`${menuOpen ? "block" : "hidden"
                } lg:flex flex-col md:flex-row items-center justify-end p-4 md:p-0 mt-4 md:mt-0 md:space-x-8 rounded-lg bg-gray-50 md:bg-white dark:bg-gray-900 dark:border-gray-700 w-full hidden`}
            >
              {headerMenu?.map((menuItems, index) => (
                <li key={index}>
                  <Link
                    href={resolveHref(menuItems.href)}
                    className={`${`/${menuItems.href}` === activeMenu
                      ? "text-primary"
                      : ""
                      } ${menuItems.href === "contact"
                        ? "bg-pink-500 text-white rounded-full text-xs border-solid px-3 py-2 font-medium"
                        : "block py-2 pl-3 pr-4 text-xs font-medium text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 active:text-pink-500"
                      }`}
                  >
                    {menuItems.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button aria-label="menu"
              id="dropdownUserAvatarButton"
              data-dropdown-toggle="dropdownAvatar"
              className={` header-toggle ${isOpen ? "header-toggle-open" : ""
                } `}
              type="button"
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
            </button>
          </div>
          {isOpen && (
            <div className="fixed top-0 right-0 z-10 flex flex-col h-screen overflow-y-scroll bg-accent-100 p-7 lg:w-4/12 rounded-3xl">
              <div>
                <ul className="mt-10 lg:hidden">
                  {headerMenu?.map((menuItems, index) => (
                    <li
                      key={index}
                      className={`my-3 ${`/${menuItems.href}` === activeMenu
                        ? "text-primary"
                        : ""
                        }`}
                    >
                      <Link
                        href={`/${menuItems.href}`}
                        className="btn-link font-medium"
                        onClick={() => handleMenuClick(`/${menuItems.href}`)}
                      >
                        {menuItems.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="mt-10">
                  {sidebarLink?.map((sidebarItems, index) => (
                    <li
                      className={`my-3 ${`/${sidebarItems.href}` === activeMenu
                        ? "text-primary"
                        : ""
                        }`}
                      key={index}
                    >
                      <Link
                        href={resolveHref(sidebarItems.href)}
                        className="btn-link font-medium"
                        onClick={() =>
                          handleMenuClick(`/${sidebarItems.href}`)
                        }
                      >
                        {sidebarItems.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className=" mt-14 mb-14">
                  <CustomPortableText
                    paragraphClasses=""
                    value={description}
                  />
                  <Link href={resolveHref(buttonLabel.href)}>
                    <button
                      className="mt-4 font-semibold hover:underline hover:text-primary transition duration-200 ease"
                      type="button"
                    >
                      {buttonLabel?.label}
                    </button>
                  </Link>
                </div>

                <div>
                  <h5 className="mb-3 font-medium">{label}</h5>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        className="btn-link hover:underline"
                        href={`tel:${phoneNumber}`}
                      >
                        {phoneNumber}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn-link hover:underline"
                        href={`mailto:${email}`}
                      >
                        {email}
                      </Link>
                    </li>
                    <li>{country}</li>
                  </ul>
                </div>

                <div className="mb-4 lg:mt-6">
                  <ul className="flex items-center gap-3">
                    {socialLink?.map((item, index) => (
                      <li key={index}>


                        <Link
                          className={`btn-link ${item.href === activeMenu ? "text-primary" : ""
                            }`}
                          href={item.href}
                          target={item.target}
                          onClick={() => handleMenuClick(item.href)}
                        >
                          <span className="sr-only">{item.alt}</span>
                          <span aria-hidden="true" className={`${item.iconName} text-xl`}></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {menuOpen && (
            <div
              className={`${menuOpen ? "block" : "hidden"
                } sticky top-0 md:flex font-medium flex-col md:flex-row align-middle p-4 md:p-0 mt-4 md:mt-0 md:space-x-8 rounded-lg bg-gray-50 md:bg-white dark:bg-gray-900 dark:border-gray-700 w-full`}
            >
              <ul>
                {headerMenu?.map((menuItems, index) => (
                  <li key={index}>
                    <Link
                      href={resolveHref(menuItems.href)}
                      target={menuItems.target}
                      className="sticky block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                    >
                      {menuItems.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="mt-14">
                {sidebarLink?.map((sidebarItems, index) => (
                  <li className="py-2 pl-3" key={index}>
                    <h6>
                      <Link
                        href={resolveHref(sidebarItems.href)}
                        target={menuItems.target}
                      >
                        {sidebarLink.label}
                      </Link>
                    </h6>
                  </li>
                ))}
              </ul>
              <ul>
                <li>
                  <div className="pl-3 mt-14 mb-14">
                    <CustomPortableText
                      paragraphClasses="text-md md:text-xl"
                      value={description}
                    />
                    {/* <p>{description}</p> */}
                    <button className="mt-4 font-semibold" type="button">
                      {buttonLabel}
                    </button>
                  </div>
                </li>
                <li>
                  <div className="pl-3">
                    <h5 className="mb-3 font-medium ">{label}</h5>
                    <ul>
                      <li className="py-2">
                        <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
                      </li>
                      <li>
                        <Link className="py-2" href={`mailto:${email}`}>
                          {email}
                        </Link>
                      </li>
                      <li className="py-2">{country}</li>
                    </ul>
                  </div>
                </li>

                <li>
                  <div className="pl-3 mb-4 lg:mt-6">
                    <ul className="flex items-center gap-3">
                      {socialLink?.map((item, index) => (
                        <li key={index}>
                          <Link href={item.href} target={item.target}>

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
      </nav>
    </>
  );
};

export default Header;