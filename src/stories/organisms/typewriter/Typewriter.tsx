import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TypewriterInput from "../../molecules/typewriter-input/TypewriterInput";
import TypewriterOutput from "../../molecules/typewriter-output/TypewriterOutput";

export interface TypeWriterProps {
  pretext: string;
  submit?: (input: string) => void;
}

const Typewriter = ({ pretext, submit }: TypeWriterProps) => {
  const isFirst = useRef<any>(true);
  const ref = useRef<any>();
  const [text, setText] = useState(`\n${pretext}`);
  const [input, setInput] = useState("");
  const [allowInput, setAllowInput] = useState(false);

  useEffect(() => {
    if (!input && isFirst.current) {
      setText(`\n${pretext}\n`);
      isFirst.current = false;
      return;
    }
    if (!input && !isFirst.current) {
      setText(`\n${pretext} `);
      return;
    }
    setText(`\n${pretext} ${input}`);

    const submitOnKeyup = (e: any) => {
      if (e.key === "Enter") {
        submit && submit(input);
      }
    };

    document.addEventListener("keyup", submitOnKeyup);
    return () => {
      document.removeEventListener("keyup", submitOnKeyup);
    };
  }, [input]);

  useEffect(() => {
    if (allowInput) {
      setTimeout(() => {
        ref.current.focus();
      }, 200);
    }
  }, [allowInput]);

  return (
    <Wrapper onClick={() => ref.current.focus()}>
      {allowInput && (
        <TypewriterInput
          ref={ref}
          value={input}
          onChange={(value) => setInput(value)}
        />
      )}
      <TypewriterOutput
        text={text}
        speedMS={50}
        skipRerender
        onFinished={() => setAllowInput(true)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Typewriter;
