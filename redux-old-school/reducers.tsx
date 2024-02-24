import { ActionTypes } from "./action-types";

const initialState = {
  valueCounter: 0,
};

export function counterReducer(state = initialState, action: { type: string }) {
  switch (action.type) {
    case ActionTypes.COUNTER_INCREASE:
      return {
        ...state, //passando valor atual de State
        valueCounter: state.valueCounter + 1,
        // pegando o valor atual de state, e atualizando ele
        // sabendo disso lembramos que não podemos atualizar o dado diretamente, APENAS ATUALIZA-LO. Como está sendo feito aqui.
      };
    case ActionTypes.COUNTER_DECREASE:
      return {
        ...state,
        valueCounter: state.valueCounter - 1,
      };
    default: {
      return state;
    }
  }
}
