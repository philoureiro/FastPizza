import React from "react";
import { Image } from "react-native";
import ActionsButtons from "./actions-buttons";
import HeaderCardComponent from "./header";
import { Container, ActionContainer, InfoContainer } from "./styles";

const PublicationCard = () => {
  return (
    <Container>
      <HeaderCardComponent />
      <Image
        style={{ height: 500, width: "100%", resizeMode: "stretch" }}
        source={require("../../assets/images/mulher.png")}
      />
      <ActionsButtons />
      <InfoContainer />
    </Container>
  );
};

export default PublicationCard;
