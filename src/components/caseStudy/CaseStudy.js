import { useState, useEffect } from "react";
import Link from "../Link/Link";

const MAP_ICONS = {
  circle: "/circle.png",
  diamond: "/rectange.png",
  pentagon: "/pentagon.png",
  placeholder: "/placeholderimage.svg",
};

function CaseStudy({ heading, icon, description, itemList, hasIcon, label }) {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setSelectedItem(itemList?.length ? itemList[0] : []);
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
    <div className="">
      {heading && <h2 className="lg:pl-16">{heading}</h2>}
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-5/12 p-2 lg:p-10">
          <ul className="p-1 lg:  flex flex-col gap-6">
            {itemList &&
              itemList?.map((item, index) => (
                <li
                  className={`flex gap-4 items-center cursor-pointer`}
                  onClick={() => handleItemClick(item)}
                  key={index}
                >
                  {item === selectedItem && (
                   <div className="diamond w-8 h-8 bg-tertiary"></div>
                  )}
                  <h4
                    className={`${
                      item === selectedItem
                        ? "font-bold text-black text-4xl"
                        : "text-gray-500"}`}>
                    {item.label}
                  </h4>
                </li>
              ))}
          </ul>
        </div>
        <div className="lg:w-7/12 lg:p-10 lg:px-7">
          <div className=" p-5 bg-accent-100">
            <div className="flex flex-col lg:flex-row  gap-5 lg:gap-0">
              {selectedItem &&
                selectedItem?.percentageList?.map((percentageItem, index) => (
                  <div className={`cursor-pointer`} key={index}>
                    <h2>{percentageItem.percentage}</h2>
                    <p className="w-10/12">{percentageItem.description}</p>
                  </div>
                ))}
            </div>
            <div className="pt-5">
              <Link label={label} hasIcon={hasIcon} href={selectedItem?.href} />
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
  );
}

export default CaseStudy;
