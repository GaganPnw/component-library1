import React from "react";
import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Click me",
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled",
  enabled: false,
};

export const Small = Template.bind({});
Small.args = {
  text: "Small",
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  text: "Large",
  size: "large",
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  text: "Custom Background",
  backgroundColor: "#ff0000",
};
