import { Story, Meta } from "@storybook/react";
import { JANKS_ADVENTURES } from "../../../text-adventure-objects/janks-adventures";
import Adventure, { AdventureProps } from "./Adventure";

export default {
  title: "Adventure",
  component: Adventure,
} as Meta;

const Template: Story<AdventureProps> = (args) => <Adventure {...args} />;

export const Default = Template.bind({});
Default.args = JANKS_ADVENTURES;
