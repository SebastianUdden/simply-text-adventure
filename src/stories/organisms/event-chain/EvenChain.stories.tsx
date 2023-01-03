import { Story, Meta } from "@storybook/react";
import EventChain from "./EventChain";

export default {
  title: "EventChain",
  component: EventChain,
} as Meta;

const Template: Story<{}> = (args) => <EventChain {...args} />;

export const Default = Template.bind({});
Default.args = {
  events: [
    {
      id: 1,
      description: "The beginning, choose:",
      options: [
        { triggerId: 2, text: "Go to the left" },
        { triggerId: 3, text: "Go to the right" },
      ],
    },
    {
      id: 2,
      description: "Nothing happens...",
      options: [{ triggerId: 3, text: "Go to the right" }],
    },
    {
      id: 3,
      description: "Continue down a path, choose again",
      options: [
        { triggerId: 1, text: "Go back" },
        { triggerId: 4, text: "Open the chest" },
      ],
    },
    {
      id: 4,
      description: "The end!",
      options: [{ triggerId: 1, text: "Play again" }],
    },
  ],
};

export const MiniAdventure = Template.bind({});
MiniAdventure.args = {
  events: [
    {
      id: 0,
      description:
        "After many days trekking through a vast labyrinth, you are getting closer to your goal. You are in a hurry to find the vast treasure before the other scavenger parties get here. You now find yourself in front of a cross section.  There's a large shadow looming behind you, fearing what it will do to you there's no time to hesitate. What do you want to do?",
      options: [
        { triggerId: 2, text: "Go to the left" },
        { triggerId: 3, text: "Go to the right" },
        {
          triggerId: 4,
          text: "Scream loudly then stick your head in the sand",
        },
      ],
    },
    {
      id: 1,
      description:
        "You are back where it all started, and so is the mysterious figure behind you. What will you do?",
      options: [
        { triggerId: 2, text: "Go to the left" },
        { triggerId: 3, text: "Go to the right" },
        {
          triggerId: 4,
          text: "Scream loudly then stick your head in the sand",
        },
      ],
    },
    {
      id: 2,
      description:
        "Surprised, you run into a brick wall which makes you feel slightly depressed. Recovering from the somewhat embarrassing event, you quickly decide to try one of the other options...",
      options: [
        { triggerId: 3, text: "Go to the right" },
        {
          triggerId: 4,
          text: "Scream loudly then stick your head in the sand",
        },
      ],
    },
    {
      id: 3,
      description:
        "There you find a long winding hallway lined with knights, they to be empty armor but you can't be sure. How do you proceed?",
      options: [
        { triggerId: 1, text: "Smoothly moonwalk back into the other room." },
        {
          triggerId: 5,
          text: "Walk confidently ahead, what could possibly go wrong?",
        },
        {
          triggerId: 6,
          text: "Pick up your sword and shield.",
        },
      ],
    },
    {
      id: 4,
      description:
        "As you do, you hear a rumbling sound through the sand, almost as if something very large is passing right by you. As you get up, there is no trace of what has happened. What do you do?",
      options: [
        { triggerId: 2, text: "Go to the left" },
        { triggerId: 3, text: "Go to the right" },
      ],
    },
    {
      id: 5,
      description:
        "Nothing happens, the danger is over. And as you enter the other side of the hallway you find a great treasure. What a joyful day this has been, you think as you stroll home with your pockets overflowing with gold.",
      options: [{ triggerId: 0, text: "The end" }],
    },
    {
      id: 6,
      description:
        "The knights react to your aggresive behavior and quickly overpower you through sheer numbers. As they stab you repeatedly you think of all the things you should have done differently in life, then you drift away into nothing...",
      options: [{ triggerId: 0, text: "The end" }],
    },
  ],
};
