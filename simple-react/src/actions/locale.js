export const types = {
  CHANGE_LOCALE: 'CHANGE_LOCALE',
};

export const changeLocale = (payload) => ({
  type: types.CHANGE_LOCALE,
  payload: {
    locale: payload.locale,
    messages: payload.messages
  }
});