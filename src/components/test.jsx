import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import store from '@/store/index.js'
// import test from '@/css/test.scss'
// import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TO_ITEM} from '@/store/actionTypes.js'
import {getInputChangeAction, getAddItemAction, getDeleteItemAction, getTestList, getInitList} from '@/store/actionCreators.js'
import TestUI from '@/components/testUI.jsx'
import axios from 'axios'

class Test extends React.Component {
  constructor () {
    super()
    this.state = store.getState()
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render () {
    /* return (
      <div className='test-page'>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search for..." value={this.state.inputValue} onChange={(e) => this.txtChanged(e)} ref="txt" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={() => this.handleBtnChange()}>Go!</button>
          </span>
        </div>
        <ul className={'list-group'}>
          {this.state.list.map((item, index) => {
            return <li className="list-group-item" key={index}>{item}
              <span className={test.deleteIcon} onClick={() => this.deleteData(index)}>X</span>
            </li>
          })}
        </ul>
      </div>
    ) */
    return (
      <TestUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        /* {...this.state} */
        txtChanged={this.txtChanged}
        handleBtnChange={this.handleBtnChange}
        deleteData={this.deleteData}
      />
    )
  }

  componentDidMount () {
    /* const action = getTestList()
    store.dispatch(action) */
    // console.log(action)
    /* axios.get('../static/test.json').then((res) => {
      const data = res.data
      const action = initListAction(data)
      store.dispatch(action)
    }) */
    const action = getInitList()
    store.dispatch(action)
    console.log(action)
  }

  txtChanged = (e) => {
    /* const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    } */
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange () {
    this.setState(store.getState())
  }

  handleBtnChange = () => {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  deleteData = (index) => {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default Test