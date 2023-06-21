import React from "react";

export default function BlogContactCard({ blogData }) {
  return (
    <div className="p-4 bg-slate-200 rounded-xl">
      <a className="block" href="#">
        <img
          className="w-full h-full"
          src={blogData?.suggestionPost?.image}
          alt={blogData?.suggestionPost?.alt}
        />
      </a>
      <h4 className="font-semibold text-base my-5">
        {blogData?.suggestionPost?.title}
      </h4>
      <div className="font-semibold">
        <a className="text-primary text-2xl" href="#">
          {blogData?.suggestionPost?.buttonLabel}
        </a>
      </div>
    </div>
  );
}
