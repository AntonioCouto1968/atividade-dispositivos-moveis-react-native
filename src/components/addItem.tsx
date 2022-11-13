import { Button } from "react-native";
import { TextInput, HelperText } from "react-native-paper";

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
        label="Adicionar tarefa"
      />
      <HelperText type="error" visible={hasError}>
        {error}
      </HelperText>
      <Button title="Adicionar" color={"green"} onPress={onAdd} />
    </>
  );
};
