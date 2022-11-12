import { ulid } from "ulid";
import {
  Actor,
  AddTask,
  RemoveTask,
  TarefaAction,
  TarefaActions,
  TarefasState,
  ToggleTask,
  WriteTask,
} from "./types";

export const makeInitialTarefaState = (): TarefasState => ({
  tarefas: [],
  error: "",
  name: "",
});

export const removeTask: Actor<RemoveTask> = (state, action): TarefasState => {
  return {
    ...state,
    tarefas: state.tarefas.filter((tarefa) => tarefa.id !== action.payload.id),
  };
};

export const toggleTask: Actor<ToggleTask> = (state, action): TarefasState => {
  return {
    ...state,
    tarefas: state.tarefas.map((t) =>
      t.id === action.payload.id ? { ...t, done: !t.done } : t
    ),
  };
};

export const writeTask: Actor<WriteTask> = (state, action): TarefasState => {
  return {
    ...state,
    name: action.payload.name,
  };
};

export const addTask: Actor<AddTask> = (state): TarefasState => {
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

export const tarefaReducer = (
  state: TarefasState,
  action: TarefaAction
): TarefasState => {
  switch (action.type) {
    case TarefaActions.add:
      return addTask(state, action);

    case TarefaActions.remove:
      return removeTask(state, action);

    case TarefaActions.toggle:
      return toggleTask(state, action);

    case TarefaActions.write:
      return writeTask(state, action);

    default:
      return state;
  }
};
