import React from "react";

const Card = ({ cardsArray }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:w-1/2 gap-5 card">
        {cardsArray?.map((item , index) => (
          <div
            key={index}
            className="bg-accent-100 rounded-3xl flex flex-col font-bold gap-4 py-3 px-6 pt-5"
          >
            <span className={`${item.class} text-tertiary text-6xl`}></span>
            <h5>{item.title}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
