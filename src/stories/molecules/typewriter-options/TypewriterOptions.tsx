import { useEffect, useState } from "react";
import styled from "styled-components";
import TypewriterOutput from "../typewriter-output/TypewriterOutput";

export type Option = {
  triggerId: string;
  text: string;
  isNewEventChain?: boolean;
};

interface Props {
  speedMS?: number;
  options: Option[];
  onSelectOption: (option: Option) => void;
}

const TypewriterOptions = ({
  speedMS = 50,
  options,
  onSelectOption,
}: Props) => {
  const [showIndex, setShowIndex] = useState(1);

  useEffect(() => {
    setShowIndex(1);
  }, [options]);

  return (
    <Wrapper>
      {options &&
        options.slice(0, showIndex).map((o, i) => (
          <Button onClick={() => onSelectOption(o)}>
            <TypewriterOutput
              text={o.text}
              speedMS={speedMS}
              onFinished={() => setShowIndex(showIndex + 1)}
              finished={i < showIndex - 1}
            />
          </Button>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;
const Button = styled.button`
  min-width: calc(50% - 20px);
  text-align: left;
  background-color: #000;
  color: #00ff00;
  border: 1px solid #00ff00;
  padding: 15px;
  font-size: 14px;
  cursor: pointer;
  :hover {
    background-color: #003000;
    color: #00ff00;
    div {
      background-color: #003000;
      color: #00ff00;
    }
  }
  :active {
    color: #000;
    background-color: #00ff00;
    div {
      color: #000;
      background-color: #00ff00;
    }
  }
`;

export default TypewriterOptions;
