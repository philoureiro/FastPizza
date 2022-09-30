import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Home: {
        screens: {
          Home: {
            screens: {
              Home: "Home",
            },
          },
          Publication: {
            screens: {
              Publication: "Publication",
            },
          },
          Profile: {
            screens: {
              Profile: "Publication",
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
