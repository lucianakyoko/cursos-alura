import React from 'react';
import styled from 'styled-components';

const LabelEstilizada = styled.label`
  color: #002f52;
  display: block;
  font-weight: 700;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 16px;
  margin-bottom: 8px;
`;

const InputEstilizado = styled.input`
  font-size: 16px;
  line-height: 24px;
  color: #002f52;
  padding: 8px 24px;
  border: 1px solid #002f52;
  border-radius: 45px;
  &:focus {
    outline: none;
  }
  width: 100%;
  box-sizing: border-box;
`;

export interface CampoTextoProps {
  label: string;
  value: string;
  type?: 'text' | 'email' | 'password' | 'date';
  onChange: (value: string) => void;
}

export const AbCampoTexto = ({
  label,
  value,
  onChange,
  type = 'text',
}: CampoTextoProps) => {
  return (
    <div>
      <LabelEstilizada>{label}</LabelEstilizada>
      <InputEstilizado
        type={type}
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
};
