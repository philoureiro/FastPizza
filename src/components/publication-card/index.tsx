import React from "react";
import { Image } from "react-native";
import HeaderCardComponent from "./header";
import { Container, ActionContainer, InfoContainer } from "./styles";

const PublicationCard = () => {
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

export default PublicationCard;
