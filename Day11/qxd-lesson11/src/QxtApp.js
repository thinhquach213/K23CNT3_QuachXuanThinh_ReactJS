import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import QxtNavNar from './components/QxtNavNar'
import QxtHome from './components/QxtHome'
import QxtAbout from './components/QxtAbout'
import QxtContact from './components/QxtContact'
import QxtListUser from './components/QxtListUser'
import QxtFormUser from './components/QxtFormUser'

export default function QxtApp() {

  const listUsers = [
    {id:"SV001", qxtFullName:" con ga con", qxtUserName:"ga mai", qxtPass:"d65cyb"},
    {id:"SV002", qxtFullName:"con khung long", qxtUserName:"tay ngan", qxtPass:"tcyb"},
    {id:"SV003", qxtFullName:"Vu lui", qxtUserName:"tien", qxtPass:"d574b"},
  ]

  const [qxtUsers, setQxtUsers] = useState(listUsers)

  // Hàm sử lý sự kiện thêm mới
  const qxtHandleAdd = (qxtParam) => {
    console.log("qxtHandleAdd:", qxtParam);
    
    setQxtUsers(prev =>{
       return[
      ...prev,
      qxtParam
    ]
    })
  }
  return (
    <div className='container border my-3'>
      <h1>React Route Dom - Demo - [Quach Xuan Thinh - K23CNT3]</h1>
      <hr />
    <Router>
      <QxtNavNar />
      <Routes>
        <Route path='/' element={<QxtHome/>} />
        <Route path='/about' element={<QxtAbout/>} />
        <Route path='/contact' element={<QxtContact/>} />
        <Route path='/list-user' element={<QxtListUser renderQxtUsers={qxtUsers}/>} />
        <Route path='/create-user' element={<QxtFormUser onQxtAddNew={qxtHandleAdd}/>} />
      </Routes>
    </Router>
    </div>
  )
}
