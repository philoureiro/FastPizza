import { Text } from "react-native";
import React from "react";
import {
  HeaderCard,
  ProfilePictureContainer,
  ProfileContainer,
  ImageComponent,
  Title,
} from "./styles";
import { FontAwesome } from "@expo/vector-icons";

const HeaderCardComponent = () => {
  return (
    <HeaderCard>
      <ProfileContainer>
        <ProfilePictureContainer>
          <ImageComponent
            source={require("../../../assets/images/mulher.png")}
          />
        </ProfilePictureContainer>
        <Title>Eliza Samúdio</Title>
      </ProfileContainer>
      <FontAwesome name="ellipsis-v" size={20} color="black" />
    </HeaderCard>
  );
};

export default HeaderCardComponent;
