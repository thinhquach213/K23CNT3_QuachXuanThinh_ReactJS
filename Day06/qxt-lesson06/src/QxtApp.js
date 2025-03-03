import React, { Component } from 'react'
import QxtEventForm from './components/QxtEventForm';
import QxtEventForm2 from './components/QxtEventForm2';
import QxrEventForm3 from './components/QxrEventForm3';
import QxtEventForm4 from './components/QxtEventForm4';
import QxtEventForm5 from './components/QxtEventForm5';
import QxtRenderCon from './components/QxtRenderCon';
import QxtRenderArray from './components/QxtRenderArray';
import QxtRenderListObject from './components/QxtRenderListObject';

class QxtApp extends Component {
    // Hàm xử lý dữ liệu từ form student
  QxtHandleSubmitForm = (param)=>{
    console.log("Student:" ,param);
    
  }

  render() {
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <QxtEventForm />
          <QxtEventForm2 />
          <QxrEventForm3 />
          <QxtEventForm4 />
          <QxtEventForm5  onQxtHandleSubmit={this.qxtHandleSubmitForm}  />
          <QxtRenderCon />
          <QxtRenderArray />
          <QxtRenderListObject />
      </div>
    );
  }
}
export default QxtApp;