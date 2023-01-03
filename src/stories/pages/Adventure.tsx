import { useEffect, useState } from "react";
import styled from "styled-components";
import { EventProps } from "../organisms/event/Event";
import EventChain from "../organisms/event-chain/EventChain";
import { Option } from "../molecules/typewriter-options/TypewriterOptions";

type Chapter = {
  id: string;
  title: string;
  subtitle: string;
  events: EventProps[];
};

export interface AdventureProps {
  title: string;
  chapters?: Chapter[];
  speedMS?: number;
}

const Adventure = ({ title, chapters, speedMS }: AdventureProps) => {
  const [selectedChapter, setSelectedChapter] = useState<any>(
    chapters && chapters[0]
  );
  const [showEvents, setShowEvents] = useState(false);
  useEffect(() => {
    setShowEvents(false);
    setTimeout(() => {
      setShowEvents(true);
    }, 50);
  }, [selectedChapter]);
  return (
    <Wrapper>
      <Body>
        <Title>{title}</Title>
        {selectedChapter && (
          <>
            <ChapterTitle>{selectedChapter.title}</ChapterTitle>
            <Subtitle>{selectedChapter.subtitle}</Subtitle>
            {showEvents && (
              <EventChain
                speedMS={speedMS}
                events={selectedChapter.events}
                onNewEventChain={(option: Option) => {
                  if (chapters) {
                    setSelectedChapter(
                      chapters.find((c) => c.id === option.triggerId)
                    );
                  }
                }}
              />
            )}
          </>
        )}
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #000;
  color: #00ff00;
  padding: 10px;
`;
const Body = styled.div`
  height: 100vh;
  border: 1px solid #00ff00;
  padding: 50px 10px;
  @media (min-width: 800px) {
    padding: 50px;
    max-width: 800px;
    margin: 0 auto;
  }
`;
const Title = styled.h1`
  text-transform: uppercase;
  margin: 0 0 20px;
  text-align: center;
  letter-spacing: 4px;
  text-decoration: underline;
`;
const ChapterTitle = styled.h2`
  text-transform: uppercase;
  margin: 0;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 1px;
`;
const Subtitle = styled.h4`
  text-transform: uppercase;
  margin: 0;
  text-align: center;
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 5px;
`;

export default Adventure;
