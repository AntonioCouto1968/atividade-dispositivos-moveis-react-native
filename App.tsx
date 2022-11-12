import { Provider as PaperProvider } from "react-native-paper";
import Home from "@Screens/index";
import { MyAppBar } from "@Components/appBar";
import { createTheme } from "@Themes/createTheme";

export default function App() {
  const theme = createTheme();

  return (
    <PaperProvider theme={theme}>
      <MyAppBar />
      <Home />
    </PaperProvider>
  );
}
