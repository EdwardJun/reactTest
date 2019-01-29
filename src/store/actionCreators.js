import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST} from '@/store/actionTypes.js'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

export const getInitList = () => ({
  type: GET_INIT_LIST
})

// 异步操作
/* export const getTestList = () => {
  return (dispatch) => {
    axios.get('/static/test.json').then((res) => {
      const data = res.data
      const action = initListAction(data)
      dispatch(action)
      // console.log(data)
      // const action = initListAction(data)
      // store.dispatch(action)
    })
  }
} */












