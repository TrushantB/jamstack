import { useState, useEffect } from "react";
import ReadMoreLink from "../link/link";

import diamond from "../../../assets/image/rectangle.png";
import circle from "../../../assets/image/circle.png";
import pentagon from "../../../assets/image/pentagon.png";
import placeholder from "../../../assets/image/icon-placeholder.png";

const MAP_ICONS = {
  circle,
  diamond,
  pentagon,
  placeholder,
};

const Casestudy = ({
  heading,
  icon,
  description,
  itemList,
  hasIcon,
  label,
}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setSelectedItem(itemList?.length ? itemList[0] : []);
  }, []);

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
            {itemList.map((item, index) => (
              <li
                className={`flex gap-4 items-center cursor-pointer`}
                onClick={() => handleItemClick(item)}
                key={index}
              >
                {item === selectedItem && (
                  <img className="w w-6 h-6" src={getIcon(icon)} alt="icon" />
                )}
                <h4
                  className={`${item === selectedItem
                    ? "font-bold text-black text-2xl"
                    : "text-gray-500"
                    }`}
                >
                  {item.label}
                </h4>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-7/12 lg:p-10 lg:px-7">
          <div className=" p-5 bg-accent-100">
            <div className="flex flex-col lg:flex-row  gap-5 lg:gap-0">
              {selectedItem?.percentageList.map((percentageItem, index) => (
                <div className={`cursor-pointer`} key={index}>
                  <h2>{percentageItem.percentage}</h2>
                  <p className="w-10/12">{percentageItem.description}</p>
                </div>
              ))}
            </div>
            <div className="pt-5 ">
              <ReadMoreLink
                label={label}
                hasIcon={hasIcon}
                href={`${selectedItem?.href}`}
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
  );
};

export default Casestudy;
