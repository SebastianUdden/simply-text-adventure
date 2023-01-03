import { Story, Meta } from "@storybook/react";
import TypewriterOptions from "./TypewriterOptions";

export default {
  title: "Typewriter options",
  component: TypewriterOptions,
} as Meta;

const Template: Story<{}> = (args) => <TypewriterOptions {...args} />;
export const Default = Template.bind({});

Default.args = {
  options: ["Option 1", "Option 2", "Option 3"],
};
