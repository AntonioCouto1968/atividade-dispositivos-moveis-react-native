import { List } from "react-native-paper";

interface Props {
  listaItems: string[];
}

export const ListaItems = ({ listaItems }: Props) => {
  const lista = listaItems.map((item) => <List.Item title={item} key={item} />);

  return <List.Section title="Items">{lista}</List.Section>;
};
