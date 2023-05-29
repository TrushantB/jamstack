import { useState, useEffect } from "react";
import ReadMoreLink  from '../Link/Link'

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
    <div className="mx-auto container ">
      <div className="mx-4">
      {heading && <h2 className="lg:pl-1 mb-8">{heading}</h2>}
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-4/12 pb-12 md:pb-0">
          <ul className="p-1 flex flex-col gap-6">
            {itemList &&
              itemList?.map((item, index) => (
                <li
                  className={`flex gap-0 items-center cursor-pointer`}
                  onClick={() => handleItemClick(item)}
                  key={index}
                >
                  {item === selectedItem && (
                    <div className="w-2/12 flex">
                       <div className="diamond w-8 h-8 bg-tertiary"></div>
                    </div>
                  
                  )}
                  <h4
                    className={`${
                      item === selectedItem
                        ? "font-bold text-black text-4xl lg:ml-0 sm:ml-140 w-10/12"
                        : "text-gray-500 w-10/12 ml-[16.6667%]"}`}>
                    {item.label}
                  </h4>
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
                    <h2>{percentageItem.percentage}</h2>
                    <p className="">{percentageItem.description}</p>
                  </div>
                ))}
            </div>
            <div className="pt-5">
              <ReadMoreLink label={label} hasIcon={hasIcon} href={selectedItem?.href} />
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
