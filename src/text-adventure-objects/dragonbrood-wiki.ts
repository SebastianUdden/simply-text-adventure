import { AdventureProps } from "../stories/pages/adventure/Adventure";

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
              text: "Religion",
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
          description: `The lands of Dalar is made up of two continents, East and West, divided by a great inland sea called the Boiling Sea.

          In the center of the boiling sea lies the Hearth, a massive active volcano that’s recuringly spewing out lava as well as great thrusts of boiling water and scorching winds. The smoke of the hearth is a clear landmark for all that live near the coast.
          
          In the north there is a narrow and deadly water filled ravine called the Northern pass. It is surrounded by impenetrable peaks and it’s narrow shape means that when the Hearth is active it will push the hot water north at great velocity until it hits the glacial point, where it quickly turns into ice and steam, giving it the name Frost lung. The ferocious ice twirls in fantastical shapes ever higher creating a daunting glacial wall overhang. At the rare occasions when the Hearth turns inactive, the icy waters and chilling winds from the Frost lung would turn back south at great velocity, causing lethal frost and an ice tsunami to spread death across from the Northern pass and the surrounding lands.
          
          The boiling sea also hits the southern water masses with a great force, but since the opening is greater this part of the sea is less volatile, yet the temperatures are equally deadly.
          
          The combination of deadly heat in the boiling sea, the deadly gusts and currents in the north and south and the gigantic glacial wall means the continents inhabitants have sparse interactions with each other. Except for the southerners who are less affected when the Hearth sleeps, but that is something that hasn’t happened for a thousand years.`,
          options: [
            {
              triggerId: "0",
              text: "Go back to menu",
              isNewEventChain: true,
            },
          ],
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
          description: `Reptiles

          Fire-drake
          Extremely rare, these enormous beasts have all but vanished from the eastern continent and only a few has been seen in the northern parts of the West.
          
          Earth-drake
          Earthbound herbivore with brown scales and blue eyes, flat teeth, about 2-20m long. They live of trees and minerals which they grind from stones with their giant beaks. Earth-drakes are social animals moving in packs and has in large part been domesticized by men where they’ve been used in everything from farming to erection of massive buildings.
          
          Water-drake
          Amfibian omnivore with brown and green scales and blue eyes, mixed teeth, about 10-15m long. They live solitary, mostly feeding on water growing trees and fish, but many mysterious shipwrecks has also been attributed to attacks by water-drakes.
          
          Wind-drake
          Winged predators that are active during daytime. They have white and blue shimmering scales and yellow eyes, razor sharp teeth, about 1-5m long. Moving in packs, they often prey on cattle such as Earth-drakes and horses.
          
          Shadow-drake
          Very rare winged predators who are mainly nocturnal. Black scales and yellow eyes, razor sharp teeth, they move in packs and are about 1-5m long.
          
          The predatory drakes are drawn to scales, which they devour in droves. Since men has used the scales as part of the economy this has led to a correlation between wealth and number of attacks by drakes, requiring people hoarding scales to take great lengths to protect them from attacks.
          
          Mammals
          Birds
          Fish
          Humans`,
          options: [
            {
              triggerId: "0",
              text: "Go back to menu",
              isNewEventChain: true,
            },
          ],
        },
      ],
    },
    {
      id: "3",
      title: "Religion",
      subtitle: "",
      events: [
        {
          id: "0",
          description: `In the beginning there was darkness, but then the first flame was lit, and from that fire came Dalu, the eternal. 

          Dalu shook pieces of his scales that fell into that first flame, and from them the four mighty Daia was born.
          
          First there was U’reth, the fire-breathing drake that lit the sun, then there was Gor’dan, the mighty earth-drake that brought forth mountains and cleaved the ravines with his mighty tail, after that there was Mae’thra, the water drake that could summon great floods and ocean with her strong magic, then there was Shri’t, the wind drake that flew across the earth at such speed that winds of live flew across the earth. 
          
          However, there was another scale that didn’t land in the first flame, but was instead left in darkness. Outside of warmth, time and space. And so the four Daia lived through the first age, in a respectful battle of the elements but always in balance with Dalu.
          
          At the end of the first age Dalu fell asleep, and this caused the blackened scale stirred. Out of it came the fifth Daia, Mal’kor, the shadow drake. He drove U’reth and the sun from the earth and plunged the world into darkness. Thus the second age was named the eternal night, and during this age descendants of the five Daia spread across all lands in a constant battle with each other. 
          
          By the end of the second age, U’reths descendants lit the moon and the sky by setting the great Dalu mountain in eternal flame, such that it’s now only known as the Hearth. This finally drove the shadow drakes away from these lands. Gor’dans descendants retreated from the lands, instead opting to dig and dwell in great caverns. The water drake descendants of Mae’thra created the frost lands to combat the fires of the Hearth and the wind drakes offspring of Shri’t continued to spring up life wherever they could, for they knew the simple truth. That every life was precious, no matter how small, and all shall be needed to resist the coming night
          
          and the return of Mal’kor…`,
          options: [
            {
              triggerId: "0",
              text: "Go back to menu",
              isNewEventChain: true,
            },
          ],
        },
      ],
    },
  ],
};
