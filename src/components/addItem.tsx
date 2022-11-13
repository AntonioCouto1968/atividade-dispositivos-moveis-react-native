import { useRef } from "react";
import { TextInput as NativeTextInput } from "react-native";
import { TextInput, HelperText, Button } from "react-native-paper";

interface Props {
  error: string;
  name: string;
  onAdd: () => void;
  onTextChange: (name: string) => void;
}

export const AddItem = ({ error, name, onTextChange, onAdd }: Props) => {
  const hasError = error.length > 0;

  const inputRef = useRef<NativeTextInput>(null);

  return (
    <>
      <TextInput
        placeholder="Digite a tarefa"
        value={name}
        onChangeText={onTextChange}
        error={hasError}
        label="Adicionar tarefa"
        ref={inputRef}
      />
      <HelperText type="error" visible={hasError}>
        {error}
      </HelperText>
      <Button
        mode="contained"
        disabled={name.length === 0 || hasError}
        style={{ borderRadius: 5 }}
        onPress={() => {
          onAdd();
          inputRef.current?.focus();
        }}
      >
        Adicionar
      </Button>
    </>
  );
};
