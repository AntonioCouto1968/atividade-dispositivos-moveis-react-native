import { Provider as PaperProvider } from "react-native-paper";
import { useColorScheme } from "react-native";
import { useReducer } from "react";

import { Home } from "@Screens/index";
import { MyAppBar } from "@Components/appBar";
import { createTheme } from "@Themes/createTheme";
import { makeInitialTarefaState, tarefaReducer } from "./src/reducers";

export default function App() {
  const colorScheme = useColorScheme();

  const [appState, dispatch] = useReducer(
    tarefaReducer,
    makeInitialTarefaState()
  );

  const useDarkMode = colorScheme === "dark";

  const theme = createTheme();

  return (
    <PaperProvider theme={theme[useDarkMode ? "dark" : "light"]}>
      <MyAppBar appState={appState} dispatch={dispatch} />
      <Home appState={appState} dispatch={dispatch} />
    </PaperProvider>
  );
}
