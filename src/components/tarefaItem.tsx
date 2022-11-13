import { Text, Checkbox, IconButton } from "react-native-paper";
import { StyleSheet, View } from "react-native";
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
  const textDecorationLine = tarefa.done ? "line-through" : "none";

  return (
    <View style={styles.container}>
      <Checkbox
        status={tarefa.done ? "checked" : "unchecked"}
        onPress={() => toggleDone(tarefa.id)}
      />

      <Text
        style={{
          textDecorationLine,
          flexGrow: 2,
        }}
        variant="bodyMedium"
        onPress={() => goToTarefa(tarefa.id)}
      >
        {tarefa.name}
      </Text>

      <IconButton icon="delete" onPress={() => onDelete(tarefa.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
