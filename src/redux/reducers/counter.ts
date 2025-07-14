type StateType = {
  count: number;
};

type ActionType = {
  type: string;
  payload: number;
};

const ACTION_TYPE_DATA = {
  MINUS_NUMBER: 'counter/MINUS_NUMBER',
  PLUS_NUMBER: 'counter/PLUS_NUMBER'
};

export const minusNumber = (value: number) => ({ type: ACTION_TYPE_DATA.MINUS_NUMBER, payload: value });
export const plusNumber = (value: number) => ({ type: ACTION_TYPE_DATA.PLUS_NUMBER, payload: value });

const initialState = {
  count: 0
};

const counter = (state: StateType = initialState, action: ActionType) => {
  switch (action.type) {
    case ACTION_TYPE_DATA.MINUS_NUMBER:
      return { ...state, count: state.count - action.payload };
    case ACTION_TYPE_DATA.PLUS_NUMBER:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

export default counter;
