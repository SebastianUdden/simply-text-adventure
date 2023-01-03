import { Story, Meta } from "@storybook/react";
import Typewriter from "./Typewriter";

export default {
  title: "Typewriter",
  component: Typewriter,
} as Meta;

const Template: Story<{}> = (args) => <Typewriter {...args} />;
export const Default = Template.bind({});

Default.args = {
  pretext: "This is typewriter text, add to this and test the result!",
};
