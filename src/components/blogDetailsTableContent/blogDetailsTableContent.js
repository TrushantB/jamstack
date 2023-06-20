import { React, useEffect, useState } from "react";
import BlogContactCard from "../blogContactCard/blogContactCard";
import BlogContentWriting from "../blogContentWriting/blogContentWriting";
import { CustomPortableText } from "../shared/CustomPortableText";

export default function BlogDetailsTableContent({ blogData }) {
  const [selectedContent, setSelectedContent] = useState({});

  const handleItemClick = (item) => {
    setSelectedContent(item);
  };

  useEffect(() => {
    blogData?.tabelContent?.length &&
      setSelectedContent(blogData.tabelContent[0]);
  }, [blogData]);

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="my-8 lg:my-16">
          <div className="md:flex justify-center items-start md:gap-4 lg:gap-4">
            <div className="md:w-1/4 px-3 mb-8 lg:mb-0 lg:sticky lg:top-[100px]">
              <div className="toc mb-8">
                <h4 className="text-xl">{blogData?.tableHeading}</h4>
                <ol className="list-decimal font-medium text-sm ml-4">
                  {blogData?.tabelContent?.map((item, index) => (
                    <li
                      key={index}
                      className={`my-3 ${selectedContent === item ? "text-primary" : ""
                        } hover:text-primary`}
                    >
                      <a href={`#${index}`}>
                        <button
                          className="active:text-primary cursor-pointer text-sm text-left font-medium hover:text-primary transition ease-in delay-50"
                          onClick={() => handleItemClick(item)}
                        >
                          {item.title}
                        </button>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h5 className="text-xl ">{blogData?.iconHeading}</h5>
                <ul className="my-2 flex items-center gap-6">
                  {blogData?.socialSharing?.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        target={item.target}
                        className="hover:text-primary transition ease-in delay-50
                      "
                      >
                        <i className={item.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {
                blogData?.suggestionPost?.title && <div className="my-6 sticky top-0 hidden lg:block">
                  <BlogContactCard blogData={blogData} />
                </div>
              }
            </div>
            <div className="lg:w-3/4">
              {blogData?.tabelContent?.map((item, index) => (
                <div key={index} className="blogDetailsItems" id={`${index}`}>
                  <h2 className="px-3">{item.title}</h2>
                  <div
                    key={index}
                    className="px-3 blogDetailsInnerPage"
                  >
                    <CustomPortableText value={item.content} />
                  </div>
                </div>
              ))}
              <div className="flex md:justify-end">
                <div className="px-3 ">
                  <BlogContentWriting author={blogData?.author} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
