import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  text: string;
  speedMS: number;
  skipRerender?: boolean;
  finished?: boolean;
  onFinished: () => void;
}

const TypewriterOutput = ({
  speedMS,
  text,
  skipRerender,
  finished,
  onFinished,
}: Props) => {
  const [visibleText, setVisibleText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (skipRerender) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }, [text]);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, speedMS);
    if (count === text.length) {
      onFinished();
      return;
    }
    setVisibleText(text.slice(0, count));
  }, [count]);

  return (
    <Wrapper finished={finished}>
      <code>{visibleText}</code>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ finished?: boolean }>`
  white-space: pre-line;
  font-size: 18px;
  background-color: #000;
  color: #00ff00;
  code {
    ${(p) =>
      !p.finished &&
      `
      border-right: 0.15em solid #00ff00; /* The typwriter cursor */
      animation: blink-caret 1.2s step-end infinite;
      @keyframes blink-caret {
        from,
        to {
          border-color: transparent;
        }
        50% {
          border-color: #00ff00;
        }
      }
    `}
  }
`;

export default TypewriterOutput;
