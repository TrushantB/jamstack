import React from "react";
import Button from "./Button";

export default {
  title: "Core/Form Components/Button",
  component: Button,
  argTypes: {
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
        options: ["primary", "secondary", "tertiary", "disabled"],
      },
      defaultValue: "primary",
    },
    onClick: {
      action: "clicked",
    },
  },
};

const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  type: "primary",
  label: "Start A Project",
  size: "medium",
  onClick: () => alert("Button clicked"),
};
