import styled from "styled-components";

interface ButtonProps {
  $variante?: "secundario";
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.$variante === "secundario" ? "var(--branco)" : "var(--azul-escuro)"};
  color: ${(props) =>
    props.$variante === "secundario" ? "var(--azul-escuro)" : "var(--branco)"};
  border: ${(props) =>
    props.$variante === "secundario" ? "2px solid var(--azul-escuro)" : "none"};
  border-radius: 8px;
  padding: 12px 16px;
  margin-top: 1em;
  font-weight: 700;
  line-height: 19px;
  width: 50%;
  cursor: pointer;
`;

export default Button;
