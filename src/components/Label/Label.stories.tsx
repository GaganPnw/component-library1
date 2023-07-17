import React from "react";
import { Story, Meta } from "@storybook/react";
import Label from "./Label";

export default {
  title: "Components/Label",
  component: Label,
} as Meta;

const Template: Story = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled Label",
  disabled: true,
};

export const CustomFontSize = Template.bind({});
CustomFontSize.args = {
  text: "Custom Font Size",
  fontSize: "20px",
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  text: "Custom Background Color",
  backgroundColor: "lightblue",
};
