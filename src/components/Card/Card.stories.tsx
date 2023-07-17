import React from "react";
import { Story, Meta } from "@storybook/react";

import Card, { CardProps } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
    size: { control: "radio", options: ["small", "medium", "large"] },
    border: { control: "boolean" },
    font: { control: "text" },
    enabled: { control: "boolean" },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This is a card",
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  children: "This is a card with custom style",
  backgroundColor: "#f2f2f2",
  size: "large",
  border: true,
  font: "Arial",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "This is a disabled card",
  enabled: false,
};
