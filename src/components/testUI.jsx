import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import test from '@/css/test.scss'

// 当一个普通组件只有 render 函数时，可以使用无状态组件代替，性能更优
const TestUI = (props) => {
  return (
    <div className='test-page'>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search for..." value={props.inputValue} onChange={(e) => props.txtChanged(e)} />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={() => props.handleBtnChange()}>Go!</button>
        </span>
      </div>
      <ul className={'list-group'}>
        {props.list.map((item, index) => {
          return <li className="list-group-item" key={index}>{item}
            <span className={test.deleteIcon} onClick={() => props.deleteData(index)}>X</span>
          </li>
        })}
      </ul>
    </div>
  )
}

/* class TestUI extends React.Component {
  render () {
    return (
      <div className='test-page'>
        <div className="input-group">
        {console.log(this.props.inputValue)}
        {console.log(this.props.list)}
          <input type="text" className="form-control" placeholder="Search for..." value={this.props.inputValue} onChange={(e) => this.props.txtChanged(e)} ref="txt" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={() => this.props.handleBtnChange()}>Go!</button>
          </span>
        </div>
        <ul className={'list-group'}>
          {this.props.list.map((item, index) => {
            return <li className="list-group-item" key={index}>{item}
              <span className={test.deleteIcon} onClick={() => this.props.deleteData(index)}>X</span>
            </li>
          })}
        </ul>
      </div>
    )
  }
} */

export default TestUI