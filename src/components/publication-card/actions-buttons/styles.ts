import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  height: 40px;
  background-color: white;
  justify-content: space-between;
  align-items: center;
`;

interface IconContainerProps {
  justifyContent: string;
}
export const IconContainer = styled.View<IconContainerProps>`
  width: 120px;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
`;
