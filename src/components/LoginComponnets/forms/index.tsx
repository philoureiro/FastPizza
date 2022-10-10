import { Image } from "react-native";
import {
  ButtonComponent,
  Container,
  InputComponent,
  TextComponent,
  TextComponentCenter,
  Box,
  TextC,
} from "./styles";
import icon from "../../../assets/Icon.png";
import { useEffect, useState } from "react";

interface IData {
  sucess: boolean;
  message: string;
  status: number;
  data?: {
    _id: string;
    name: string;
    email: string;
    __v: number;
  };
  token?: string;
}

const FormsComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState();
  function handleLogin() {
    fetch(`https://fastpizza-api.herokuapp.com/user/authenticate`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  }

  useEffect(() => {});
  return (
    <Container>
      <InputComponent
        placeholder={"Username"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <InputComponent
        placeholder={"Password"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <TextComponent>Forgot password?</TextComponent>
      <ButtonComponent>
        <TextComponentCenter onPress={handleLogin()}>
          Log in
        </TextComponentCenter>
      </ButtonComponent>
      <Box>
        <Image source={icon} />
        <TextC>Log in with Facebook</TextC>
      </Box>
    </Container>
  );
};

export default FormsComponent;
