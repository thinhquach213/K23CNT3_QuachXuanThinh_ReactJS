import React from 'react'
 import QxtReadApiLocal from './components/QxtReadApiLocal'
 import QxtReadMockAPI from './components/QxtReadMockAPI'
 import QxtCreateMockAPI from './components/QxtCreateMockAPI'
 
 export default function QxtApp() {
   return (
     <div className='container border my-3 p-3'>
         <h1>ReactJS -API - Quách Xuân Thịnh</h1>
     <QxtReadApiLocal />
     <hr/>
     <h2>Đọc dữ liệu từ MockApi (mocapi.io)</h2>
     <QxtReadMockAPI />
 
     <QxtCreateMockAPI />
     </div>
   )
 }
