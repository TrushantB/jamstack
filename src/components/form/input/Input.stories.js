import InputFields from "./Input";

export default {
  title: "Core/Form Components/Input",
  component: InputFields,
  argTypes: {
    placeholder: { control: "text" },
    buttonlabel: { control: "text" },
    isButton: {
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
  },
};

const Template = (args) => <InputFields {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Paste website URL here",
  buttonlabel: "Request Report",
};