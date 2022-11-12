import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { TextInput } from "react-native-paper";

import { ListaItems } from "@Components/listaItems";


export default function Home() {
  const [lista, setLista] = useState<string[]>([]);
  const [state, setState] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder=""
        value={state}
        onChangeText={(text) => setState(text)}
      />
      <Button
        title="Teste"
        onPress={() => {
          setLista([...lista, state]);
        }}
      />

      <ListaItems listaItems={lista} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "2%",
    // flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
});
