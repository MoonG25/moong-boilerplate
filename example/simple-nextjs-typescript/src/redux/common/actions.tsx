export const OPEN_MODAL = 'OPEN MODAL'
export const CLOSE_MODAL = 'CLOSE MODAL'

export const openModal = (type: string) => dispatch => {
  return dispatch({
    type: OPEN_MODAL,
    payload: { isOpen: true, type }
  })
}

export const closeModal = () => dispatch => {
  return dispatch({
    type: CLOSE_MODAL,
    payload: { isOpen: false, type: null }
  })
}