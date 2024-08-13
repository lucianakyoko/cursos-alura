import styled from "styled-components";

const UploadInput = styled.input.attrs(() => ({
  type: "file",
}))`
  display: none;
`;
export default UploadInput;
