import React from "react";
import Link from "./link";

export default {
  title: "Core/Presentational Components/Link",
  component: Link,
  argTypes: {
    hasIcon: {
      control: "boolean",
    },
    label: { control: "text" },
  },
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  hasIcon: true,
  label: "Read Blog",
};
