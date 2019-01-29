import React from 'react'
import ReactDom from 'react-dom'
// import Test from '@/test.js'

class Movie extends React.Component {
  constructor () {
    super()
    this.state = {
      msg: '这是一个 class 创建的 Movie 组件'
    }
  }
  render () {
    this.state.msg = '值被我修改了'
    return <div>这是Movie 组件  -----{this.props.name} ------ {this.props.age}
      <h3>{this.state.msg}</h3>
    </div>
  }
}

const user = {
  name: 'zs',
  age: 25
}

ReactDom.render(<div>
  aaa
  {/* <Movie name={user.name} age={user.age}></Movie> */}
  <Movie {...user}></Movie>
</div>, document.getElementById('app'))