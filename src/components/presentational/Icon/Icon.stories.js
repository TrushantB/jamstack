import React, { useState } from "react";
import iconsData from "../../../assets/icon.json";
import "./icon.css";

export default {
  title: "Core/Presentational Components/Icon",
  argTypes: {
    color: {
      control: "color",
    },
  },
};

const Icons = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIcons = iconsData.icons.filter((icon) =>
    icon.properties.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="flex items-center gap-2 my-4 ">
        <p className="pl-2">Filter Icons :</p>
        <input
          className="border-2 border-gray-400 p-1 pl-3 w-1/2"
          placeholder="Search icons"
          value={searchQuery}
          onChange={handleSearchInputChange}
        ></input>
      </div>

      {filteredIcons.length === 0 ? (
        <p>No icons found.</p>
      ) : (
        <table className="border-collapse  table-fixed mx-auto w-full">
          <thead>
            <tr className="">
              <th className="border-b-2 border-gray-500 p-2 text-left font-primary text-gray-700">
                Icon Name
              </th>
              <th className="border-b-2 border-gray-500 p-2 text-left font-primary text-gray-700">
                HTML tag
              </th>
              <th className="border-b-2 border-gray-500 p-2 text-left font-primary text-gray-700 pl-5">
                Example
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredIcons.map((icon) => (
              <tr key={icon.properties.name}>
                <td className="p-2 capitalize border-b-2 border-slate-300 text-sm text-gray-600">
                  {icon.properties.name}
                </td>
                <td className="p-2 border-b-2 border-slate-300 text-sm text-indigo-600">{`<span class="icon-${icon.properties.name}"></span>`}</td>
                <td className="p-2 border-b-2 border-slate-300">
                  <div>
                    <span
                      className={`icon-${icon.properties.name} text-xs mx-2`}
                      style={{ color: props.color }}
                    ></span>

                    <span
                      className={`icon-${icon.properties.name} text-md mx-2`}
                      style={{ color: props.color }}
                    ></span>
                    <span
                      className={`icon-${icon.properties.name} text-lg mx-2`}
                      style={{ color: props.color }}
                    ></span>
                    <span
                      className={`icon-${icon.properties.name} text-xl mx-2`}
                      style={{ color: props.color }}
                    ></span>
                    <span
                      className={`icon-${icon.properties.name} text-2xl mx-2`}
                      style={{ color: props.color }}
                    ></span>
                    <span
                      className={`icon-${icon.properties.name} text-3xl mx-2`}
                      style={{ color: props.color }}
                    ></span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export const Default = (args) => <Icons {...args} />;
Default.args = {
  color: "#000000",
};
