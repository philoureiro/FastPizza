import styled from "styled-components/native";

export const HeaderCard = styled.View`
  height: 8%;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  flex-direction: row;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProfilePictureContainer = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: orangered;
`;

export const ImageComponent = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

export const Title = styled.Text`
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
`;
