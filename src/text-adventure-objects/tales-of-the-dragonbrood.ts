import { AdventureProps } from "../stories/pages/adventure/Adventure";

export const TALES_OF_THE_DRAGONBROOD: AdventureProps = {
  speedMS: 6,
  title: "Tales of the dragonbrood",
  slug: "tales-of-the-dragonbrood",
  chapters: [
    {
      id: "0",
      title: "Chapter 1",
      subtitle: "Jair",
      events: [
        {
          id: "0",
          description: `The howling everwinds beat against the cliff-face as Jair looked across the bridge of the northern pass. How the thin metallic bridge still stood there he would never understand, but it had stood the test of time and pressure, surviving volcanic surges and flash-freezes alike. Not many people had ever dared cross it to the western highlands, the few brave who did had failed to persist the strong winds or fallen prey to the boiling floods. There were rumors of people that got lucky and survived the pass, but none had returned. 

          Here he stood, ready to risk everything to reach the other side. Altok and the other drake-hunters had pleaded for him to turn back with them during the hardships of the mountain pass, but standing here he knew that it had all been worth it. He would not be one of the forgotten, without any family to remember him nor a scale to his name. They had tracked the pack of wind-drakes as they moved ever westward, past Organath through to the Lodur river delta, but as they took flight from the peak of Azaru hope all but dwindled. How could they ever pick up the track even if they somehow survived the crossing? But something inside him kept pushing, even as the others disbanded Jair remained cool, just as the high Dalar commonly evoked, “Restrain your fearful fire, or it will spread through your being, never letting go until you are but ash”. When you have nothing to lose you have everything to gain, this had been his moto for most of Jairs life. The opportunity to catch a wind-drake had been no different, even a single scale would make him the wealthiest man in the village, and if he were to sever multiple layers from the drake he would be set for life. The drawback being of course brutal mutilation and death, which was far from ideal. Maybe Altok was right after all.
          
          No! I will not give in, I will make it to the other side and those scales will be mine!
          
          He stepped onto the bridge, humming along with the everwinds..`,
          options: [
            {
              triggerId: "1",
              text: "Next chapter",
              isNewEventChain: true,
            },
          ],
        },
      ],
    },
    {
      id: "1",
      title: "Chapter 2",
      subtitle: "Alaya",
      events: [
        {
          id: "0",
          description: `Splash! Two feet landed in the shallow water next to the boat and immediately took of running. Splash, splash, splash… As the steps vanished the only thing Alaya could hear were the light waves and soft breeze blowing over lake Ama. She enjoyed the quiet here, with only the occasional creaking of the planks as the boat swayed gently. There was no way they could find her, not now, she had worked long on her disappearance technique and it was perfect, there was no way they could— “Hey! There you are you little lake rat!”. No.. it shouldn’t be possible... 
          “I can see you, you know! It’s not even a good disguise,” Flodur remarked with his usual snarky tone. “Fine, now leave me alone,” Alaya retorted. 
          “Sure, I’ll leave you alone, you’ll have plenty of time for yourself on the open water.” He grabbed the ores and before Alaya could react he twisted his fingers to the sign of the Wind. A strong gust grabbed the boat and tore it from the dock, the winds pushed it into a tilt and Alaya tumbled facedown as it speed out toward the open waters. When she gained her footing it was too late. Well at least I don’t have to see his ugly mug for a while. She thought as she pulled off her boots to create a makeshift ore. 
          
          After an hour of rowing and land apparently not getting any closer she paused with a shiver. The water had moved, it wasn’t in her head, was it? A school of fish started jumping about 10 meters from the boat. She jumped to the side to get a better look, Could it be? Another school of fish started jumping just behind the boat. She quickly threw herself to the other side to see what caused it, the action rocked the boat so it almost tipped, her nose gracing the water as she watched awestruck. There, in the bright blue water, a great yellow eye gazed back at her. Giant brown scales stacked with shimmering shades of green flashed before her just underneath the surface. She had only heard the tales of such a beast lumbering in the lake, but to actually lay eyes on it was something else. It was magnificent! As the legs and tail started passing the boat it became clear to her, It must be 15 meters long at least, and the wide tail seems to push it through the water at great speed—wait!? are those spikes at the end?
          
          She braced but it was too late, the boat shattered from the force of the impact throwing Alaya headfirst into the water. After a few seconds of disorientation she rotated to see the Waterdrake ascend from the depts below, the big maw opening up to devour her and what was left of the boat. In a split second decision she grabbed a plank and pushed it downward into the chin of the beast. It did nothing to stop its upward trajectory but the plank smashed back into her forcing her to the side, away from the boat which was now being devoured. The plank had also clipped a single scale from the Waterdrake who, happy with its wooden meal, started its descent into the depths again. Alaya grabbed the scale with one hand and held on to the plank with the other, ascending to the surface to finally gasp for air again. 
          
          The plank would only hold her for so long, so there was only one choice; She had to risk using the scale. Alaya had heard of apprentice Earthdealers suffer from petrification when moving too fast in their training, she didn’t know what happened to Waterdealers but it didn’t really matter as she would drown if she didn’t try. She bit down on the scale, holding it firmly in her mouth before focusing her inner words and making a crude attempt at the water sign. Nothing happened… But it should work, shouldn’t it? Usually the scales were melted and dusted to be more easily consumed, but she should be able to gain at least some thrust if she kept gnawing on it. Once again she calmed down and thought the words, embracing the water sign. Then she felt it! A surge of water seemingly enveloping her, she was in the water but she also became it. She dived down and felt stronger, breathing was no longer necessary as the water provided all that she needed. Leaving the plank behind and pushing forward, she sped against land with great speed, but deep down she knew.. This was only the beginning…
          
          'One day I’ll show him, one day I’ll sign the Wind and fly away from this place!'`,
          options: [
            {
              triggerId: "0",
              text: "Go back",
              isNewEventChain: true,
            },
          ],
        },
      ],
    },
  ],
};
