import React, { Component } from 'react'

export default class QxtCompA extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: " quach Thinh",
        };
    }
  render() {
    return (
      <div>
        <h2>QxtCompA</h2>
        <p2>Du lieu trong state: {this.state.name}</p2>
        <h3>Hien thi du lieu tu props</h3>
        <p>Name: {this.props.qxtname}</p>
        <p>Adress: {this.props.qxtAdress}</p>
        </div> 
    )
  }
}
