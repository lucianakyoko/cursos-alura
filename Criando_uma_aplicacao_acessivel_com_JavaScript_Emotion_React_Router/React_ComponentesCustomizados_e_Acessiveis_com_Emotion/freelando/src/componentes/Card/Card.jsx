import styled from '@emotion/styled';

const DivEstilizada = styled.div`
  padding: 32px;
  background: #EBEAF9;
  border: 1px solid #5754ED;
  border-radius: 16px;
`;

export const Card = ({ children }) => {
  return (
    <DivEstilizada>{children}</DivEstilizada>
  );
}