import { useRef } from "react";
import { TextInput as NativeTextInput } from "react-native";
import { TextInput, HelperText, Button } from "react-native-paper";

interface Props {
  error: string;
  error2: string;
  name: string;
  prazo: string;
  onAdd: () => void;
  onTextChange: (name: string) => void;
  onPrazoChange: (prazo: string) => void;
}

export const AddItem = ({ error, error2,  name, prazo, onTextChange, onPrazoChange, onAdd }: Props) => {
  const hasError = error.length > 0;
  const hasError2 = error2.length > 0;

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
      <TextInput
        placeholder="Digite o prazo final 'DD/MM/AAAA HH:MM'"
        value={prazo}
        onChangeText={onPrazoChange}
        error={hasError2}
        label="Adicionar prazo"
        ref={inputRef}
      />
      <HelperText type="error" visible={hasError2}>
        {error2}
      </HelperText>
      <Button
        mode="contained"
        disabled={name.length === 0 || prazo.length === 0 || hasError || hasError2}
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
