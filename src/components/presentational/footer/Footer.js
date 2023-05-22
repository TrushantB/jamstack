import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Footer = ({
  footerLogo,
  copyRight,
  socialIcons,
  footerMenu,
  secondaryMenu,
}) => {
  return (
    <>
      <footer className="border-t my-44">
        <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-6 lg:col-span-7 sm:p-5 lg:p-10 mt-10 sm:m-0">
            <div>
              <img className="w-60 h-10" src={footerLogo?.url} alt="logo" />
            </div>
            <div className="flex gap-4 mt-3">
              <div className=" flex gap-7">
                {socialIcons.map((item, index) => (
                  <a className="flex items-center" key={index} href={item.link}>
                    <span className={`${item.icon} text-2xl`}></span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-5 mt-5 sm:mt-0">
            <ul className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:p-5 lg:p-10">
              {footerMenu.map((menuItems, index) => (
                <li key={index} className="font-semibold mb-2">
                  <a href={menuItems.href} target={menuItems.target}>
                    {menuItems.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:p-5 lg:p-10 mt-5 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryMenu.map((menuItems, index) => (
              <a href={menuItems.href} className="font-bold">
                {menuItems.label}
              </a>
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

Footer.propTypes = {
  footerLogo: PropTypes.string,
  copyRight: PropTypes.string,
  socialIcons: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
  footerMenu: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
    })
  ),
  secondaryMenu: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};

export default Footer;
