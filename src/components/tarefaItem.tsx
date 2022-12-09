import { Text, Checkbox, IconButton, Surface } from "react-native-paper";
import { StyleSheet, Image } from "react-native";
import { Tarefa } from "../model/tarefa";

interface Props {
  tarefa: Tarefa;
  onDelete: (id: string) => void;
  toggleDone: (id: string) => void;
  goToTarefa: (id: string) => void;
}

export const TarefaItem = ({
  tarefa,
  onDelete,
  toggleDone,
  goToTarefa,
}: Props) => {
  styles.container.opacity = tarefa.done ? 0.5 : 1;

  const atrasada = (tarefa?.deadline < new Date() && !tarefa?.done);

  return (
    <Surface style={styles.container} elevation={1}>
      <Checkbox
        status={tarefa.done ? "checked" : "unchecked"}
        onPress={() => toggleDone(tarefa.id)}
      />

      <Text
        style={styles.text}
        variant="bodyLarge"
        onPress={() => goToTarefa(tarefa.id)}
      >
        {tarefa.name}
      </Text>

      <IconButton icon="delete" onPress={() => onDelete(tarefa.id)} />

      <Text
        style={styles.text}
        variant="bodyLarge"
      >{atrasada? "⏰" : ""}
      </Text>

    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "1%",
    marginTop: "1%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    opacity: 1,
  },
  text: {
    flexGrow: 2
  },
  image: {
    borderRadius: 2,
    height: 15,
    width: 15,
  },
});
