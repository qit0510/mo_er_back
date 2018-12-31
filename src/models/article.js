import {
  deleteArticle, editArticle, initArticleCreate, queryArticle, initArticleEdit
} from '../services/api';

export default {
  namespace: 'article',
  state: {
    data: [],
    tags: [],
    columns: [],
  },
  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
      history.listen((location) => {
        if (location.pathname === '/art/art_create') {
          dispatch({
            type: 'initCreateArticle',
          });
        } else if (location.pathname === '/art/art_edit') {
          dispatch({
            type: 'initCreateArticle',
          });
          dispatch({
            type: 'initEditData',
            id: location.search.substr(1)
          });
        }
      });
    },
  },
  effects: {
    * initData({payload}, {call, put}) {  // eslint-disable-line
      const res = yield call(queryArticle);
      yield put({type: 'save', data: res.data});
    },
    * initCreateArticle({payload}, {call, put}) {  // eslint-disable-line
      const res = yield call(initArticleCreate);
      yield put({type: 'saveInitData', data: res.data});
    },
    * initEditData({payload, id}, {call, put}) {
      const res = yield call(initArticleEdit, id);
      yield put({type: 'saveInitEditData', data: res.data});
    },
    * editData({payload, data}, {call, put}) {  // eslint-disable-line
      yield call(editArticle, data);
    },
    * createData({payload, data}, {call, put}) {  // eslint-disable-line
      yield call(editArticle, data);
    },
    * deleteData({payload, id}, {call, put}) {  // eslint-disable-line
      yield call(deleteArticle, id);
      yield put({type: 'delete', id});
    },
    * editArticle({payload, id}, {call, put}) {  // eslint-disable-line
      console.log(id);
      // yield call(deleteArticle, id);
      // yield put({type: 'delete', id});
    },
  },
  reducers: {
    save(state, {data}) {
      return {
        ...state,
        data,
      };
    },
    saveInitData(state, {data}) {
      return {
        ...state,
        columns: data.columns,
        tags: data.tags,
      };
    },
    saveInitEditData(state, {data}) {
      return {
        ...state,
        data
      };
    },
    delete(state, {id}) {
      const data = state.data.filter(item => item.id !== id);
      return {
        ...state,
        data,
      };
    },
    changeSearchText(state, {data}) {
      return {
        ...state,
        searchText: data,
      };
    },
  },
};
