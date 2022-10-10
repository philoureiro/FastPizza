import { Image } from "react-native";
import seperatorImage from "../../../assets/Seperator.png";
import { Container } from "./styles";
const Seperator = () => {
  return (
    <Container>
      <Image source={seperatorImage} />
    </Container>
  );
};

export default Seperator;
