import { View, Text } from "react-native";
import React from "react";
import Card from "../card";
import { CardComponent } from "./styles";

const PublicationComponent = () => {
  return (
    <CardComponent>
      <Card />
      <Card />
      <Card />
    </CardComponent>
  );
};

export default PublicationComponent;
