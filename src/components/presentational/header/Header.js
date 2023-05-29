import { React, useState, useEffect } from "react";
import Link from 'next/link'

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.padding = '0 10px 0 0';
    } else {
      document.body.style.overflow = 'visible';
    }
  };
  useEffect(() => {
    document.body.style.overflow = 'visible';
  }, [])

  return (
    <>
      <div className="sticky top-0 z-50">
        <nav className="bg-white border-gray-200">
          <div className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8">
            <div className="flex items-center justify-between w-full gap-5">
              <Link href={logoUrl?.herf} className="flex items-center">
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
                      href={menuItems.href}
                      className={`${menuItems.href==="contact" ? "bg-pink-500 text-white rounded-full text-xs border-solid px-3 py-2 font-medium" : "block py-2 pl-3 pr-4 text-xs font-medium text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 active:text-pink-500"}`}
                    >
                      {menuItems.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                id="dropdownUserAvatarButton"
                data-dropdown-toggle="dropdownAvatar"
                className={` header-toggle ${isOpen ? 'header-toggle-open' : ''} `}
                type="button"
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
              </button>
            </div>
            {isOpen && (
              <div className="fixed top-0 right-0 z-10 flex flex-col h-screen overflow-y-scroll bg-accent-100 p-7 lg:w-4/12 rounded-3xl">
                {/* <div className="fixed top-5 right-10">
                  <span className="flex items-center justify-center w-8 h-8 p-1 bg-white rounded-full">
                    <button className="text-primary" onClick={toggleMenu}>
                      <svg width="16" height="16" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.26889" y1="18.8641" x2="17.6432" y2="1.31752" stroke="#F0027F" stroke-width="2" />
                        <line x1="1.19965" y1="1.31752" x2="17.5792" y2="18.8592" stroke="#F0027F" stroke-width="2" />
                      </svg>
                    </button>
                  </span>
                </div> */}

                <div>
                  <ul className="mt-10">
                    {headerMenu?.map((menuItems, index) => (
                      <li key={index}>
                        <Link
                          href={menuItems.href}
                          className="block py-2 pr-4 text-gray-900 rounded lg:hidden hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                        >
                          {menuItems.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-10">
                    {sidebarLink?.map((sidebarItems, index) => (
                      <li className="my-3" key={index}>
                        <h6>
                          <Link href={sidebarItems.href}>{sidebarItems.label}</Link>
                        </h6>
                      </li>
                    ))}
                  </ul>

                  <div className=" mt-14 mb-14">
                    <p>{description}</p>
                    <Link href={buttonLabel.href}>
                      <button className="mt-4 font-semibold" type="button">
                        {buttonLabel?.label}
                      </button>
                    </Link>
                  </div>

                  <div>
                    <h5 className="mb-3 font-medium ">{label}</h5>
                    <ul>
                      <li className="my-3">
                        <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
                      </li>
                      <li>
                        <Link className="my-3" href={`mailto:${email}`}>
                          {email}
                        </Link>
                      </li>
                      <li className="my-3">{country}</li>
                    </ul>
                  </div>

                  <div className="mb-4 lg:mt-6">
                    <ul className="flex items-center gap-3">
                      {socialLink?.map((item, index) => (
                        <li key={index}>
                          <Link href={item.href} target={item.target}>
                            <span className={`${item.iconName} text-xl`}></span>
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
                        href={menuItems.href}
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
                        <Link href={sidebarItems.href} target={menuItems.target}>
                          {sidebarLink.label}
                        </Link>
                      </h6>
                    </li>
                  ))}
                </ul>
                <ul>
                  <li>
                    <div className="pl-3 mt-14 mb-14">
                      <p>{description}</p>
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
      </div>
    </>
  );
};

export default Header;
