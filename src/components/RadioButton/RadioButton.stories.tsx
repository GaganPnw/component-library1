import React from "react";
import { Story, Meta } from "@storybook/react";

import RadioButton, { RadioButtonProps } from "./RadioButton";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    backgroundColor: { control: "color" },
    font: { control: "text" },
    enabled: { control: "boolean" },
  },
} as Meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ["Option 1", "Option 2", "Option 3"],
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  backgroundColor: "#f2f2f2",
  font: "Arial",
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  enabled: false,
};
