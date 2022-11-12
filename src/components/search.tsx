import { useState, useRef } from "react";
import { TextInput, View } from "react-native";
import { Appbar } from "react-native-paper";

interface Props {
  search: string;
  onChangeText: (name: string) => void;
}

export const Search = ({ onChangeText, search }: Props) => {
  const [visible, setVisible] = useState(false);
  const inputRef = useRef<TextInput>(null);

  return (
    <>
      {visible && (
        <TextInput
          placeholder="Busca"
          ref={inputRef}
          style={{
            minWidth: 70,
            padding: "2%",
          }}
          value={search}
          onChangeText={onChangeText}
        />
      )}
      <Appbar.Action
        icon="magnify"
        onPress={() => {
          setVisible(!visible);

          if (inputRef.current && visible) {
            inputRef.current.focus();
          }
        }}
      />
    </>
  );
};
