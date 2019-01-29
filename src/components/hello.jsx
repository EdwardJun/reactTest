import React from 'react'

function Hello(props) {
  // let name = props.name
  console.log(props)
  return <div>这是Hello 组件 ---{props.name}</div>
}

export default Hello