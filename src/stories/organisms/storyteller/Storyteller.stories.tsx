import { Story, Meta } from "@storybook/react";
import Storyteller from "./Storyteller";
import { testStory } from "../../../text-adventure-objects/test-story";
import { bilbo } from "../../../text-adventure-objects/bilbo";

export default {
  title: "Storyteller",
  component: Storyteller,
} as Meta;

const Template: Story<{}> = (args) => <Storyteller {...args} />;

export const TestStory = Template.bind({});
TestStory.args = {
  story: testStory,
};

export const Bilbo = Template.bind({});
Bilbo.args = {
  story: bilbo,
};
