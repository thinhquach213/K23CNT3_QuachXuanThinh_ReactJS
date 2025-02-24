import React from 'react'

export default function QxtFuncEvent() {
    // ham su ly su kien
    const qxtEventButton1Click = ()=>{
        alert("Button 1 - Clicked");
    };
    const qxtEventButton2Click = ()=>{
        alert("Button 2 - Clicked");
    };
    const qxtEventButton3Click = (name)=>{
        alert("Name:" + name );
    };
  return (
    <div className=''>
        {/*<button className='btn btn-primary' onClick={qxtEventButton1Click()}>
        Button 1
        </button>*/}
        <button className='btn btn-success' onClick={qxtEventButton2Click}>
         Button 2
        </button>
       {/*<button className='btn btn-success' onClick={qxtEventButton3Click("Quach Xuan Thinh")}>
         Button 3
        </button>*/}
        <button className='btn btn-success' onClick={()=>qxtEventButton3Click("Quach Xuan Thinh ANNN")}>
         Button 4   
        </button>
    </div>
  )
}
