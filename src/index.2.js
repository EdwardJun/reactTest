import React from 'react'
import ReactDom from 'react-dom'

function Hello(props) {
  // let name = props.name
  console.log(props)
  return <div>这是Hello 组件 ---{props.name}</div>
}

const dog = {
  name: '小明',
  age: 3
}

ReactDom.render(<div>
  <Hello {...dog}></Hello>
</div>, document.getElementById('app'))