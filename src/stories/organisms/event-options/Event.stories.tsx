import { Story, Meta } from "@storybook/react";
import { useState } from "react";
import Event from "./Event";

export default {
  title: "Event",
  component: Event,
} as Meta;

const Template: Story<{}> = (args) => {
  const [selectedOption, setSelectedOption] = useState("");
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
    "Go to the left",
    "Go to the right",
    "Scream loudly then stick your head in the sand",
  ],
};
