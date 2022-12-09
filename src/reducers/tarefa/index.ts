import { toDate } from "date-fns";
import moment, { ISO_8601, now } from "moment";
// import { isDate } from "date-fns";
import { Actor, TarefaActions, TarefaActionsEnum, TarefasState } from "./types";

export const makeInitialTarefaState = (): TarefasState => ({
  tarefas: [],
  error: "",
  error2: "",
  name: "",
  search: "",
  prazo: "",
});

export const removeTask: Actor<TarefaActions.Remove> = (state, action) => {
  return {
    ...state,
    tarefas: state.tarefas.filter((tarefa) => tarefa.id !== action.payload.id),
  };
};

export const toggleTask: Actor<TarefaActions.Toggle> = (state, action) => {
  return {
    ...state,
    tarefas: state.tarefas.map((t) =>
      t.id === action.payload.id ? { ...t, done: !t.done } : t
    ),
  };
};

export const writeTask: Actor<TarefaActions.Write> = (state, {payload}) => {

  const hasTaskAlready = state.tarefas.some((t) => t.name === payload.name);
  
  if (hasTaskAlready) {
    return {
      ...state,
      name: payload.name,
      error: "Nome da tarefa já existe",
    };
  }

  return {
    ...state,
    error: "",
    name: payload.name,
  };
};

export const writeTask2: Actor<TarefaActions.Write2> = (state, {payload}) => {

  // const dataInvalida = isDate(payload);
  const datavalida = (moment(payload.prazo, "DD/MM/YYYY HH:mm", true).isValid());
  
  if (!datavalida) {
    return {
      ...state,
      prazo: payload.prazo,
      error2: "A data não é válida",
    };
  }

  return {
    ...state,
    error2: "",
    prazo: payload.prazo,
  };
};

export const addTask: Actor<TarefaActions.Add> = (state) => {
  if (state.name === "") {
    return {
      ...state,
      error: "Nome da tarefa não pode ser vazio",
    };
  }

  if (state.error || state.error2) {
     return state;
   }

  return {
    ...state,
    tarefas: [
      ...state.tarefas,
      {
        id: (state.tarefas.length + 1).toString(),
        name: state.name,
        done: false,
        createdAt: new Date(),
        deadline: new Date(moment(state.prazo, "DD/MM/YYYY HH:mm", true).format("YYYY-MM-DD HH:mm")),
      },
    ],
    error: "",
    name: "",
    error2: "",
    prazo: "",
  };
};

export const searchTask: Actor<TarefaActions.Search> = (state, action) => {
  return {
    ...state,
    search: action.payload.search,
  };
};

export const tarefaReducer = (
  state: TarefasState,
  action: TarefaActions.All
): TarefasState => {
  switch (action.type) {
    case TarefaActionsEnum.add:
      return addTask(state, action);

    case TarefaActionsEnum.remove:
      return removeTask(state, action);

    case TarefaActionsEnum.toggle:
      return toggleTask(state, action);

    case TarefaActionsEnum.write:
      return writeTask(state, action);

    case TarefaActionsEnum.write2:
      return writeTask2(state, action);

    case TarefaActionsEnum.search:
      return searchTask(state, action);

    default:
      return state;
  }
};
