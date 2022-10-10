import {
  Image,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
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
import { useState } from "react";
import { useAuth } from "../../../contexts/Auth/Auth";
import { AccountModel } from "../../../contexts/Auth/AuthType";

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
  token: string;
}

const FormsComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useAuth();

  const handleLogin = async () => {
    try {
      const res = await fetch(
        `https://fastpizza-api.herokuapp.com/user/authenticate`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          mode: "cors",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      if (res.ok) {
        const data: IData = await res.json();
        if (data.data) {
          const userInfo: AccountModel = {
            token: data.token,
            _id: data.data._id,
            name: data.data.name,
            email: data.data.email,
          };
          authContext.signIn(userInfo);
        }
      } else {
        console.log(res);
      }
    } catch (error) {}
  };
  return (
    <Container>
      <InputComponent
        placeholder={"Email"}
        type={email}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
          const value = e.nativeEvent.text;
          setEmail(value);
        }}
      />
      <InputComponent
        placeholder={"Password"}
        secureTextEntry={true}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
          const value = e.nativeEvent.text;
          setPassword(value);
        }}
      />
      <TextComponent>Forgot password?</TextComponent>
      <ButtonComponent onPress={() => handleLogin()}>
        <TextComponentCenter>Log in</TextComponentCenter>
      </ButtonComponent>
      <Box>
        <Image source={icon} />
        <TextC>Log in with Facebook</TextC>
      </Box>
    </Container>
  );
};

export default FormsComponent;
