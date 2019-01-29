import React from 'react'
import ReactDom from 'react-dom'

// const myh1 = React.createElement('h1', null, '这是一个大大的H1')
const mydiv = <div>这是一个div 元素</div>
let a = 10
let attrStr = [11, 22, 33, 44]

ReactDom.render(<div>
  {a + 2}
  {attrStr.map((item, itemIndex) => {
    return <h3 key={itemIndex}>{item}</h3>
  })}
</div>, document.getElementById('app'))