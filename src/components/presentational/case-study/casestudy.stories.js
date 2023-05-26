import Casestudy from "./casestudy";

export default {
  title: "Core/Presentational Components/Case-Study",
  component: Casestudy,
  argsTpes: {
    heading: { control: "text" },
    description: { control: "text" },
    itemList: {
      control: {
        type: "object",
        separator: ";",
        labels: { value: "lists" },
      },
    },
    icon: {
      control: {
        type: "text",
      },
    },
    hasIcon: {
      control: "boolean",
    },
    label: { control: "text" },
  },
};

const Template = (args) => <Casestudy {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Case Study",
  description:
    "We are experts in what we do. Our team has hands on on the modern and trendy tools with great knowledge of choosing them wisely. We strictly follow a systematic agile process of working that yields in excellent, robust and world class projects.",
  itemList: [
    {
      label: "Wise Experts",
      href: "",
      percentageList: [
        {
          percentage: "120%",
          description: "Increase in Content Engagement",
        },
        {
          percentage: "80%",
          description: "Decrease in Time from Idea to Publishing",
        },
        {
          percentage: "150%",
          description: "Indexed Pages",
        },
      ],
    },
    {
      label: "Logic Tales",
      href: "",
      percentageList: [
        {
          percentage: "120%",
          description: "Increase in Content Engagement",
        },
        {
          percentage: "30%",
          description: "Decrease in Time from Idea to Publishing",
        },
        {
          percentage: "190%",
          description: "Indexed Pages",
        },
      ],
    },
    {
      label: "Intercollab",
      href: "",
      percentageList: [
        {
          percentage: "100%",
          description: "Increase in Content Engagement",
        },
        {
          percentage: "10%",
          description: "Decrease in Time from Idea to Publishing",
        },
        {
          percentage: "10%",
          description: "Indexed Pages",
        },
      ],
    },
    {
      label: "Skype",
      href: "",
      percentageList: [
        {
          percentage: "110%",
          description: "Increase in Content Engagement",
        },
        {
          percentage: "60%",
          description: "Decrease in Time from Idea to Publishing",
        },
        {
          percentage: "90%",
          description: "Indexed Pages",
        },
      ],
    },
  ],
  hasIcon: true,
  label: "Read More",
  icon: "diamond",
};
