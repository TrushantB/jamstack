import React from "react";

const Colors = () => {
  return (
    <>
      <div className="flex gap-9 flex-wrap">
        <div className="flex flex-col items-center w-2/12 gap-3 rounded border p-8 border-slate-50">
          <div className="bg-primary rounded-full p-10 w-2.5 h-2.5 text-xs border-2 border-black "></div>
          <span>Primary</span>
          <span className="text-xs text-gray-400 italic">#e002a2</span>
        </div>

        <div className="flex flex-col items-center w-2/12 gap-3 rounded border p-8 border-slate-50">
          <div className="bg-secondary rounded-full p-10 w-2.5 h-2.5 text-xs border-2 border-black "></div>
          <span>Secondary</span>
          <span className=" text-xs text-gray-400 italic">#4767F6</span>
        </div>

        <div className="flex flex-col items-center w-2/12 gap-3 rounded border p-8 border-slate-50">
          <div className="bg-tertiary rounded-full p-10 w-2.5 h-2.5 text-xs border-2 border-black "></div>
          <span>Tertiary</span>
          <span className=" text-xs text-gray-400 italic">#FF5223</span>
        </div>

        <div className="flex flex-col items-center w-2/12 gap-3 rounded border p-8 border-slate-50">
          <div className="bg-white rounded-full p-10 w-2.5 h-2.5 text-xs border-2 border-black "></div>
          <span>White</span>
          <span className=" text-xs text-gray-400 italic">#ffffff</span>
        </div>

        <div className="flex flex-col items-center w-2/12 gap-3 rounded border p-8 border-slate-50">
          <div className="bg-accent-100 rounded-full p-10 w-2.5 h-2.5 text-xs border-2 border-black "></div>
          <span>Accent 100</span>
          <span className="text-xs text-gray-400 italic">#F1F2F6</span>
        </div>

        <div className="flex flex-col items-center w-2/12 gap-3 rounded border p-8 border-slate-50">
          <div className="bg-accent-200 rounded-full p-10 w-2.5 h-2.5 text-xs border-2 border-black "></div>
          <span>Accent 200</span>
          <span className=" text-xs text-gray-400 italic">#D1D5E5</span>
        </div>

        <div className="flex flex-col items-center w-2/12 gap-3 rounded border p-8 border-slate-50">
          <div className="bg-black rounded-full p-10 w-2.5 h-2.5 text-xs border-2 border-black "></div>
          <span>Black(Body Text)</span>
          <span className="text-xs text-gray-400 italic">#1c1c1c</span>
        </div>
      </div>
    </>
  );
};

export const Default = Colors;
