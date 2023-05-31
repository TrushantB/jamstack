import { React, useEffect, useState } from "react";
import { get } from "@/client/api";
import BlogContactCard from "../blogContactCard/blogContactCard";
import BlogContentWriting from "../blogContentWriting/blogContentWriting";

export default function BlogDetailsTableContent({ blogData }) {
  const [selectedContent, setSelectedContent] = useState({});
  console.log("blodDetailsTableContent--->" , blogData)
  console.log("blodDetailsTableContent========////////////////--->" , blogData?.tabelContent)
  const handleItemClick = (item) => {
    setSelectedContent(item);
  };
  useEffect(() => {
    blogData?.tabelContent?.length &&
      setSelectedContent(blogData.tabelContent[0]);
  }, [blogData]);
  console.log(selectedContent.socialSharing);

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="my-8 lg:my-16">
          <div className="md:flex justify-center items-start md:gap-4 lg:gap-4">
            <div className="md:w-1/4 px-3 mb-8 lg:mb-0">
              <div className="toc mb-8">
                <h4 className="text-xl">{blogData?.tableHeading}</h4>
                <ol className="list-decimal font-medium text-sm ml-4">
                  {blogData?.tabelContent.map((item, index) => (
                    <li key={index} className="active:text-primary my-3">
                      <button
                        className="active:text-primary cursor-pointer text-sm text-left font-medium hover:text-primary transition ease-in delay-50"
                        onClick={() => handleItemClick(item)}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h5 className="text-xl ">{blogData?.iconHeading}</h5>
                <ul className="my-2 flex items-center gap-6">
                  {selectedContent?.socialSharing?.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} target={item.target} className="hover:text-primary transition ease-in delay-50
                      ">
                        <i className={item.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="my-6 sticky top-0 hidden lg:block">
                <BlogContactCard suggestionPost={blogData?.tabelContent} />
              </div>
            </div>
            <div className="lg:w-3/4">
              {selectedContent.content && (
                <div
                  className="px-3 blogDetailsInnerPage"
                  dangerouslySetInnerHTML={{ __html: selectedContent.content }}
                />
              )}
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
