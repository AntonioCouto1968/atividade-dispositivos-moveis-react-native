import { ulid } from "ulid";
import { Actor, TarefaActions, TarefaActionsEnum, TarefasState } from "./types";

export const makeInitialTarefaState = (): TarefasState => ({
  tarefas: [],
  error: "",
  name: "",
  search: "",
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

export const writeTask: Actor<TarefaActions.Write> = (state, action) => {
  return {
    ...state,
    name: action.payload.name,
  };
};

export const addTask: Actor<TarefaActions.Add> = (state) => {
  if (state.name === "") {
    return {
      ...state,
      error: "Nome da tarefa não pode ser vazio",
    };
  }

  const hasTaskAlready = state.tarefas.some((t) => t.name === state.name);

  if (hasTaskAlready) {
    return {
      ...state,
      error: "Nome da tarefa já existe",
    };
  }

  return {
    ...state,
    tarefas: [
      ...state.tarefas,
      {
        id: ulid(),
        name: state.name,
        done: false,
        createdAt: new Date(),
      },
    ],
    error: "",
    name: "",
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

    case TarefaActionsEnum.search:
      return searchTask(state, action);

    default:
      return state;
  }
};
