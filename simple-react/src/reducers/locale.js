import { types } from '../actions/locale';

const initialState = {
  locale: () => navigator.language.split(/[-_]/)[0]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_LOCALE:
      return {
        ...state,
        locale: action.payload.locale,
        messages: action.payload.messages
      };
    default:
      return state;
  }
};