import { Tarefa } from "../../model/tarefa";
import { BaseAction } from "../";

export const TarefaActionsEnum = {
  add: "ADD",
  remove: "REMOVE",
  toggle: "TOGGLE",
  write: "WRITE",
  write2: "WRITE2",
  search: "SEARCH",
} as const;

export type TarefaActionsType = typeof TarefaActionsEnum;

export type TarefaActionsKeys =
  typeof TarefaActionsEnum[keyof typeof TarefaActionsEnum];

export type BaseTarefaAction = BaseAction<TarefaActionsKeys>;

export interface TarefasState {
  tarefas: Tarefa[];
  error: string;
  error2: string;
  name: string;
  search: string;
  prazo: string;
}

export namespace TarefaActions {
  export interface Toggle {
    type: TarefaActionsType["toggle"];
    payload: {
      id: string;
    };
  }

  export interface Remove {
    type: TarefaActionsType["remove"];
    payload: {
      id: string;
    };
  }

  export interface Add {
    type: TarefaActionsType["add"];
    payload: {};
  }

  export interface Write {
    type: TarefaActionsType["write"];
    payload: {
      name: string;
    };
  }

  export interface Write2 {
    type: TarefaActionsType["write2"];
    payload: {
      prazo: string;
    };
  }

  export interface Search {
    type: TarefaActionsType["search"];
    payload: {
      search: string;
    };
  }

  export type All = Add | Remove | Toggle | Write | Write2 | Search;
}

export type Actor<T extends TarefaActions.All> = (
  state: TarefasState,
  action: T
) => TarefasState;
