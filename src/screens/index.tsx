import { useReducer } from "react";
import { StyleSheet, View, Button } from "react-native";
import { TextInput } from "react-native-paper";

import { ListaTarefas } from "@Components/listaItems";
import {
  makeInitialTarefaState,
  tarefaReducer,
} from "../reducers/tarefa";

export default function Home() {
  const [homeState, homeDispatch] = useReducer(
    tarefaReducer,
    makeInitialTarefaState()
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder=""
        value={homeState.name}
        onChangeText={(text) =>
          homeDispatch({ type: "WRITE", payload: { name: text } })
        }
        error={homeState.error.length > 0}
        label={homeState.error.length > 0 ? homeState.error : "Tarefa"}
      />
      <Button
        title="Teste"
        color={"green"}
        onPress={() => {
          homeDispatch({ type: "ADD", payload: { name } });
        }}
      />

      <ListaTarefas tarefas={homeState.tarefas} dispatch={homeDispatch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "2%",
    // flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
});
