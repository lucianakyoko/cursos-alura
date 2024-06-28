import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BotaoEstilizado = styled.button`
  background: #002f52;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: none;
  cursor: pointer;
  color: #fff;
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;
const SpanEstilizado = styled.span`
  font-size: 18px;
  line-height: 27px;
  display: inline-block;
  margin: 0 12px;
  color: #002f52;
  font-family: Arial, Helvetica, sans-serif;
`;

const FlexContainerEstilizado = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContainerEstilizado = styled.div`
  width: 100px;
  text-align: center;
  display: inline-block;
`;

const LabelEstilizada = styled.label`
  color: #002f52;
  display: block;
  font-weight: 700;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 8px;
`;

export interface AbInputQuantidadeProps {
  onChange?: (value: number) => void;
}

export const AbInputQuantidade = ({ onChange }: AbInputQuantidadeProps) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    if (onChange) {
      onChange(Number(value));
    }
  }, [value]);

  return (
    <ContainerEstilizado>
      <LabelEstilizada>Quantidade</LabelEstilizada>
      <FlexContainerEstilizado>
        <BotaoEstilizado onClick={() => setValue(prev => prev - 1)}>
          -
        </BotaoEstilizado>
        <SpanEstilizado>{value}</SpanEstilizado>
        <BotaoEstilizado onClick={() => setValue(prev => prev + 1)}>
          +
        </BotaoEstilizado>
      </FlexContainerEstilizado>
    </ContainerEstilizado>
  );
};
