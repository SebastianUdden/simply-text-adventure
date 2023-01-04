import { AdventureProps } from "../stories/pages/adventure/Adventure";
import { CHARACTERS } from "./tales-of-the-dragonbrood/characters";
import { ECONOMY } from "./tales-of-the-dragonbrood/economy";
import { ELEMENTS } from "./tales-of-the-dragonbrood/elements";
import { EPOCS } from "./tales-of-the-dragonbrood/epocs";
import { FACTIONS } from "./tales-of-the-dragonbrood/factions";
import { FLORA_AND_FAUNA } from "./tales-of-the-dragonbrood/flora-and-fauna";
import { GEOGRAPHY } from "./tales-of-the-dragonbrood/geography";
import { RELIGION } from "./tales-of-the-dragonbrood/religion";
import { TECH_AND_MAGIC } from "./tales-of-the-dragonbrood/tech-and-magic";

const GO_BACK = [
  {
    triggerId: "0",
    text: "Go back to menu",
    isNewEventChain: true,
  },
];

export const DRAGONBROOD_WIKI: AdventureProps = {
  speedMS: 6,
  title: "Dragonbrood wiki",
  slug: "dragonbrood-wiki",
  chapters: [
    {
      id: "0",
      title: "Menu",
      subtitle: "Select an area",
      events: [
        {
          id: "0",
          description: ``,
          options: [
            {
              triggerId: "1",
              text: "Geography",
              isNewEventChain: true,
            },
            {
              triggerId: "2",
              text: "Flora & Fauna",
              isNewEventChain: true,
            },
            {
              triggerId: "3",
              text: "Elements",
              isNewEventChain: true,
            },
            {
              triggerId: "4",
              text: "Epocs",
              isNewEventChain: true,
            },
            {
              triggerId: "5",
              text: "Religion",
              isNewEventChain: true,
            },
            {
              triggerId: "6",
              text: "Economy",
              isNewEventChain: true,
            },
            {
              triggerId: "7",
              text: "Tech & magic",
              isNewEventChain: true,
            },
            {
              triggerId: "8",
              text: "Factions",
              isNewEventChain: true,
            },
            {
              triggerId: "9",
              text: "Characters",
              isNewEventChain: true,
            },
          ],
        },
      ],
    },
    {
      id: "1",
      title: "Geography",
      subtitle: "",
      events: [
        {
          id: "0",
          description: GEOGRAPHY,
          options: GO_BACK,
        },
      ],
    },
    {
      id: "2",
      title: "Flora & Fauna",
      subtitle: "",
      events: [
        {
          id: "0",
          description: FLORA_AND_FAUNA,
          options: GO_BACK,
        },
      ],
    },
    {
      id: "3",
      title: "Elements",
      subtitle: "",
      events: [
        {
          id: "0",
          description: ELEMENTS,
          options: GO_BACK,
        },
      ],
    },
    {
      id: "4",
      title: "Epocs",
      subtitle: "",
      events: [
        {
          id: "0",
          description: EPOCS,
          options: GO_BACK,
        },
      ],
    },
    {
      id: "5",
      title: "Religion",
      subtitle: "",
      events: [
        {
          id: "0",
          description: RELIGION,
          options: GO_BACK,
        },
      ],
    },
    {
      id: "6",
      title: "Economy",
      subtitle: "",
      events: [
        {
          id: "0",
          description: ECONOMY,
          options: GO_BACK,
        },
      ],
    },
    {
      id: "7",
      title: "Tech & magic",
      subtitle: "",
      events: [
        {
          id: "0",
          description: TECH_AND_MAGIC,
          options: GO_BACK,
        },
      ],
    },
    {
      id: "8",
      title: "Factions",
      subtitle: "",
      events: [
        {
          id: "0",
          description: FACTIONS,
          options: GO_BACK,
        },
      ],
    },
    {
      id: "9",
      title: "Characters",
      subtitle: "",
      events: [
        {
          id: "0",
          description: CHARACTERS,
          options: GO_BACK,
        },
      ],
    },
  ],
};
