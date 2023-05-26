import Header from "./Header";
import logo from '../../../assets/image/logo.png'

export default {
  title: "Core/Presentational Components/Header",
  component: Header,
  argTypes: {
    headerMenu: {
      control: {
        type: "object",
        separator: ";",
      },
    },
    sidebarLink: {
      control: {
        type: "object",
        separator: ";",
      },
    },
    description: { control: "text" },
    buttonLabel: { control: "text" },
    label: { control: "text" },
    phoneNumber: { control: "text" },
    email: { control: "text" },
    country: { control: "text" },
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoUrl:logo,
  headerMenu: [
    { label: "PRICING", href: "" },
    { label: "WEBJ", href: "" },
    { label: "MOBJ", href: "" },
    { label: "ECOMMJ", href: "" },
    { label: "CONTACT US", href: "" },
  ],
  sidebarLink: [
    { label: "WHAT IS JAMSTACK", href: "" },
    { label: "OUR ECOSYSTEM", href: "" },
    { label: "ABOUT US", href: "" },
    { label: "CASE STUDIES", href: "" },
    { label: "BLOG", href: "" },
  ],
  description:
    "Leading brand in enhancing the JAMstack to offer technical solutions to accelerate the phases of digital presence",
  buttonLabel: "Let’s Talk",
  label: "Contact Information",
  phoneNumber: "+990-123-4567",
  email: "geexu@gmail.com",
  country: "India",
  socialLink : [
    {iconName : "icon-mail" , href : ""},
    {iconName : "icon-instagam" , href : ""},
    {iconName : "icon-whatsapp1" , href : ""},
    {iconName : "icon-facebook2" , href : ""},
    {iconName : "icon-twitter" , href : ""},
  ]
};
