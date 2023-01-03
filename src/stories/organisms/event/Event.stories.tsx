import { Story, Meta } from "@storybook/react";
import { useState } from "react";
import Event, { EventProps } from "./Event";

export default {
  title: "Event",
  component: Event,
} as Meta;

const Template: Story<EventProps> = (args) => {
  const [selectedOption, setSelectedOption] = useState<any>();
  return (
    <>
      {selectedOption && <p>You {selectedOption.toLowerCase()}</p>}
      <Event {...args} onSelectOption={(option) => setSelectedOption(option)} />
    </>
  );
};
export const Default = Template.bind({});

Default.args = {
  description: "What do you want to do?",
  options: [
    { triggerId: "0", text: "Go to the left" },
    { triggerId: "1", text: "Go to the right" },
    { triggerId: "2", text: "Do nothing" },
  ],
};
