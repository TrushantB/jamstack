import { useState, useEffect } from "react";
import ReadMoreLink from "../Link/Link";
import { resolveHref } from "@/lib/sanity.links";

const MAP_ICONS = {
  circle: "/circle.png",
  diamond: "/rectange.png",
  pentagon: "/pentagon.png",
  placeholder: "/placeholderimage.svg",
};

function CaseStudy({ heading, icon, description, itemList, hasIcon, label }) {
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    setSelectedItem(itemList?.length ? itemList[0] : null);
  }, [itemList]);

  const getIcon = (icon) => {
    if (icon.startsWith("http")) {
      return icon;
    }
    return MAP_ICONS[icon] || MAP_ICONS.placeholder;
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="mx-auto container ">
      <div className="mx-4">
        {heading && <h2 className="lg:pl-1 mb-6 lg:mb-8 text-center lg:text-left">{heading}</h2>}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-4/12  pb-6 lg:pb-12 lg:pb-0">
            <ul className="p-1 flex flex-col gap-6">
              {itemList &&
                itemList?.map((item, index) => (
                  <li
                    className={``}
                    key={index}
                  >
                    <button className="flex gap-0 items-center w-full text-left" onClick={() => handleItemClick(item)}>
                      {item === selectedItem && (
                        <div className="w-2/12 flex">
                          <div className="diamond w-6 lg:w-8 lg:h-8  h-6 bg-tertiary"></div>
                        </div>
                      )}
                      <h3
                        className={`heading-4 ${item === selectedItem
                          ? "font-bold text-black text-2xl lg:ml-0 sm:ml-140 w-10/12 "
                          : "text-gray-500 w-10/12 ml-[16.6667%]"
                          }`}
                      >
                        {item?.label}
                      </h3>
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          <div className="lg:w-8/12 lg:px-7">
            <div className="p-5 bg-accent-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-5">
                {selectedItem &&
                  selectedItem?.percentageList?.map((percentageItem, index) => (
                    <div className={`cursor-auto`} key={index}>
                      <h4 className="heading-2">{percentageItem?.percentage}</h4>
                      <p className="">{percentageItem?.description}</p>
                    </div>
                  ))}
              </div>
              <div className="pt-5">
                <ReadMoreLink
                  label={label || 'Read More'}
                  hasIcon={hasIcon}
                  target="_self"
                  href={resolveHref( 'case-study-details' ,selectedItem?.href) || ''}
                />
              </div>
            </div>

            {description && (
              <div className="pt-10">
                <p>{description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
