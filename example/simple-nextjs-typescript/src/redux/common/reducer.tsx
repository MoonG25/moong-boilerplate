import { IModal } from './state'
import * as actions from './actions'

const initialState: IModal = {
  isOpen: false,
  type: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.OPEN_MODAL:
      return Object.assign({}, state, { ...action.payload })
    case actions.CLOSE_MODAL:
      return Object.assign({}, state, { ...action.payload })
    default: return state
  }
}