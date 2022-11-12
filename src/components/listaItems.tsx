import { List } from "react-native-paper";

import { TarefaItem } from "@Components/tarefaItem";

import { Tarefa } from "../model/tarefa";
import { TarefaAction } from "../reducers/tarefa/types";

interface Props {
  tarefas: Tarefa[];
  dispatch: (tarefas: TarefaAction) => void;
}

export const ListaTarefas = ({ tarefas, dispatch }: Props) => {
  const changeStatusTarefa = (id: string) =>
    dispatch({ type: "TOGGLE", payload: { id } });

  return (
    <List.Section title="Items">
      {tarefas.map((tarefa) => (
        <TarefaItem
          tarefa={tarefa}
          key={tarefa.id}
          changeStatus={changeStatusTarefa}
        />
      ))}
    </List.Section>
  );
};
