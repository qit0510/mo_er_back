export default {

  namespace: 'topic',

  state: {
    collapsed: false,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },
  effects: {},
  reducers: {
    changeTopic(state) {
      return {
        ...state,
        collapsed: !state.collapsed,
      };
    },

  },

};
