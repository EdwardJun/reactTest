import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import BindEventChild from '@/components/bindEventChild.jsx'
import store from '@/store/index.js'

//#region 介绍Reaact
//#endregion

class BindEvent extends React.Component {
  constructor () {
    super()
    console.log('store', store.getState())
    this.state = {
      msg: 'haha',
      text: '12345'
    }
    // this.myClickHandler = this.myClickHandler.bind(this, 'add')
  }

  render () {
    return <div>
      BindEvent 组件
      <hr/>
      <button onClick={() => this.myClickHandler('a')} className={['btn', 'btn-default'].join(' ')}>按钮</button>
      {/* <button onClick={this.myClickHandler.bind(this, 'ddddd')} className={['btn', 'btn-default'].join(' ')}>按钮</button> */}
      <h3>{this.state.msg}</h3>
      <button onClick={() => this.doButtonTwo()} className={['btn', 'btn-danger'].join(' ')}>按钮2</button>
      <input type="text" className={'form-control'} value={this.state.msg} onChange={(e) => this.txtChanged(e)} ref="txt" />
      <hr/>
      <BindEventChild text={this.state.text}></BindEventChild>
    </div>
  }

  myClickHandler = (a) => {
    // this.setState() 该方法是异步的，且支持一个回调方法
    console.log(a)
    this.setState({
      msg: '123'
    }, function () {
      console.log('bindEventState', this.state.msg)
    })
  }
  /* myClickHandler (a) {
    // this.setState() 该方法是异步的，且支持一个回调方法
    console.log(a)
    this.setState({
      msg: '123'
    }, function () {
      console.log('bindEventState', this.state.msg)
    })
  } */

  doButtonTwo = () => {
    // console.log(this.state.msg)
    this.doInsteadFor()
    this.setState({
      text: '678910'
    })
  }

  doInsteadFor = () => {
    let handler = {
      one: () => {console.log('one')},
      two: () => {console.log('two')},
      default: () => {console.log('default')}
    }
    handler['' || 'default']()
  }

  txtChanged = (e) => {
    // 获取文本框中的值有两种方式
    // 1. 通过事件参数 e 来获取元素，然后 e.target.value 获取值
    // 2. 通过 this.refs.名称 来获取元素，然后 this.refs.名称.value 获取值
    console.log(e.target.value)
    console.log(this.refs.txt.value)
    const newVal = e.target.value
    this.setState({
      msg: newVal
    })
  }
}

export default BindEvent
