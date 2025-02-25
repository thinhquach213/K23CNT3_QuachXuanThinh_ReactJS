import React, { Component } from 'react'
import QxtEventForm from './components/QxtEventForm';
import QxtEventForm2 from './components/QxtEventForm2';
import QxrEventForm3 from './components/QxrEventForm3';

class QxtApp extends Component {


  render() {
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <QxtEventForm />
          <QxtEventForm2 />
          <QxrEventForm3 />
      </div>
    );
  }
}
export default QxtApp;