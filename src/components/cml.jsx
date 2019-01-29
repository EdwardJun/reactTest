import React from 'react'
import CmlItem from '@/components/cmlItem.jsx'
import cssObj from '@/css/cml.scss'
import 'bootstrap/dist/css/bootstrap.css'

console.log(cssObj)

class Cml extends React.Component {
  constructor () {
    super()
    this.state = {
      commentList: [
        {id: 0, user: 'zero', content: '哈哈， 沙发'},
        {id: 1, user: 'one', content: '哈哈， 凉席'}
      ]
    }
  }
  render () {
    return <div>
      {/* <h1 style={{color: 'red'}}>这是评论列表</h1> */}
      {/* <h1 className={[cssObj.title, cssObj.test].join(' ')}>这是评论列表</h1> */}
      <h1 className={[cssObj.title, 'test'].join(' ')}>这是评论列表</h1>
      {/* this.state.commentList.map(item => <div key={item.id}>
        <p>评论人：{item.user}</p>
      </div>) */}
      {/* this.state.commentList.map((item) => {
        return <div key={item.id}>
          <p>评论人：{item.user}</p>
        </div>
      }) */}
      <button className={['btn', 'btn-primary'].join(' ')}>按钮</button>
      {this.state.commentList.map((item) => {
        return <CmlItem key={item.id} {...item}></CmlItem>
      })}
    </div>
  }
}

export default Cml