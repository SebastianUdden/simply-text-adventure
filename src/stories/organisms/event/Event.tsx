import { useEffect, useState } from "react";
import styled from "styled-components";
import TypewriterOptions, {
  Option,
} from "../../molecules/typewriter-options/TypewriterOptions";
import TypewriterOutput from "../../molecules/typewriter-output/TypewriterOutput";

export interface EventProps {
  id: string;
  description: string;
  options: Option[];
}

interface Props extends EventProps {
  speedMS?: number;
  onSelectOption: (option: Option) => void;
}

const Event = ({
  description,
  options,
  speedMS = 50,
  onSelectOption,
}: Props) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    setShowOptions(false);
    setShowDescription(false);
    setTimeout(() => {
      setShowDescription(true);
    }, 20);
  }, [description, options]);

  return (
    <Wrapper>
      {showDescription && (
        <>
          <TypewriterOutput
            text={description}
            speedMS={speedMS}
            onFinished={() => setShowOptions(true)}
            finished={showOptions}
          />
          <hr />
        </>
      )}
      {showOptions && (
        <TypewriterOptions
          speedMS={speedMS}
          options={options}
          onSelectOption={onSelectOption}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #000;
  color: #fff;
  padding: 20px;
  hr {
    border-color: #00ff00;
  }
`;

export default Event;
