import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";

import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import { AuthProvider } from "./src/contexts/Auth/Auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthProvider>
          <NativeBaseProvider>
            <Navigation colorScheme={colorScheme} />
          </NativeBaseProvider>
          <StatusBar />
        </AuthProvider>
      </SafeAreaProvider>
    );
  }
}
