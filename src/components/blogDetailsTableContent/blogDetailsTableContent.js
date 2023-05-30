import { React, useEffect, useState } from "react";
import { get } from "@/client/api";
import BlogContactCard from "../blogContactCard/blogContactCard";
import BlogContentWriting from "../blogContentWriting/blogContentWriting";
import BlogCard from "../blogCard/BlogCard";

export default function BlogDetailsTableContent({ blogData }) {
  const [selectedContent, setSelectedContent] = useState({});

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
      <div className="container mx-auto">
        <div className="my-8 lg:my-16">
          <div className="md:flex justify-center items-start md:gap-6 lg:gap-16">
            <div className="md:w-1/4 px-3">
              <h4 className="text-xl">{blogData?.tableHeading}</h4>
              <ol className="list-decimal font-semibold ml-6">
                {blogData?.tabelContent.map((item, index) => (
                  <li key={index} className="active:text-primary my-3">
                    <div
                      className="active:text-primary cursor-pointer"
                      onClick={() => handleItemClick(item)}
                    >
                      {item.title}
                    </div>
                  </li>
                ))}
              </ol>
              <div>
                <h5 className="text-xl ">{blogData?.iconHeading}</h5>

                <ul className="my-2 flex items-center gap-6 ">
                  {selectedContent?.socialSharing?.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} target={item.target}>
                        <i className={item.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="my-6 sticky top-0">
                <BlogContactCard blogContactCard={blogData?.blogContactCard} />
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
