import { Story, Meta } from "@storybook/react";
import TypewriterOptions, { TypewriterOptionsProps } from "./TypewriterOptions";

export default {
  title: "Typewriter options",
  component: TypewriterOptions,
} as Meta;

const Template: Story<TypewriterOptionsProps> = (args) => (
  <TypewriterOptions {...args} />
);
export const Default = Template.bind({});

Default.args = {
  options: [
    { triggerId: "1", text: "Option 1" },
    { triggerId: "2", text: "Option 2" },
    { triggerId: "3", text: "Option 3" },
  ],
};
