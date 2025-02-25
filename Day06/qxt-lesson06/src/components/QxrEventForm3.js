import React, { Component } from 'react'

class QxrEventForm3 extends Component {
  render() {
    return (
      <div className='alter alter-success'>
        <h2>Form input - radio</h2>
        <form>
            <div>
                <label htmlFor=''>Gioi Tinh:
                </label> &nbsp; &nbsp; &nbsp;
                <input type='radio' name='Qxtgioitinh' value="Nam " id='QxtNam'/> 
                <label htmlFor='QxtNam'>Nam</label>  &nbsp; &nbsp; &nbsp;
                <input type='radio' name='Qxtgioitinh' value="Nam " id='QxtNu'/> 
                <label htmlFor='QxtNu'>Nu</label> &nbsp; &nbsp; &nbsp;
                <input type='radio' name='Qxtgioitinh' value="khac " id='Qxtkhac'/> 
                <label htmlFor='Qxtkhac'>Khac</label>
            </div>
        </form>
      </div>
    )
  }
}
export default  QxrEventForm3