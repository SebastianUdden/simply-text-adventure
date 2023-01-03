import { useEffect, useState } from "react";
import styled from "styled-components";
import TypewriterOutput from "../../molecules/typewriter-output/TypewriterOutput";
import Typewriter from "../typewriter/Typewriter";

type Story = {
  title: string;
  subtitle: string;
  chapters: [
    {
      title: string;
      sections: string[];
    }
  ];
};

const formatChapterSection = (
  story: Story,
  chapterIndex: number,
  sectionIndex: number
) => {
  return `${story.chapters[chapterIndex].title}\n\n${story.chapters[chapterIndex].sections[sectionIndex]}`;
};

const formatStart = (story: Story) => {
  return `${story.title}\n${story.subtitle}\n\n\n`;
};

interface Props {
  story: Story;
}

let chapterIndex = 0;
let sectionIndex = 0;

const Storyteller = ({ story }: Props) => {
  const [text, setText] = useState(formatChapterSection(story, 0, 0));
  const [showChapter, setShowChapter] = useState(false);
  const [askContinue, setAskContinue] = useState(false);

  const handleSubmit = (input: string) => {
    const lcInput = input.toLowerCase();
    if (
      lcInput === "y" ||
      lcInput === "(y)" ||
      lcInput === "yes" ||
      lcInput === "yeah"
    ) {
      setText("");
      const newSectionIndex = sectionIndex + 1;
      const isEnd =
        newSectionIndex === story.chapters[chapterIndex].sections.length;
      const newChapterIndex = isEnd ? chapterIndex + 1 : chapterIndex;
      setTimeout(() => {
        setAskContinue(false);
      }, 5);
      setTimeout(() => {
        setText(
          formatChapterSection(
            story,
            newChapterIndex,
            isEnd ? 0 : newSectionIndex
          )
        );
        sectionIndex = isEnd ? 0 : newSectionIndex;
        chapterIndex = newChapterIndex;
      }, 500);
    }
  };

  return (
    <Wrapper>
      {/* {JSON.stringify(story)}
      <hr />
      Chapter: {JSON.stringify(chapterIndex)}
      <br />
      Section: {JSON.stringify(sectionIndex)}
      <hr /> */}
      <TypewriterOutput
        text={formatStart(story)}
        speedMS={10}
        finished={showChapter}
        onFinished={() => setShowChapter(true)}
      />
      {showChapter && (
        <TypewriterOutput
          text={text}
          speedMS={10}
          finished={askContinue}
          onFinished={() => setAskContinue(true)}
        />
      )}
      {askContinue && (
        <Typewriter pretext="Continue? (y)" submit={handleSubmit} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #000;
  color: #fff;
  padding: 20px;
  min-height: 100vh;
`;

export default Storyteller;
