import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { formatDistance, format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { RootStackParamList } from "../helpers/navigator";
import { TarefasState } from "../reducers/tarefa/types";

type NavigatorProps = NativeStackScreenProps<RootStackParamList, "Tarefa">;

interface Props extends NavigatorProps {
  appState: TarefasState;
}

const TarefaNotFound = () => (
  <View style={styles.container}>
    <Text>Tarefa não encontrada</Text>
  </View>
);

export const TarefaPage = ({ route, appState }: Props) => {
  const { taskId } = route.params;

  const tarefa = appState.tarefas.find((tarefa) => tarefa.id === taskId);
  const atrasada = (tarefa?.deadline < new Date() && !tarefa?.done);
  const afazer = (!tarefa?.done && !atrasada);

  if (!tarefa) {
    return <TarefaNotFound />;
  }

  return (
    <View style={styles.container}>
      <Text variant="displaySmall">{tarefa.name}</Text>

      <Image
        source={{
          uri: "https://picsum.photos/id/13/2500/1667?blur=2",
          width: 200,
          height: 200,
        }}
        style={styles.image}
      />

      <Text variant="bodyLarge">Feita? {tarefa.done? "👍" : "Nop 👎"}</Text>

      <Text variant="bodyLarge">
        Data de Criação:
        {format(tarefa.createdAt, " eeee, dd/MM/yyyy HH:mm", { locale: ptBR })}
      </Text>

      <Text variant="bodyLarge">
        {formatDistance(tarefa.createdAt, new Date(), {
          addSuffix: true,
          locale: ptBR,
        })}
      </Text>

      <Text variant="bodyLarge" >
        Prazo para Entrega:
        {format(tarefa.deadline, " eeee, dd/MM/yyyy HH:mm", { locale: ptBR })}
      </Text>

      <Text style={styles.alerta} variant="bodyLarge"> 
        {atrasada? "Atrasada " + formatDistance(tarefa?.deadline, new Date(), {
                addSuffix: true,
                locale: ptBR,
                }) : ""}
      </Text>

      <Text style={styles.aviso} variant="bodyLarge"> 
        {afazer? "Vence em " + formatDistance(new Date(), tarefa?.deadline, {
                addSuffix: false,
                locale: ptBR,
                }) : ""}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "1%",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    flex: 1,
  },
  image: {
    borderRadius: 10,
  },
  alerta: {
    fontWeight: 'bold',
    color: 'red',
  },
  aviso: {
    fontStyle: 'italic',
    color: 'blue',
  }
});
