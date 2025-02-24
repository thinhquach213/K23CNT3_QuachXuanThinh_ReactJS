import React, { Component } from 'react'
import QxtFuncEvent from './components/QxtFuncEvent';
import QxtClassCompEvent from './components/QxtClassCompEvent';

class QxtApp extends Component {
  render() {
    return (
      <div className='container border mt-3'>
          <h1 className='text-center alert alert-info my-2'> K23CNT3 - Quach Xuân Thịnh - Event and Form </h1>
          <hr/>
          <div>
              <h2>Function Compoment - Event </h2>
              <QxtFuncEvent />
          </div>
          <hr/>
          <div>
              <h2>Class Compoment - Event </h2>
              <QxtClassCompEvent />
          </div>
      </div>
    );
  }
}
export default QxtApp;