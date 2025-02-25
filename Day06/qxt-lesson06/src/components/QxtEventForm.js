import React, { Component } from 'react'

 class QxtEventForm extends Component {
    constructor(popos){
        super(popos);
        this.state = {
            QxtStudentName:"Quach Thinh",

        }
    }
    // ham su ly su kien khi du lieu tren textbox
    QxtHandleChange=(event)=>{
        this.setState({
            QxtStudentName:event.target.value,
        })
    }
    //khi submit form, lay du lieu va hien thi 
    QxtHandleSubmit= (ev)=>{
        alert('xin chao'+ this.state.QxtStudentName);
        ev.preventDefault();
    }
  render() {
    return (
      <div className='alter alter-info'>
        <h2> Form input</h2>
        <form onSubmit={this.QxtHandleSubmit}>
            <lable htmlFor='QxtStudentName'>
                <input type='text' mame ='QxtStudentName' id='QxtStudentName'
                    value={this.state.QxtStudentName}
                    onChange={this.QxtHandleChange}
                />
                
            </lable>
            <button classNam='btn btn-primary'>Click here</button>
        </form>
        </div>
    )
  }
}
export default QxtEventForm