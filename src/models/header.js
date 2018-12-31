import {getAuth} from '../services/api';

export default {

  namespace: 'header',
  state: {
    isDark: false,
    visible: false,
    auth:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    * personalData({payload}, {call, put}) {  // eslint-disable-line
      const res = yield call(getAuth);
      yield put({type: 'saveAuth', data: res.data});
    },
  },

  reducers: {
    changeMenu(state, { data }) {
      return {
        ...state,
        current: data,
      };
    },
    showDrawer(state, { data }) {
      return {
        ...state,
        visible: data,
      };
    },

    saveAuth(state, {data}) {
      return{
        ...state,
        auth:data
      };
    },
    closeDrawer(state, { data }) {
      return {
        ...state,
        visible: data, data
      };
    },
    changeBackground(state) {
      return {
        ...state,
        isDark: (!state.isDark),
      };
    },
  },

};
