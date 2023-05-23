import React from "react";

export default {
  title: "Core/Presentational Components/features",
  argTypes: {
    benefitsList: {
      type: Object,
    },
  },
};

const Features = ({ benefitsList }) => {
  return (
    <>
      <div className="lg:pl-28 lg:py-16">
        {benefitsList.map((item, index) => (
          <div key={index} className="border-t-4  ">
            <div className="flex gap-5 pt-5">
              <div className="pl-12">
                <h3 className={`${item.icon} relative`}> {item.heading}</h3>
                <p className="pb-8  pt-5">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const Default = (args) => <Features {...args} />;
Default.args = {
  benefitsList: [
    {
      icon: "circle",
      heading: "Everything for everyone ",
      description:
        "We cater from small businesses to big established businesses. We provide all kinds of solution right from planning to launch on any platform in web reality.",
    },
    {
      icon: "diamond",
      heading: "Being Faster to deliver",
      description:
        "Being faster to deliver - JAMstack provides fast development, and so do us too. Enhancing the features of JAMstack helps to build and complete projects on time.",
    },
    {
      icon: "pentagon",
      heading: "Wise experts",
      description:
        "We are experts in what we do. Our team has hands on on the modern and trendy tools with great knowledge of choosing them wisely. We strictly follow a systematic agile process of working that yields in excellent, robust and world class projects.",
    },
    {
      icon: "diamond",
      heading: "Pocket friendly",
      description:
        "With us it’s always a pocket friendly, time saving and easy to work. We do not exaggerate on costs and make it easy for everyone to provide awesome projects.",
    },
  ],
};
