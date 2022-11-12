import * as React from "react";
import { Appbar } from "react-native-paper";
import { expo } from "../../app.json";

export const MyAppBar = () => (
  <Appbar.Header>
    <Appbar.Content title={expo.name} />
  </Appbar.Header>
);

