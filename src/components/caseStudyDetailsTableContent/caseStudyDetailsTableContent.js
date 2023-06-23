import { React, useEffect, useState } from "react";
import { CustomPortableText } from "../shared/CustomPortableText";
import { useRouter } from "next/router";
import CaseStudyContactCard from "../caseStudyContactCard/caseStudyContactCard";

export default function CaseStudyDetailsTableContent({ caseStudyData }) {
  const [selectedContent, setSelectedContent] = useState({});
  const router = useRouter();
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/${router.asPath}`;

  const handleItemClick = (item) => {
    setSelectedContent(item);
  };

  useEffect(() => {
    caseStudyData?.tabelContent?.length &&
      setSelectedContent(caseStudyData.tabelContent[0]);
  }, [caseStudyData]);

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="my-8 lg:my-16">
          <div className="md:flex justify-center items-start md:gap-4 lg:gap-4">
            <div className="md:w-1/4 px-3 mb-8 lg:mb-0 lg:sticky lg:top-[100px]">
              <div className="toc mb-8">
                <h4 className="text-xl">{caseStudyData?.tableHeading}</h4>
                <ol className="list-decimal font-medium text-sm ml-4">
                  {caseStudyData?.tabelContent?.map((item, index) => (
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
              
              {
                caseStudyData?.suggestionPost?.title && <div className="my-6 sticky top-0 hidden lg:block">
                  <CaseStudyContactCard caseStudyData={caseStudyData} />
                </div>
              }
            </div>
            <div className="lg:w-3/4">
              {caseStudyData?.tabelContent?.map((item, index) => (
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
              {/* {
                caseStudyData?.author &&
                <div className="flex md:justify-end">
                  <BlogContentWriting author={caseStudyData?.author} />
                </div>
              } */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
