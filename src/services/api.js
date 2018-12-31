import request from '../utils/request';
// 用户
export function getAuth() {
  return request('/api/getAuth');
}
export function changeAuth(data) {
  return request('/api/changeAuth', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}
export function getDynamic() {
  return request('api/dynamic');
}
export function validateUser() {
  return request('/api/validateUser');
}
export function queryUser() {
  return request('/api/user.json');
}
export function registerUser(data) {
  return request('/api/register', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}
export function userLogin(data) {
  return request('/api/loginUser', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}
export function emailLogin(data) {
  return request('/api/loginEmail', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}
export function loginOut() {
  return request('api/logout');
}
// 文章
export function queryArticle() {
  return request('/api/article');
}
export function initArticleEdit(id) {
  return request(`/api/initEdit/${id}`);
}
export function initArticleCreate() {
  return request('api/article/create');
}
export function editArticle(data) {
  return request('/api/article/create', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}
export function deleteArticle(id) {
  return request(`/api/article/${id}/delete`, {
    method: 'DELETE'
  });
}
// 标签
export function queryTags() {
  return request('/api/tag');
}
export function addTags() {
  return request('/api/tag/create', {
    method: 'PUT'
  });
}
export function editorTags(data) {
  return request(`/api/tag/${data.id}/editor`, {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export function deleteTags(id) {
  return request(`/api/tag/${id}/delete`, {
    method: 'DELETE'
  });
}
// 栏目
export function queryColumn() {
  return request('/api/column');
}
export function queryColumnParent() {
  return request('/api/columnParent');
}
export function editColumn(data) {
  return request('/api/column/create', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}
export function editPreColumn(data) {
  return request('/api/columnParentCreate', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}
export function deleteColumn(id) {
  return request(`/api/column/${id}/delete`, {
    method: 'DELETE'
  });
}
