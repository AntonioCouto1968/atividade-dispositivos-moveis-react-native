import { StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { ListaTarefas } from "@Components/tarefaLista";
import { AddItem } from "@Components/addItem";
import {
  TarefaActions,
  TarefaActionsEnum,
  TarefasState,
} from "../reducers/tarefa/types";
import { RootStackParamList } from "../helpers/navigator";

type NavigatorProps = NativeStackScreenProps<RootStackParamList, "Home">;

interface Props extends NavigatorProps {
  appState: TarefasState;
  dispatch: (action: TarefaActions.All) => void;
}

export function HomePage({ appState, dispatch, navigation }: Props) {
  const onTextChange = (name: string) => {
    dispatch({ type: TarefaActionsEnum.write, payload: { name } });
  };

  const onPrazoChange = (prazo: string) => {
    dispatch({ type: TarefaActionsEnum.write2, payload: { prazo } });
  };

  const onAdd = () => {
    dispatch({ type: TarefaActionsEnum.add, payload: {} });
  };

  const goToTarefa = (id: string) => {
    navigation.navigate("Tarefa", { taskId: id });
  };

  return (
    <View style={styles.container}>
      <AddItem
        error={appState.error}
        name={appState.name}
        onTextChange={onTextChange}
        onPrazoChange={onPrazoChange}
        onAdd={onAdd}
        error2={appState.error2}
        prazo={appState.prazo}
      />
      <ListaTarefas
        search={appState.search}
        tarefas={appState.tarefas}
        dispatch={dispatch}
        goToTarefa={goToTarefa}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "2%",
    justifyContent: "space-between",
  },
});
