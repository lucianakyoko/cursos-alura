import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;

  & > *:first-child {
    flex: 0 0 30%;
  }

  & > *:last-child {
    flex: 1;
  }
`;

export default FormContainer;
