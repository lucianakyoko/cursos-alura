import styled from "styled-components";
import Mask, { Props } from "react-input-mask";
import { InputProps } from "../Input";

const InputMask = styled(Mask)<InputProps, Props>`
  background: #f0f0f0;
  box-sizing: border-box;
  margin: 0.5em 0;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: ${(props) => (props.$error ? " 1px solid #a71e1e" : "none")};
  width: 100%;
  padding: 16px;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  &::placeholder {
    color: rgba(107, 110, 113, 1);
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }

  &:focus {
    outline-color: ${(props) => (props.$error ? "#a71e1e" : "")};
  }
`;

export default InputMask;