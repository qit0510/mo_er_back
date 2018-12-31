import {
  queryColumn, queryColumnParent, editColumn, deleteColumn, editPreColumn
} from '../services/api';
import {routerRedux} from 'dva/router';
export default {
  namespace: 'column',
  state: {
    parent_column: [],
    data: [],
    target:[]
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
    },
  },
  effects: {
    * initData({payload}, {call, put}) {  // eslint-disable-line
      const res = yield call(queryColumn);
      yield put({type: 'save', data: res.data});
    },
    * initParent({payload}, {call, put}) {  // eslint-disable-line
      const res = yield call(queryColumnParent);
      yield put({type: 'saveParentColumn', data: res.data});
    },
    * editData({payload, data}, {call, put}) {  // eslint-disable-line
      yield call(editColumn, data);
    },
    * createPreColum({ payload, data }, { call, put }) {  // eslint-disable-line
      yield call(editPreColumn, data);
    },
    * deleteData({payload, id}, {call, put}) {  // eslint-disable-line
      yield call(deleteColumn, id);
      yield put({type: 'delete', id});
    },
    * editCloumnData({payload,id}, {call, put}) {
      yield put({type:'edit',id});
      yield put(routerRedux.push('/topic/edit?'+id));
    }
  },
  reducers: {
    save(state, {data}) {
      return {
        ...state,
        data,
      };
    },
    saveParentColumn(state, {data}) {
      return {
        ...state,
        parent_column: data,
      };
    },
    delete(state, {id}) {
      const data = state.data.filter(item => item.id !== id);
      return {
        ...state,
        data,
      };
    },
    edit(state, {id}) {
      const target = state.data.filter(item => item.id === id);
      return {
        ...state,
        target
      };
    },
  },

};
