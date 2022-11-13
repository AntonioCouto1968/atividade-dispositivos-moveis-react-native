import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import { TarefaItem } from "@Components/tarefaItem";

import { TarefaActions } from "../reducers/tarefa/types";
import { makeSearchByName } from "../helpers/search";
import { Tarefa } from "../model/tarefa";

interface Props {
  tarefas: Tarefa[];
  search: string;
  dispatch: (tarefas: TarefaActions.All) => void;
  goToTarefa: (id: string) => void;
}

export const ListaTarefas = ({
  search,
  tarefas,
  dispatch,
  goToTarefa,
}: Props) => {
  const doSearch = makeSearchByName(search);

  const deleteTask = (id: string) => {
    dispatch({ type: "REMOVE", payload: { id } });
  };

  const toggleDone = (id: string) => {
    dispatch({ type: "TOGGLE", payload: { id } });
  };

  return (
    <View style={styles.container}>
      <Text variant="bodyLarge">Items</Text>
      {tarefas
        .filter((tarefa) => doSearch(tarefa))
        .map((tarefa) => (
          <TarefaItem
            tarefa={tarefa}
            key={tarefa.id}
            onDelete={deleteTask}
            toggleDone={toggleDone}
            goToTarefa={goToTarefa}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "2%",
    marginTop: "4%",
  },
});
