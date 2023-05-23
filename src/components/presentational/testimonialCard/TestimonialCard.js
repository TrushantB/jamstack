import React from "react";

function TestimonialCard({ cards, heading }) {
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="lg:w-5/12">
      <h2 className="">We love our Customers</h2>
      </div>
    
      <div className="container  gap-24 flex flex-col lg:w-8/12">
        {cards &&
          cards?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-6 p-3  drop-shadow-2xl justify-evenly items-center  py-5 rounded-3xl border border-black hover:bg-accent-100 hover:border-transparent"
            >
              <div className="flex gap-7">
                <div className="w-4/12 lg:w-3/12 flex items-start sm:justify-center mt-7 sm:mt-0">
                  <img src={item.image} />
                </div>
                <div className="flex-grow sm:text-left w-5/12 lg:w-10/12  mt-6 sm:mt-0">
                  <p className="leading-relaxed text-base pb-3">
                    {item.description}
                  </p>
                  <p>{item.name}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TestimonialCard;
