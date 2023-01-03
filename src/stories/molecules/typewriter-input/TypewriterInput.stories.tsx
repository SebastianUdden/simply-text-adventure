import { Story, Meta } from "@storybook/react";
import TypewriterInput from "./TypewriterInput";

export default {
  title: "TypewriterInput",
  component: TypewriterInput,
} as Meta;

const Template: Story<{}> = (args) => <TypewriterInput {...args} />;
export const Default = Template.bind({});
export const LongText = Template.bind({});

Default.args = {
  value: "This is TypewriterInput text, that's medium length...",
};
