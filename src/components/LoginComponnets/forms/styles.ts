import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  height: 45%;
  width: 100%;
  margin-top: 65px;
  justify-content: center;
  align-items: center;
`;

export const InputComponent = styled.TextInput.attrs(
  ({ placeholderTextColor }) => ({
    placeholderTextColor: "white",
  })
)`
  width: 95%;
  background-color: #121212;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
  color: white;
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
`;

export const TextComponent = styled.Text`
  align-self: flex-end;
  margin-right: 5px;
  margin-top: 19px;
  color: #3797ef;
`;
export const TextComponentCenter = styled(TextComponent)`
  align-self: center;
  margin: 0;
  color: white;
  width: auto;
`;

export const TextC = styled.Text`
  width: auto;
  color: #3797ef;
  margin-left: 5px;
`;

export const Box = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
`;

export const ButtonComponent = styled.TouchableOpacity`
  width: 95%;
  background-color: #3797ef;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
`;
