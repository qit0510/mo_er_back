import {routerRedux} from 'dva/router';
import {
  queryUser,
  registerUser,
  userLogin,
  emailLogin,
  loginOut,
  getAuth,
  changeAuth,
  getDynamic
} from '../services/api';

export default {
  namespace: 'user',
  state: {
    data: [],
    personal: [],
    dynamicData:[]
  },
  subscriptions: {
    setup({dispatch, history}) {
      // eslint-disable-line
      history.listen(location => {
        if (location.pathname === '/personal/personal_setting') {
          dispatch({
            type: 'personalData'
          });
        }
      });
    }
  },
  effects: {
    * initData({payload}, {call, put}) {
      // eslint-disable-line
      const res = yield call(queryUser);
      yield put({type: 'save', data: res.data.user});
    },
    * initDynamic({payload}, {call, put}) {
      const res = yield call(getDynamic);
      yield put({type: 'dynamic',data:res.data});
    },
    * register({payload, data}, {call, put}) {
      // eslint-disable-line
      yield call(registerUser, data);
      yield put(routerRedux.push('/login'));
    },
    * personalData({payload}, {call, put}) {
      // eslint-disable-line
      const res = yield call(getAuth);
      yield put({type: 'saveAuth', data: res.data});
    },
    * changeData({payload, data}, {call, put}) {
      // eslint-disable-line
      yield call(changeAuth, data);
      yield put({type: 'save', data:data});
      yield put(routerRedux.push('/personal/personal_core'));
    },
    * uLogin({payload, data}, {call, put}) {
      // eslint-disable-line
      yield call(userLogin, data);
      yield put(routerRedux.push('/'));
    },
    * eLogin({payload, data}, {call, put}) {
      // eslint-disable-line
      yield call(emailLogin, data);
      // yield put({type: 'save', data: res.data.user});
    },
    * exitLogin({payload}, {call, put}) {
      yield call(loginOut);
      yield put(routerRedux.push('/'));
    }
  },

  reducers: {
    save(state, {data}) {
      return {
        ...state,
        data
      };
    },
    saveAuth(state, {data}) {
      return {
        ...state,
        personal: data
      };
    },
    dynamic(state,{data}){
      return {
        ...state,
        dynamicData:data
      };
    },
    changeSrc(state, {data}) {
      return {
        ...state,
        personal: {
          ...state.personal,
          avatar: data
        }
      };
    }
  }
};
