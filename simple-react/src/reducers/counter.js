import { types } from '../actions/counter';

const initialState = {
  number: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number > 0 ? state.number - 1 : state.number
      };
    default:
      return state;
  }
};