import { Story, Meta } from "@storybook/react";
import { BOSS_ADVENTURE } from "../../text-adventure-objects/boss-adventure";
import Adventure from "./Adventure";

export default {
  title: "Adventure",
  component: Adventure,
} as Meta;

const Template: Story<{}> = (args) => <Adventure {...args} />;

export const Default = Template.bind({});
Default.args = BOSS_ADVENTURE;
