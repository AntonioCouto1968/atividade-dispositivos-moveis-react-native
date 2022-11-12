import { StyleSheet, View } from "react-native";

import { ListaTarefas } from "@Components/tarefaLista";
import { AddItem } from "@Components/addItem";
import {
  TarefaActions,
  TarefaActionsEnum,
  TarefasState,
} from "../reducers/tarefa/types";

interface Props {
  appState: TarefasState;
  dispatch: (action: TarefaActions.All) => void;
}

export function Home({ appState, dispatch }: Props) {
  const onTextChange = (name: string) => {
    dispatch({ type: TarefaActionsEnum.write, payload: { name } });
  };

  const onAdd = () => {
    dispatch({ type: TarefaActionsEnum.add, payload: {} });
  };

  return (
    <View style={styles.container}>
      <AddItem
        error={appState.error}
        name={appState.name}
        onTextChange={onTextChange}
        onAdd={onAdd}
      />
      <ListaTarefas
        search={appState.search}
        tarefas={appState.tarefas}
        dispatch={dispatch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "2%",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
});
