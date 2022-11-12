import { Appbar } from "react-native-paper";
import { expo } from "../../app.json";
import { TarefaActions, TarefasState } from "../reducers/tarefa/types";
import { Search } from "./search";

interface Props {
  appState: TarefasState;
  dispatch: (action: TarefaActions.All) => void;
}

export const MyAppBar = ({ appState, dispatch }: Props) => {
  const onChangeText = (search: string) => {
    dispatch({ type: "SEARCH", payload: { search } });
  };

  return (
    <Appbar.Header>
      <Appbar.Content title={expo.name} />
      <Search search={appState.search} onChangeText={onChangeText} />
    </Appbar.Header>
  );
};
