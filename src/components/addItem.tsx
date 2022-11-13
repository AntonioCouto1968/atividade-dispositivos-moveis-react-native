import { Button } from "react-native";
import { TextInput } from "react-native-paper";

interface Props {
  error: string;
  name: string;
  onAdd: () => void;
  onTextChange: (name: string) => void;
}

export const AddItem = ({ error, name, onTextChange, onAdd }: Props) => {
  const hasError = error.length > 0;

  return (
    <>
      <TextInput
        placeholder="Digite a tarefa"
        value={name}
        onChangeText={onTextChange}
        error={hasError}
        label={hasError ? error : "Tarefa"}
      />
      <Button title="Adicionar" color={"green"} onPress={() => onAdd()} />
    </>
  );
};
