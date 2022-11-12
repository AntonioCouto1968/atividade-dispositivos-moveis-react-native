import { Tarefa } from "../../model/tarefa";
import { BaseAction } from "../common";

export const TarefaActions = {
  add: "ADD",
  remove: "REMOVE",
  toggle: "TOGGLE",
  write: "WRITE",
} as const;

export type TarefaActions = typeof TarefaActions;

export type TarefaActionsType =
  typeof TarefaActions[keyof typeof TarefaActions];

export type BaseTarefaAction = BaseAction<TarefaActionsType>;

export interface TarefasState {
  tarefas: Tarefa[];
  error: string;
  name: string;
}

export type TarefaAction = AddTask | RemoveTask | ToggleTask | WriteTask;

export interface ToggleTask {
  type: TarefaActions["toggle"];
  payload: {
    id: string;
  };
}

export interface RemoveTask {
  type: TarefaActions["remove"];
  payload: {
    id: string;
  };
}

export interface AddTask {
  type: TarefaActions["add"];
  payload: {};
}

export interface WriteTask {
  type: TarefaActions["write"];
  payload: {
    name: string;
  };
}

export type Actor<T extends TarefaAction> = (
  state: TarefasState,
  action: T
) => TarefasState;
