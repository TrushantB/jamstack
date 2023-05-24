import React from "react";
import "./list.css";

export default {
  title: "Core/Presentational Components/List",
  argTypes: {
    list: {
      type: Object,
    },
  },
};

const List = ({ list }) => {
  return (
    <>
      <div>
        <ul className="p-1">
          {list.map((item, index) => (
            <li key={index} className="mb-2 flex gap-6 pl-12">
              <p className={`${item.icon} relative`}>{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const Default = (args) => <List {...args} />;
Default.args = {
  list: [
    {
      icon: "circle",
      label: "High Peformance",
    },
    {
      icon: "diamond",
      label: "Futuristic tech solutions",
    },
    {
      icon: "pentagon",
      label: "Uniquely engineered ",
    },
  ],
};
