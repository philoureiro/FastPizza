import React from "react";
import { Image } from "react-native";
import {
  HeaderCard,
  ImageComponent,
  Container,
  ActionContainer,
  InfoContainer,
} from "./styles";

const Card = () => {
  return (
    <Container>
      {/* <HeaderCard/> */}
      <Image
        style={{ height: 500, width: "100%" }}
        source={require("../../assets/images/pizza.png")}
      />
      <ActionContainer />
      <InfoContainer />
    </Container>
  );
};

export default Card;
