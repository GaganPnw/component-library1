import React from "react";
import { Story, Meta } from "@storybook/react";

import Dropdown, { DropdownProps } from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ["Option 1", "Option 2", "Option 3"],
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  enabled: false,
};

export const WithDefaultOption = Template.bind({});
WithDefaultOption.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  defaultOption: "Option 2",
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  backgroundColor: "#eaeaea",
};

export const WithOnChange = Template.bind({});
WithOnChange.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  onChange: (selectedOption) => console.log("Selected Option:", selectedOption),
};
