import { AdventureProps } from "../stories/pages/Adventure";

export const BOSS_ADVENTURE: AdventureProps = {
  speedMS: 50,
  title: "The BOSS adventure",
  chapters: [
    {
      id: "0",
      title: "Chapter 1",
      subtitle: "The hoard",
      events: [
        {
          id: "0",
          description: `After many days trekking through a vast labyrinth, you are getting closer to your goal. You are in a hurry to find the vast treasure before the other scavenger parties get here. You now find yourself approaching a junction.  There's a large shadow looming behind you, fearing what it will do to you there's no time to hesitate. 
            
            What do you want to do?`,
          options: [
            { triggerId: "2", text: "Go to the left" },
            { triggerId: "3", text: "Go to the right" },
            {
              triggerId: "4",
              text: "Scream loudly then stick your head in the sand",
            },
          ],
        },
        {
          id: "1",
          description: `You are back where it all started, and so is the mysterious figure behind you. 
            
            What will you do?`,
          options: [
            { triggerId: "2", text: "Go to the left" },
            { triggerId: "3", text: "Go to the right" },
            {
              triggerId: "4",
              text: "Scream loudly then stick your head in the sand",
            },
          ],
        },
        {
          id: "2",
          description: `Surprised, you run into a brick wall which makes you feel slightly depressed. Recovering from the somewhat embarrassing event, you quickly decide to try one of the other options...`,
          options: [
            { triggerId: "3", text: "Go to the right" },
            {
              triggerId: "4",
              text: "Scream loudly then stick your head in the sand",
            },
          ],
        },
        {
          id: "3",
          description: `There you find a long winding hallway lined with knights, they appear to be empty armor but you can't be sure. 
            
            How do you proceed?`,
          options: [
            {
              triggerId: "1",
              text: "Smoothly moonwalk back into the other room.",
            },
            {
              triggerId: "5",
              text: "Walk confidently ahead, what could possibly go wrong?",
            },
            {
              triggerId: "6",
              text: "Pick up your sword and shield.",
            },
          ],
        },
        {
          id: "4",
          description: `As you do, you hear a rumbling sound through the sand, almost as if something very large is passing right by you. As you get up, there is no trace of what has happened. 
            
            What do you do?`,
          options: [
            { triggerId: "2", text: "Go to the left" },
            { triggerId: "3", text: "Go to the right" },
          ],
        },
        {
          id: "5",
          description: `Nothing happens and the danger has passed. As you enter the other side of the hallway you find a great treasure hoard. 
            
            What a joyful day this has been, you think as you stroll home with your pockets overflowing with gold.`,
          options: [
            { triggerId: "1", text: "Next chapter", isNewEventChain: true },
          ],
        },
        {
          id: "6",
          description: `The knights react to your aggresive behavior and quickly overpower you through sheer numbers. As they stab you repeatedly you think of all the things you should have done differently in life, 
            then you drift away into nothing...`,
          options: [{ triggerId: "0", text: "The end, try again?" }],
        },
      ],
    },
    {
      id: "1",
      title: "Chapter 2",
      subtitle: "The path less traveled",
      events: [
        {
          id: "0",
          description: `As you skip through the sunshine on your way home, the birds chirp and squirrels play in the trees above. You stop and gaze at the marvel for a moment. Suddenly you are jolted out of the blissful existence as a cart barrels toward you. Throwing yourself to the side causes some of your coins to drop out onto the road and you hear a decisive 'WOOOAH!'. The cart owner, a towering two headed ogre stops to eye you and your loot. 
            
            'Hey there fellah, are you in need of assistance?' 
            says one head, the other quickly replying 'He looks like he done allright by himself i reckon...'. 
            
            How do you respond?`,
          options: [
            {
              triggerId: "1",
              text: "Say 'Hi there! I'm just a merry traveler and I'll be one my way now.'",
            },
            {
              triggerId: "2",
              text: "Say 'None of your business, better keep moving!'",
            },
            {
              triggerId: "3",
              text: "Say 'I'm doing fine, thanks for asking. Seeing as it's such a lovely day, can I interest you fellas in some coins?'",
            },
          ],
        },
        {
          id: "1",
          description: `'No you ain't, I see there you be hiding some mighty fine coins. Why don't you come along with us?' one head says as the ogres grabs you by your feet. 'Let's see what you have there..' the other says as they shake you with one hand and catch your inventory with the other. 

          While screaming for your life, the thought that a more aggresive tone might have scared them away hits you, but it's lost in the fog as you drift away in agony...
          
          Death by shaking is not a nice way to go. No not at all...`,
          options: [
            {
              triggerId: "0",
              text: "The end, try again?",
              isNewEventChain: true,
            },
          ],
        },
        {
          id: "2",
          description: `'How rude!', 'Give him a good smack!' the heads are shouting in tandem, the force of the punch knocks you into a mountainside killing you instantly, at least it was a quick death!`,
          options: [
            {
              triggerId: "0",
              text: "The end, try again?",
              isNewEventChain: true,
            },
          ],
        },
        {
          id: "3",
          description: `'Oh such a charmer this one.', 'You're allright!' the ogre happily trot along after you put a big portion of your treasure into its enormous hands. You are safe, for now...`,
          options: [
            {
              triggerId: "0",
              text: "To be continued, play again?",
              isNewEventChain: true,
            },
          ],
        },
      ],
    },
  ],
};
