import Footer from "./Footer";

export default {
  title: "Core/Presentational Components/Footer",
  component: Footer,
  argTypes: {
    footerLogo: { control: "text" },
    copyRight: { control: "text" },
    footerMenu: {
      control: {
        type: "object",
        separator: ";",
      },
    },
    socialIcons: {
      control: {
        type: "object",
        separator: ";",
        labels: {
          image: "Image URL",
          alt: "Alternative Text",
          link: "Link URL",
        },
      },
    },
    secondaryMenu: {
      control: {
        type: "object",
        separator: ";",
      },
    },
  },
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  footerLogo:
    "https://raw.githubusercontent.com/MurtazaKp/Jamstack/main/public/images/Jamstack%2B.png",
  copyRight: "Jamstack 2023 ",
  footerMenu: [
    {
      label: "Ecosystem",
      href: "",
      target: "_self",
    },
    {
      label: "Know Jamstack",
      href: "",
      target: "_self",
    },
    {
      label: "FAQ",
      href: "",
      target: "_self",
    },
    {
      label: "EcommJ",
      href: "",
      target: "_self",
    },
    {
      label: "WebJ",
      href: "",
      target: "_self",
    },
    {
      label: "About Us",
      href: "",
      target: "_self",
    },
    {
      label: "Pricing",
      href: "",
      target: "_self",
    },
    {
      label: "FAQ",
      href: "",
      target: "_self",
    },

    {
      label: "Blog",
      href: "",
      target: "_self",
    },
  ],
  socialIcons: [
    {
      icon: "icon-mail1",
      link: "#",
    },
    {
      icon: "icon-instagam",
      link: "#",
    },
    {
      icon: "icon-twitter",

      link: "#",
    },
    {
      icon: "icon-facebook2",
      link: "#",
    },
    {
      icon: "icon-whatsapp1",
      link: "#",
    },
  ],
  secondaryMenu: [
    {
      label: "Terms and conditions",
      href: "",
      target: "_self",
    },
    {
      label: "Security - GDPR, SOC",
      href: "",
      target: "_self",
    },
    {
      label: "Privacy Policy",
      href: "",
      target: "_self",
    },
  ],
};
