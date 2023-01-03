import { forwardRef } from "react";
import styled from "styled-components";

export interface TypewriterInputProps {
  value: string;
  onChange: (value: string) => void;
}

const TypewriterInput = forwardRef(
  ({ value, onChange }: TypewriterInputProps, ref: any) => {
    return (
      <Input
        ref={ref}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
);

const Input = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
  max-height: 0px;
  margin: 0px;
  padding: 0px;
  border: none;
  line-height: 0;
`;

export default TypewriterInput;
