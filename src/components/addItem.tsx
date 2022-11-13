import { useRef } from "react";
import { Button, TextInput as NativeTextInput } from "react-native";
import { TextInput, HelperText } from "react-native-paper";

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
        title="Adicionar"
        color={"green"}
        onPress={() => {
          onAdd();
          inputRef.current?.focus();
        }}
      />
    </>
  );
};
