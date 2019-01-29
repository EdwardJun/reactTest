import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class bindEventChild extends React.Component {
  constructor (props) {
    super()
    this.state = {
      test: 'test',
      childText: ''
    }
    console.log('props', props)
  }

  render () {
    return <div>bindEventChild
      <h3>{this.state.childText}</h3>
    </div>
  }
  // 获取传递的参数的生命周期函数
  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log('getDerivedStateFromProps----------')
    // console.log('nextProps', nextProps)
    // console.log('prevState', prevState)
    if (nextProps.text !== prevState.childText) {
      return {
        childText: nextProps.text
      }
    }
    return null
  }
}

export default bindEventChild