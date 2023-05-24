import Card from "./Card";

export default {
  title: "Core/Presentational Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: "Easy CMS",
      class: "icon-ic_Easy-CMS",
    },
    {
      title: "Ultra Fast",
      class: "icon-ic_Cheap-Scaling",
    },

    {
      title: "Highly Secure",
      class: "icon-ic_Highly-Secure",
    },

    {
      title: "Tailored Tech Stack",
      class: "icon-ic_Tailored-Tech-Stack",
    },

    {
      title: "Cheap Scaling",
      class: "icon-ic_Cheap-Scaling",
    },

    {
      title: "Easy Maintain",
      class: "icon-ic_Easy-Maintain",
    },
  ],
};
