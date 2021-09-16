import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Click me",
  size: "md",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
  label: "Click me",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "red",
  label: "Click me",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "red",
  label: "Click me",
  size: "lg",
};

export const Long_Label = Template.bind({});
Long_Label.args = {
  backgroundColor: "red",
  label: "Click me a long label",
  size: "me",
};
