import {
  DefaultTheme,
  MD3Theme
} from "react-native-paper";

export const createTheme = (): MD3Theme => {
  const theme = {
    ...DefaultTheme,
  };

  theme.colors.primary = "green";
  theme.colors.secondary = "yellow";

  return theme;
};
