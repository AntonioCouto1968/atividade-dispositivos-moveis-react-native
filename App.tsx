import { Provider as PaperProvider } from "react-native-paper";
import { Home } from "@Screens/index";
import { MyAppBar } from "@Components/appBar";
import { createTheme } from "@Themes/createTheme";
import { useReducer } from "react";
import { makeInitialTarefaState, tarefaReducer } from "./src/reducers";

export default function App() {
  const [appState, dispatch] = useReducer(
    tarefaReducer,
    makeInitialTarefaState()
  );

  const theme = createTheme();

  return (
    <PaperProvider theme={theme}>
      <MyAppBar appState={appState} dispatch={dispatch} />
      <Home appState={appState} dispatch={dispatch} />
    </PaperProvider>
  );
}
