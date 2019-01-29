import React from 'react'
import ReactDom from 'react-dom'
import Hello from '@/components/hello.jsx'

const dog = {
  name: '小明',
  age: 3
}

ReactDom.render(<div>
  <Hello {...dog}></Hello>
</div>, document.getElementById('app'))