import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Container, IconContainer } from "./styles";
import { FontAwesome } from "@expo/vector-icons";

const ActionsButtons = () => {
  return (
    <Container>
      <IconContainer justifyContent="flex-start">
        <TouchableOpacity>
          <FontAwesome
            name="heart-o"
            size={30}
            color="black"
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome
            name="comment-o"
            size={30}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome
            name="paper-plane-o"
            size={30}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </IconContainer>

      <IconContainer justifyContent="center">
        <FontAwesome name="circle" size={10} color="#5792E7" />
      </IconContainer>
      <TouchableOpacity>
        <IconContainer justifyContent="flex-end">
          <FontAwesome
            name="flag-o"
            size={30}
            color="black"
            style={{ marginRight: 20 }}
          />
        </IconContainer>
      </TouchableOpacity>
    </Container>
  );
};

export default ActionsButtons;
