import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes.js'
import axios from 'axios'
import { initListAction } from './actionCreators.js'

function* getInitList () {
  try {
    const res = yield axios.get('../static/test.json')
    const action = initListAction(res.data)
    yield put(action)
  } catch (e) {
    console.log('test.json 网络请求失败')
  }
  /* axios.get('../static/test.json').then((res) => {
    const data = res.data
    const action = initListAction(data)
    console.log(action)
    put(action)
    // store.dispatch(action)
  }) */
}

function* mySaga () {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;