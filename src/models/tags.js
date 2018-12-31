import {
  queryTags, addTags, editorTags, deleteTags,
} from '../services/api';

export default {

  namespace: 'tags',

  state: {
    data: [],
    z_count: 0,
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
    },
  },

  effects: {
    * initData({payload}, {call, put}) {  // eslint-disable-line
      const res = yield call(queryTags);
      yield put({ type: 'save', data: res.data });
    },
    * deleteData({payload, id}, {call, put}) {  // eslint-disable-line
      yield call(deleteTags, id);
      yield put({ type: 'delete', id });
    },
    * addData({payload}, {call, put}) {  // eslint-disable-line
      yield call(addTags);
      const res = yield call(queryTags);
      yield put({ type: 'save', data: res.data });
      // yield put({type: 'create'});
    },
    * editData({payload, data}, {call, put}) {  // eslint-disable-line
      yield call(editorTags, data);
      yield put({ type: 'saveTags', data });
    },
  },

  reducers: {
    save(state, { data }) {
      return {
        ...state,
        data,
        z_count: data.length,
      };
    },
    create(state) {
      return {
        ...state,
        data: [{ id: state.data.length + 1, title: 'Tag Name', remark: 'Tag remark' }, ...state.data],
      };
    },
    delete(state, { id }) {
      const data = state.data.filter(item => item.id !== id);
      return {
        ...state,
        data,
      };
    },
    saveTags(state, { data }) {
      const newData = [...state.data];
      const index = newData.findIndex(item => data.id === item.id);
      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        ...data,
      });
      return {
        ...state,
        data: newData,
      };
    },
  },

};
