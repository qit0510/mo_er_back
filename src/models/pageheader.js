export default {

  namespace: 'pageheader',

  state: {
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {},

  reducers: {
    changeBackground(state) {
      return {
        ...state,
        isDark: (!state.isDark),
      };
    },
  },

};
