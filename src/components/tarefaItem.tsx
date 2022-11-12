import { List } from "react-native-paper";
import { Tarefa } from "../model/tarefa";

interface Props {
  tarefa: Tarefa;
  changeStatus: (id: string) => void;
}

export const TarefaItem = ({ tarefa, changeStatus }: Props) => {
  const shouldStrike = tarefa.done ? "line-through" : "none";

  return (
    <List.Item
      title={tarefa.name}
      titleStyle={{
        textDecorationLine: shouldStrike,
      }}
      onPress={() => changeStatus(tarefa.id)}
    />
  );
};
