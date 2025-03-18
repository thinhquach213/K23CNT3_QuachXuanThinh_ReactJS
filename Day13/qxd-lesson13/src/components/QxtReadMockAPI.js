import React, { useEffect, useState } from 'react'
 import axios from 'axios'
 export default function QxtReadMockAPI() {
     // khởi tạo state
     const [qxtListUser, setQxtListUser] = useState([])
     // api
     const qxtApiOnline = "https://67d8d4b300348dd3e2a85cf3.mockapi.io/k23cnt3_vutienduc/vtd_user"
     // Đọc dữ liệu từ api bằng axios
     useEffect(()=>{
         axios
             .get(qxtApiOnline)
             .then((qxt_reponse)=>{
                 setQxtListUser(qxt_reponse.data)
             })
             .catch((error)=>{
                 console.log("Lỗi");
             })
     },[])

     // view data
     const qxtElementUser = qxtListUser.map((qxtItem,index)=>{
         return (
             <tr>
                 <td>{qxtItem.qxtId}</td>
                 <td>{qxtItem.qxtFullName}</td>
                 <td>{qxtItem.qxtAge}</td>
                 <td>{qxtItem.qxtActive?"Hoạt động": "Khóa"}</td>
                 <td>
                     <button>Sửa</button>
                     <button>Xóa</button>
                 </td>
             </tr>
         )
     })
   return (
     <div className='alert alert-danger'>
         <h2>Danh sách</h2>
         <table className='table table-bordered bg-white'>
             <thead>
                 <tr>
                     <th>ID</th>
                     <th>FullName</th>
                     <th>Age</th>
                     <th>Active</th>
                     <th>Action</th>
                 </tr>
             </thead>
             <tbody>
                 {qxtElementUser}
             </tbody>
         </table>
     </div>
   )
 }
