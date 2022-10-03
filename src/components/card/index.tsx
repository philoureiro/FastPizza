import React from "react";
import { Image } from "react-native";
import HeaderCardComponent from "./header";
import { Container, ActionContainer, InfoContainer } from "./styles";

const Card = () => {
  return (
    <Container>
      <HeaderCardComponent />
      <Image
        style={{ height: 500, width: "100%" }}
        source={require("../../assets/images/mulher.png")}
      />
      <ActionContainer />
      <InfoContainer />
    </Container>
  );
};

export default Card;
