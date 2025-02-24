import React, { Component } from 'react'

class QxtClassCompEvent extends Component {
    // ham su ly du kien
    qxtEventHandleClick1 = ()=>{
        alert("Button 1 clicked ");
    }
    qxtEventHandleClick2 = ()=>{
        alert("Button 2 clicked;");
    }
    qxtEventHandleClick3 = (name)=>{
        alert("Name:"+name);
    }
  render() {
    return (
      <div>
        <button className='btn btn-primary mx-1'onClick={this.qxtEventHandleClick1}>Botton 1 </button>
        <button className='btn btn-success mx-1'onClick={this.qxtEventHandleClick2("Quach Xuan Thinh")}>Botton 2 </button>
      </div>
    );
  }
}
export default  QxtClassCompEvent;
