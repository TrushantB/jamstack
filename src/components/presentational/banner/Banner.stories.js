import Banner from "../banner/Banner";
import placeHolder from '../../../assets/image/placeholderimage.svg'

export default {
  title: "Core/Presentational Components/Banner",
  component: Banner,
  argTypes: {
    heading: { control: "text" },
    image: { control: "text" },
    label: {
      control: { type: "text" },
      defaultValue: "Start A Project",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
      defaultValue: "medium",
    },
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary"],
      },
      defaultValue: "primary",
    },
    layout: {
      control: {
        type: "select",
        options: ["Image Left", "Image Bottom", "Banner No Image"],
      },
      defaultValue: "Image Left",
    },
  },
};

const Template = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "The ecosystem for building digital presence",
  image: placeHolder,
  type: "primary",
  label: "Start A Project",
  size: "medium",
  layout: "Image Left",
  onClick: () => alert("Button clicked"),
};