import { useState } from "react";
import styled from "styled-components";
import { Option } from "../../molecules/typewriter-options/TypewriterOptions";
import Event, { EventProps } from "../event-options/Event";

interface Props {
  events: EventProps[];
  speedMS?: number;
  onNewEventChain: (option: Option) => void;
}

const EventChain = ({ events, speedMS, onNewEventChain }: Props) => {
  const [currentEvent, setCurrentEvent] = useState<EventProps>(events[0]);
  return (
    <Wrapper>
      <Event
        {...currentEvent}
        speedMS={speedMS}
        onSelectOption={(option) => {
          if (option.isNewEventChain) {
            onNewEventChain(option);
            return;
          }
          const newEvent = events.find((e) => e.id === option.triggerId);
          if (newEvent) {
            setCurrentEvent({
              ...newEvent,
              description:
                option.triggerId === "0"
                  ? newEvent.description
                  : `You ${option.text.toLowerCase()}. 
                  
                  ${newEvent.description}`,
            });
          }
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default EventChain;
